import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import { gsap } from "../lib/motion";

export interface ArcCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  radius?: number;
  angleStep?: number; // in degrees, e.g. 26
}

export function ArcCarousel<T>({
  items,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 4500,
  className = "",
  radius = 620,
  angleStep = 24,
}: ArcCarouselProps<T>) {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const autoPlayTimer = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const count = items.length;

  const next = useCallback(() => {
    setActive((curr) => (curr + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setActive((curr) => (curr - 1 + count) % count);
  }, [count]);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isDragging) return;
    autoPlayTimer.current = window.setInterval(next, autoPlayInterval);
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [autoPlay, autoPlayInterval, isDragging, next]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Pointer drag gestures
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaX.current < -40) {
      next();
    } else if (dragDeltaX.current > 40) {
      prev();
    }
    dragDeltaX.current = 0;
  };

  return (
    <div
      className={`arc-carousel-root ${className}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      }}
      onMouseLeave={() => {
        if (autoPlay && !isDragging) {
          autoPlayTimer.current = window.setInterval(next, autoPlayInterval);
        }
      }}
      aria-roledescription="carousel"
    >
      {/* 3D Arc Stage */}
      <div
        ref={stageRef}
        className="arc-carousel-stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {items.map((item, i) => {
          // Circular shortest distance
          let diff = i - active;
          if (diff > count / 2) diff -= count;
          if (diff < -count / 2) diff += count;

          const isActive = diff === 0;
          const isVisible = Math.abs(diff) <= 2; // only render active and 2 on each side
          if (!isVisible) return null;

          const angleDeg = diff * angleStep;
          const angleRad = (angleDeg * Math.PI) / 180;
          const tx = Math.sin(angleRad) * radius;
          const tz = (Math.cos(angleRad) - 1) * (radius * 0.75);
          const ry = -angleDeg * 0.9;
          const scale = Math.max(0.78, Math.cos(angleRad) * 1.02);
          const opacity = Math.max(0.25, Math.pow(Math.cos(angleRad), 2.2));
          const zIndex = 20 - Math.abs(diff);

          return (
            <div
              key={i}
              className={`arc-card-wrapper ${isActive ? "is-active" : "is-inactive"}`}
              style={{
                transform: `translateX(calc(-50% + ${tx}px)) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                opacity,
                zIndex,
              }}
              onClick={() => {
                if (!isActive) goTo(i);
              }}
              aria-hidden={!isActive}
            >
              {renderItem(item, i, isActive)}
            </div>
          );
        })}
      </div>

      {/* Luxury Controls */}
      <div className="arc-carousel-controls">
        <button
          type="button"
          className="arc-btn arc-btn-prev"
          onClick={prev}
          aria-label="Previous card"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="arc-indicators" role="tablist">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === active}
              className={`arc-dot ${idx === active ? "is-active" : ""}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="arc-btn arc-btn-next"
          onClick={next}
          aria-label="Next card"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
