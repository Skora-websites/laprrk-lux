import { useState, useRef, useEffect, useCallback } from "react";

const CHAPTERS = [
  {
    id: 0,
    titleHtml: (
      <>
        Build software that<br />
        <em>ships</em> and scales.
      </>
    ),
    body: "Product engineering, applied AI and cloud systems, delivered in two-week sprints with a working demo each time.",
    cta: { label: "Explore services", href: "#services", isScroll: true },
    tag: "01 // SERVICES",
  },
  {
    id: 1,
    titleHtml: (
      <>
        Hire engineers who<br />
        <em>fit</em> the work.
      </>
    ),
    body: "Practising engineers screen every candidate, so your shortlist arrives in five to seven business days.",
    cta: { label: "See how we hire", href: "hiring-consultation.html", isScroll: false },
    tag: "02 // HIRING",
  },
  {
    id: 2,
    titleHtml: (
      <>
        Train teams that<br />
        deliver on <em>day one.</em>
      </>
    ),
    body: "Live, lab-based programmes for IT corporates and institutes, roughly 70% hands-on.",
    cta: { label: "View programmes", href: "corporate-training.html", isScroll: false },
    tag: "03 // TRAINING",
  },
];

const TOTAL_CHAPTERS = 3;
const DEFAULT_DURATION = 24;

export function CinematicStoryHero() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progresses, setProgresses] = useState<number[]>([0, 0, 0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lockRef = useRef<number | null>(null);

  const getDuration = useCallback(() => {
    const v = videoRef.current;
    if (v && Number.isFinite(v.duration) && v.duration > 0) {
      return v.duration;
    }
    return DEFAULT_DURATION;
  }, []);

  // Update progress bars and current chapter as video plays
  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;

    const duration = getDuration();
    const currentTime = v.currentTime;
    const overallProgress = Math.min(1, Math.max(0, currentTime / duration));

    // Calculate progress for each chapter [0..1]
    const p0 = Math.min(1, Math.max(0, overallProgress * 3 - 0));
    const p1 = Math.min(1, Math.max(0, overallProgress * 3 - 1));
    const p2 = Math.min(1, Math.max(0, overallProgress * 3 - 2));
    setProgresses([p0, p1, p2]);

    if (lockRef.current !== null) {
      // Seek lock is active, ignore automatic chapter switches until settled
      return;
    }

    const currentChapter = Math.min(
      TOTAL_CHAPTERS - 1,
      Math.floor(overallProgress * TOTAL_CHAPTERS)
    );
    setActiveChapter(currentChapter);
  }, [getDuration]);

  const selectChapter = (index: number) => {
    const target = Math.max(0, Math.min(TOTAL_CHAPTERS - 1, index));
    setActiveChapter(target);

    const v = videoRef.current;
    if (!v) return;

    const duration = getDuration();
    const boundary = (duration * target) / TOTAL_CHAPTERS;
    lockRef.current = target;

    try {
      v.currentTime = boundary;
    } catch {
      // ignore
    }

    // Release lock after short delay
    setTimeout(() => {
      lockRef.current = null;
    }, 300);

    // If paused, trigger play
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Autoplay attempt
    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  return (
    <section className="stage cinematic-story-stage" id="top" aria-label="Cinematic Story">
      <h1 className="sr-only">
        Laprrk Technology Solutions — IT services, IT hiring and corporate training
      </h1>

      {/* Background Cinematic Video */}
      <video
        ref={videoRef}
        className="stage-video"
        src="/media/sonotype-cinematic-story.mp4"
        poster="/media/sonotype-cinematic-poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Ambient Vignette & Gradient Mesh */}
      <div className="stage-overlay">
        {CHAPTERS.map((ch, idx) => {
          const isActive = idx === activeChapter;
          return (
            <div
              key={ch.id}
              className={`panel panel-${idx + 1} ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
              style={{
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                transition: "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="panel-content">
                <div
                  className="story-pill-tag mono"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: "rgba(192, 236, 217, 0.14)",
                    border: "1px solid rgba(192, 236, 217, 0.32)",
                    color: "#c0ecd9",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.14em",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#34d399",
                      boxShadow: "0 0 8px #34d399",
                    }}
                  />
                  <span>{ch.tag}</span>
                </div>

                <h2 className="display-heading">{ch.titleHtml}</h2>
                <p>{ch.body}</p>

                <div className="panel-cta">
                  {ch.cta.isScroll ? (
                    <a
                      className="btn btn-primary story-btn"
                      href={ch.cta.href}
                      onClick={scrollToServices}
                    >
                      {ch.cta.label} ↓
                    </a>
                  ) : (
                    <a className="btn btn-primary story-btn" href={ch.cta.href}>
                      {ch.cta.label} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chapter Progress Indicators & Play/Pause Controls */}
      <div className="story-controls" id="storyControls">
        <div className="chapter-segments" role="group" aria-label="Story chapters">
          {CHAPTERS.map((ch, i) => (
            <button
              key={ch.id}
              className="chapter-btn"
              type="button"
              onClick={() => selectChapter(i)}
              aria-label={`Chapter ${i + 1}: ${ch.tag}`}
              title={ch.tag}
              aria-current={activeChapter === i ? "step" : undefined}
            >
              <span className="track" aria-hidden="true" />
              <span
                className="fill"
                aria-hidden="true"
                style={{
                  transform: `scaleX(${progresses[i] || 0})`,
                }}
              />
            </button>
          ))}
        </div>

        <button
          className="play-btn"
          id="playBtn"
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause cinematic story" : "Play cinematic story"}
          title={isPlaying ? "Pause cinematic story" : "Play cinematic story"}
        >
          {isPlaying ? (
            <svg className="ic-pause" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M8 5v14M16 5v14" />
            </svg>
          ) : (
            <svg className="ic-play" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m8 5 11 7-11 7Z" />
            </svg>
          )}
        </button>
      </div>

      {/* Bouncy Scroll Indicator pointing down to Home Page Content */}
      <a
        href="#services"
        onClick={scrollToServices}
        className="story-scroll-hint"
        aria-label="Scroll down to explore services"
      >
        <span className="scroll-hint-text">Scroll to explore</span>
        <svg
          className="scroll-hint-arrow"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>

      <style>{`
        .cinematic-story-stage {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
          background: #021924;
        }

        .cinematic-story-stage .stage-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          pointer-events: none;
          z-index: 1;
        }

        .cinematic-story-stage .stage-overlay {
          position: absolute;
          inset: 0;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .cinematic-story-stage .story-controls {
          position: absolute;
          right: clamp(20px, 4vw, 48px);
          bottom: 24px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cinematic-story-stage .story-btn {
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 0.1em;
          box-shadow: 0 4px 20px rgba(192, 236, 217, 0.4);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cinematic-story-stage .story-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 6px 28px rgba(192, 236, 217, 0.6);
        }

        .story-scroll-hint {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #c0ecd9;
          font-family: Manrope, sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.85;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .story-scroll-hint:hover {
          opacity: 1;
          transform: translateX(-50%) translateY(2px);
          color: #ffffff;
        }

        .scroll-hint-arrow {
          animation: floatChevron 1.8s ease-in-out infinite;
        }

        @keyframes floatChevron {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        @media (max-width: 768px) {
          .cinematic-story-stage .panel {
            padding-top: 104px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .cinematic-story-stage .panel-content {
            padding: 0 !important;
          }
          .story-scroll-hint {
            display: none;
          }
          .cinematic-story-stage .story-controls {
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}
