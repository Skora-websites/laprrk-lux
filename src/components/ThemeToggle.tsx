import { useEffect, useState } from "react";

export function ThemeToggle({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read initial theme from document or localStorage
    const current = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null;
    const initial = current || (localStorage.getItem("laprrk-theme") as "light" | "dark") || "light";
    setTheme(initial);

    const onThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: "light" | "dark" }>;
      if (customEvent.detail?.theme) {
        setTheme(customEvent.detail.theme);
      }
    };

    window.addEventListener("themechange", onThemeChange);
    return () => window.removeEventListener("themechange", onThemeChange);
  }, []);

  const toggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("laprrk-theme", nextTheme);

    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", nextTheme === "dark" ? "#020d14" : "#f5f9f8");
    }

    // Notify other components
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: nextTheme } }));
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggle}
      className={`theme-toggle-btn ${className}`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: compact ? 52 : 62,
        height: compact ? 28 : 32,
        padding: "3px 4px",
        borderRadius: 999,
        background: isDark
          ? "linear-gradient(135deg, rgba(7, 36, 52, 0.95), rgba(3, 18, 28, 0.95))"
          : "linear-gradient(135deg, rgba(235, 246, 241, 0.95), rgba(215, 236, 227, 0.95))",
        border: isDark
          ? "1px solid rgba(192, 236, 217, 0.35)"
          : "1px solid rgba(14, 122, 95, 0.25)",
        boxShadow: isDark
          ? "0 4px 14px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 0 10px rgba(192, 236, 217, 0.2)"
          : "0 2px 10px rgba(2, 25, 36, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        outline: "none",
        flexShrink: 0,
      }}
    >
      {/* Sun Icon (Left) */}
      <span
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: compact ? 20 : 24,
          height: compact ? 20 : 24,
          color: isDark ? "rgba(185, 205, 205, 0.45)" : "#e69b00",
          transition: "color 0.3s ease, transform 0.3s ease",
          transform: isDark ? "scale(0.85)" : "scale(1.05)",
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 24 24" width={compact ? 13 : 15} height={compact ? 13 : 15} fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" fill={isDark ? "none" : "#e69b00"} />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </span>

      {/* Moon Icon (Right) */}
      <span
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: compact ? 20 : 24,
          height: compact ? 20 : 24,
          color: isDark ? "#c0ecd9" : "rgba(14, 122, 95, 0.4)",
          transition: "color 0.3s ease, transform 0.3s ease",
          transform: isDark ? "scale(1.05)" : "scale(0.85)",
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 24 24" width={compact ? 13 : 15} height={compact ? 13 : 15} fill={isDark ? "#c0ecd9" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>

      {/* Animated Sliding Knob */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: compact ? 3 : 3,
          left: compact ? 3 : 3,
          width: compact ? 22 : 26,
          height: compact ? 22 : 26,
          borderRadius: "50%",
          background: isDark
            ? "linear-gradient(135deg, #34d399 0%, #0e7a5f 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #e6f4ee 100%)",
          boxShadow: isDark
            ? "0 2px 10px rgba(52, 211, 153, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.6)"
            : "0 2px 8px rgba(2, 25, 36, 0.15), inset 0 1px 1px #ffffff",
          transform: isDark
            ? `translateX(${compact ? 24 : 30}px)`
            : "translateX(0px)",
          transition: "transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease",
          zIndex: 0,
        }}
      />
    </button>
  );
}
