const BACKDROP_IMAGES: Record<string, string> = {
  services: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80", // abstract emerald fluid
  tech: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80", // 3d glass sphere & gradients
  synergy: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80", // luminous organic waves
  roles: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80", // abstract fluid architecture
  why: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80", // soft pastel texture flow
  cases: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1600&q=80", // 3d iridescent glass flow
  posts: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80", // luminous wave gradients
  faq: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80", // emerald fluid
  subpage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80", // abstract 3d glass
};

export function SectionBackdrop({
  variant = "services",
  opacity = 0.16,
  blur = 42,
}: {
  variant?: keyof typeof BACKDROP_IMAGES | string;
  opacity?: number;
  blur?: number;
}) {
  const src = BACKDROP_IMAGES[variant] || BACKDROP_IMAGES.services;

  return (
    <div
      className="section-backdrop-wrapper"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="section-backdrop-img"
        style={{
          filter: `blur(${blur}px) saturate(145%)`,
          opacity,
        }}
      />
      {/* Soft vignette mask so edges feather softly */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 35%, var(--base) 100%)",
        }}
      />
    </div>
  );
}
