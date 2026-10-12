import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";

/* ---------- HoverFollow: port of the reference site's `.hover-reveal-item`.

   An absolutely-positioned trailing layer follows the pointer inside its
   parent. The reference implementation writes `transform: translate(x,y)`
   from a `mousemove` handler (with a setInterval poll); here the trailing
   layer is lerped on the GSAP ticker so it trails smoothly instead of being
   snapped to the cursor, and it hides at the edges of the parent.

   The child must be rendered as the last element of the item content. */

export function HoverFollow({
  children,
  size = 220,
  className = "",
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;
    const layer = item.lastElementChild as HTMLElement | null;
    if (!layer) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Centre the layer on the pointer once so it does not sit at 0,0.
    gsap.set(layer, { xPercent: -50, yPercent: -50, x: -9999, y: -9999 });

    let targetX = 0;
    let targetY = 0;
    let visible = false;

    const tick = () => {
      const current = gsap.getProperty(layer, "x") as number;
      const currentY = gsap.getProperty(layer, "y") as number;
      // 0.18 gives a soft trail; the reference snapped hard to the cursor.
      gsap.set(layer, {
        x: current + (targetX - current) * 0.18,
        y: currentY + (targetY - currentY) * 0.18,
      });
    };

    const onMove = (e: PointerEvent) => {
      const r = item.getBoundingClientRect();
      targetX = e.clientX - r.left;
      targetY = e.clientY - r.top;
      if (!visible) {
        visible = true;
        gsap.to(layer, { opacity: 1, duration: 0.25 });
      }
    };
    const onEnter = () => {
      gsap.to(layer, { opacity: 1, duration: 0.25 });
    };
    const onLeave = () => {
      visible = false;
      gsap.to(layer, { opacity: 0, duration: 0.3 });
    };

    item.addEventListener("pointerenter", onEnter);
    item.addEventListener("pointermove", onMove);
    item.addEventListener("pointerleave", onLeave);
    gsap.ticker.add(tick);

    return () => {
      item.removeEventListener("pointerenter", onEnter);
      item.removeEventListener("pointermove", onMove);
      item.removeEventListener("pointerleave", onLeave);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size,
          height: size,
          borderRadius: 999,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
          // Children of the layer (an image, typically) fill it.
          display: "grid",
          placeItems: "center",
        }}
      />
    </div>
  );
}

/* ---------- DimSiblings: port of the reference's `.item-row` hover.

   Hovering one row dims all its siblings to 0.2 and restores them on leave.
   Uses one delegated listener instead of a handler per row. */

export function DimSiblings({
  children,
  dimTo = 0.2,
  selector = "[data-dim-row]",
  className = "",
  as = "div",
}: {
  children: ReactNode;
  dimTo?: number;
  selector?: string;
  className?: string;
  as?: "div" | "ul" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const rows = () => Array.from(root.querySelectorAll<HTMLElement>(selector));

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const row = target.closest<HTMLElement>(selector);
      if (!row || !root.contains(row)) return;
      rows().forEach((r) => gsap.to(r, { opacity: r === row ? 1 : dimTo, duration: 0.4, ease: "power2.out" }));
    };
    const onLeave = () => {
      rows().forEach((r) => gsap.to(r, { opacity: 1, duration: 0.4, ease: "power2.out" }));
    };

    root.addEventListener("pointerover", onEnter);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointerover", onEnter);
      root.removeEventListener("pointerleave", onLeave);
      onLeave();
    };
  }, [dimTo, selector]);

  const Tag = as as "div";
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

/* ---------- LinkImageSwap: port of `.inter-links-center`.

   Hovering a link dims its siblings and swaps the shown image by index.
   Controlled component: the parent owns the active index so it can also
   highlight the matching link. */

export function LinkImageSwap({
  labels,
  active,
  onChange,
  className = "",
}: {
  labels: { id: string; label: string; href: string }[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <ul className={className} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 4 }}>
      {labels.map((l) => {
        const isActive = l.id === active;
        return (
          <li key={l.id} data-dim-row>
            <a
              href={l.href}
              onPointerEnter={() => onChange(l.id)}
              onFocus={() => onChange(l.id)}
              style={{
                display: "block",
                padding: "14px 0",
                borderBottom: "1px solid var(--line)",
                color: isActive ? "var(--accent-strong)" : "var(--text)",
                textDecoration: "none",
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
                letterSpacing: "-0.02em",
                opacity: isActive ? 1 : 0.55,
                transition: "opacity .35s ease, color .35s ease",
              }}
            >
              {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Marquee: seamless infinite row.

   Reuses the stylesheet's existing .marquee-track convention: the track is a
   single flex row of `.marquee-group`s and the animation translates it by
   -50%, so two identical groups produce an invisible seam. The item list is
   rendered twice here for that reason. ---------- */

export function Marquee({
  children,
  gap = 34,
  className = "",
}: {
  children: ReactNode;
  gap?: number;
  className?: string;
}) {
  const group = (
    <div className="marquee-group" style={{ gap, paddingRight: gap }}>
      {children}
    </div>
  );

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {group}
        {group}
      </div>
    </div>
  );
}

/* ---------- useActiveIndex: shared hover state for LinkImageSwap. ---------- */

export function useActiveIndex(initial: string) {
  const [active, setActive] = useState(initial);
  return { active, setActive };
}
