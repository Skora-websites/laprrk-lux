import { gsap, ScrollTrigger } from "../lib/motion";

/* Spring smooth scrolling, ported from the reference site's Springer easing
   (stiffness 0.2, damping 0.8) driving native window scroll.

   Design notes:
   - The wheel is captured and the smoothed value is written to
     window.scrollY every frame, so ScrollTrigger, the scrollbar, anchors and
     touch scroll all keep native behaviour.
   - Enabled only for fine pointers when prefers-reduced-motion is absent;
     everything else falls through to native scrolling.
   - External scroll events (scrollbar drag, anchor, refresh) re-seed the
     spring so it never fights the user. */

const SPRING = { stiffness: 0.2, damping: 0.8, mass: 1 };
const EPSILON = 0.05;

export type SmoothScroller = {
  destroy: () => void;
  scrollTo: (y: number, animate?: boolean) => void;
};

export function createSmoothScroller(): SmoothScroller | null {
  if (typeof window === "undefined") return null;
  if (prefersReducedMotion() || !hasFinePointer()) return null;

  const root = document.documentElement;
  /** Smoothed position actually written to the page. */
  const state = { value: window.scrollY, velocity: 0 };
  let target = window.scrollY;
  let raf = 0;
  let running = false;
  /** Timestamp of the last wheel event, used to tell our scrolls from foreign ones. */
  let lastWheel = 0;

  const maxScroll = () =>
    Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  const clampToTarget = (y: number) => Math.min(Math.max(0, y), maxScroll());

  const apply = () => {
    state.value = clampToTarget(state.value);
    // A real scroll settles in a few hundred px. If the delta grows instead of
    // shrinking, something external is fighting us: stop immediately rather
    // than loop a wedged page (this has happened during StrictMode teardown).
    if (Math.abs(state.value - window.scrollY) > 1200) {
      stop();
      target = window.scrollY;
      state.value = window.scrollY;
      return;
    }
    if (Math.abs(state.value - window.scrollY) > 0.4) {
      window.scrollTo(0, state.value);
    }
  };

  /** One Verlet-ish spring step: force toward target minus velocity damping. */
  const integrate = () => {
    const accel = ((target - state.value) * SPRING.stiffness - state.velocity * SPRING.damping) / SPRING.mass;
    state.velocity += accel;
    state.value += state.velocity;
    if (
      Math.abs(target - state.value) < EPSILON &&
      Math.abs(state.velocity) < EPSILON
    ) {
      state.value = target;
      state.velocity = 0;
    }
  };

  const tick = () => {
    integrate();
    apply();
    const settled = state.velocity === 0 && Math.abs(target - state.value) < EPSILON;
    if (settled) {
      running = false;
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    running = true;
    raf = requestAnimationFrame(tick);
  };

  const stop = () => {
    cancelAnimationFrame(raf);
    running = false;
    raf = 0;
    state.velocity = 0;
  };

  const scrollTo = (y: number, animate = true) => {
    target = clampToTarget(y);
    if (!animate) {
      stop();
      state.value = target;
      apply();
      return;
    }
    start();
  };

  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey) return; // never intercept pinch-zoom
    // deltaMode 1 is lines; wheel mice with a smooth trackpad use pixels.
    const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    lastWheel = Date.now();
    target = clampToTarget(window.scrollY + delta);
    e.preventDefault();
    start();
  };

  const onScroll = () => {
    // Re-seed on scrolls we did not cause (scrollbar drag, anchor, refresh).
    if (running || Date.now() - lastWheel < 120) return;
    target = window.scrollY;
    state.value = window.scrollY;
    state.velocity = 0;
  };

  const isFormField = (t: EventTarget | null) =>
    t instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);

  const onKey = (e: KeyboardEvent) => {
    if (isFormField(e.target)) return;
    const page = window.innerHeight * 0.9;
    const step =
      e.key === "PageDown" || e.key === " "
        ? page
        : e.key === "PageUp"
          ? -page
          : e.key === "ArrowDown"
            ? 110
            : e.key === "ArrowUp"
              ? -110
              : 0;
    if (step !== 0) {
      e.preventDefault();
      scrollTo(window.scrollY + step);
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollTo(maxScroll());
    }
  };

  const onResize = () => {
    // Clamping is enough: ScrollTrigger refreshes on resize by itself, and
    // refreshing from inside a resize handler can race with pin measurements.
    target = clampToTarget(target);
    state.value = clampToTarget(state.value);
  };

  root.setAttribute("data-scroll", "js");
  ScrollTrigger.config({ ignoreMobileResize: true });
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKey);
  window.addEventListener("resize", onResize);

  return {
    destroy() {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      root.removeAttribute("data-scroll");
    },
    scrollTo,
  };
}

/* Shared motion-capability predicates. Kept exported because every motion
   component in this app gates on the same two conditions. */

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function hasFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}
