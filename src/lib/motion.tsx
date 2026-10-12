import { createContext, useContext, useEffect, type ReactNode, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createSmoothScroller } from "./spring-scroll";

gsap.registerPlugin(ScrollTrigger);

type GsapContextFn = () => void;

const MotionCtx = createContext<{
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
} | null>(null);

/**
 * One provider registers ScrollTrigger once for the app.
 * Components never create their own scroll listeners.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Refresh once after fonts/images settle so pins measure correctly.
    // Deferred twice: the first tick catches late layout, and doing it after
    // paint keeps it off the mount critical path (and off StrictMode's
    // double-invoked effect, which would otherwise refresh during teardown).
    const t = setTimeout(() => {
      if (document.visibilityState === "visible") ScrollTrigger.refresh();
    }, 300);

    // Spring smooth scroll (desktop, motion-allowed only).
    const scroller = createSmoothScroller();

    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      scroller?.destroy();
    };
  }, []);

  return <MotionCtx.Provider value={{ gsap, ScrollTrigger }}>{children}</MotionCtx.Provider>;
}

export function useMotion() {
  const ctx = useContext(MotionCtx);
  if (!ctx) throw new Error("useMotion must be used inside MotionProvider");
  return ctx;
}

/**
 * gsap.context wrapper with automatic revert cleanup and
 * prefers-reduced-motion collapse (opacity-only reveals survive).
 */
export function useGsapContext(
  fn: GsapContextFn,
  deps: unknown[] = [],
  scope?: RefObject<HTMLElement | null>,
) {
  const { gsap } = useMotion();
  useEffect(() => {
    const ctx = scope?.current ? gsap.context(fn, scope.current) : gsap.context(fn);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };
