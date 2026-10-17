import { Reveal } from "../components/motion-primitives";
import { BlurReveal, RevealWords } from "../components/motion-lib";
import { Marquee, DimSiblings, HoverFollow, LinkImageSwap, useActiveIndex } from "../components/interaction-lib";
import { SectionHead } from "../components/chrome";
import { FluidBackground, Magnetic } from "../components/effects";
import { SectionBackdrop } from "../components/SectionBackdrop";
import {
  SERVICES_HEAD, DIVISIONS, TRAINING_DIVISION, TECH_HEAD, TECH_MARQUEE, TECH_CARDS,
  SYNERGY_HEAD, SYNERGY_SCRUB, SYNERGY, ROLES_HEAD, ROLES, WHY_HEAD, WHY_CARDS,
  STEPS, CASES_HEAD, CASES, INDUSTRIES, POSTS_HEAD, POSTS, FAQS, CTA,
} from "../lib/home-data";

const HOME_SERVICES_3 = [
  {
    tag: "DIV // 01",
    badge: "◈",
    accent: "emerald" as const,
    title: DIVISIONS[0].title,
    num: DIVISIONS[0].num,
    body: DIVISIONS[0].body,
    chips: [
      { label: "Custom Software", href: "custom-software-development.html" },
      { label: "Web Applications", href: "web-application-development.html" },
      { label: "Mobile Apps", href: "mobile-app-development.html" },
      { label: "Generative AI & LLMs", href: "generative-ai.html" },
      { label: "Cloud & DevOps", href: "cloud-services.html" },
      { label: "QA Automation", href: "qa-test-automation.html" },
    ],
    more: DIVISIONS[0].more,
  },
  {
    tag: "DIV // 02",
    badge: "✦",
    accent: "cyan" as const,
    title: DIVISIONS[1].title,
    num: DIVISIONS[1].num,
    body: DIVISIONS[1].body,
    chips: [
      { label: "Permanent IT Hiring", href: "permanent-it-recruitment.html" },
      { label: "Contract Staffing", href: "contract-staffing.html" },
      { label: "Staff Augmentation", href: "staff-augmentation.html" },
      { label: "GCC & India Setup", href: "gcc-hiring.html" },
      { label: "Executive Search", href: "executive-search.html" },
      { label: "RPO & Campus", href: "rpo.html" },
    ],
    more: DIVISIONS[1].more,
  },
  {
    tag: "DIV // 03",
    badge: "⬢",
    accent: "gold" as const,
    title: "Training & Upskilling",
    num: TRAINING_DIVISION.num,
    body: TRAINING_DIVISION.body,
    chips: [
      { label: "Generative AI Training", href: "generative-ai-training.html" },
      { label: "Cloud & DevOps", href: "cloud-training.html" },
      { label: "NEP Credit Courses", href: "nep-credit-courses.html" },
      { label: "Faculty Development", href: "faculty-development-programs.html" },
      { label: "Industry Bootcamps", href: "industry-readiness-bootcamp.html" },
      { label: "Placement Training", href: "placement-training.html" },
    ],
    more: { label: "Explore all training programmes", href: "corporate-training.html" },
  },
];

export function Services() {
  return (
    <section className="section lux-pad" id="services" aria-label="Services" style={{ position: "relative", overflow: "hidden", background: "#f6faf8" }}>
      <SectionBackdrop variant="services" opacity={0.16} blur={38} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title={SERVICES_HEAD.title} lede={SERVICES_HEAD.lede} eyebrow="What we do" />
        <div className="services-editorial-grid">
          {HOME_SERVICES_3.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="services-editorial-col">
                <div className="editorial-tag-row">
                  <span className="editorial-tag">{s.tag}</span>
                  <span className="editorial-num">{s.num}</span>
                </div>

                <h3 className="editorial-title">{s.title}</h3>
                <p className="editorial-body">{s.body}</p>

                <div className="service-chips-wrap">
                  {s.chips.map((c) => (
                    <a key={c.label} href={c.href} className="service-chip-pill">
                      {c.label}
                    </a>
                  ))}
                </div>

                <div className="service-footer-action">
                  <a className="service-link-btn" href={s.more.href}>
                    <span>{s.more.label}</span>
                    <span className="service-link-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section className="section lux-pad" aria-label="Technology focus" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="tech" opacity={0.16} blur={40} />
      <div className="ambient-mesh-canvas" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title={TECH_HEAD.title} lede={TECH_HEAD.lede} />
        {/* Infinite marquee: technologies sweep smoothly across */}
        <Marquee className="tech-marquee" style={{ marginBottom: 28 }}>
          {TECH_MARQUEE.map((t) => (
            <span key={t} className="mono">
              {t}
            </span>
          ))}
        </Marquee>
        
        {/* Creative Tech Practice Console (Interactive, Multi-dimensional Nodes) */}
        <div className="tech-creative-grid">
          {TECH_CARDS.map((c, i) => {
            const stacks = [
              ["MCP Protocol", "LangGraph", "vLLM", "Guardrails"],
              ["DeepEval", "Ragas", "Playwright", "Red-Teaming"],
              ["Databricks", "Snowflake", "dbt", "Delta Lake"],
              ["Kubernetes", "GitOps", "Terraform", "ArgoCD"],
              ["Talent Matrix", "GCC Hubs", "GCC Leadership", "Scale 50+"],
              ["Custom Labs", "Prompt Eng", "Fine-Tuning", "Copilot"],
            ][i % 6];
            const metric = [
              "<85ms Eval Latency",
              "99.4% Eval F1 Score",
              "10x Faster Query Time",
              "Zero-Downtime Releases",
              "4-6 Wk First Cohort",
              "70% Hands-On Labs",
            ][i % 6];

            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="tech-creative-tile">
                  <div className="tech-tile-header">
                    <span className="tech-tile-code">0{i + 1} // TECH</span>
                    <div className="tech-live-node">
                      <span className="tech-node-dot" aria-hidden="true" />
                      <span>LIVE PRACTICE</span>
                    </div>
                  </div>

                  <h3 className="tech-tile-title">
                    <a href={c.href}>{c.title}</a>
                  </h3>

                  <div className="tech-stack-badges">
                    {stacks.map((st) => (
                      <span key={st} className="tech-badge-chip">{st}</span>
                    ))}
                  </div>

                  <p className="tech-tile-body">{c.body}</p>

                  <div className="tech-tile-footer">
                    <span className="tech-metric-chip">{metric}</span>
                    <a className="tech-tile-link" href={c.href}>
                      <span>Explore practice</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Synergy() {
  return (
    <section className="section lux-pad" aria-label="Why one partner" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="synergy" opacity={0.16} blur={38} />
      <div className="ambient-mesh-canvas" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <BlurReveal direction="up" offset={40}>
          <div className="syn-panel">
            <SectionHead title={SYNERGY_HEAD.title} lede={SYNERGY_HEAD.lede} eyebrow="The Laprrk model" />
          </div>
        </BlurReveal>
        <RevealWords className="syn-lede-scrubbed">
          {SYNERGY_SCRUB}
        </RevealWords>
        
        {/* Connected Typographic Milestones (ZERO cards) */}
        <div className="synergy-flow-row">
          {SYNERGY.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="synergy-flow-item">
                <span className="synergy-flow-num">0{i + 1}</span>
                <h3 className="synergy-flow-title">{s.title}</h3>
                <p className="synergy-flow-body">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Roles() {
  return (
    <section className="section lux-pad" id="roles" aria-label="Roles we recruit" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="roles" opacity={0.15} blur={36} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title={ROLES_HEAD.title} lede={ROLES_HEAD.lede} />
        
        {/* Interactive Categorical Capability List (ZERO cards) */}
        <div className="roles-editorial-list">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.03}>
              <a className="roles-editorial-row" href={r.href}>
                <div className="roles-row-left">
                  <h3 className="roles-row-title">{r.title}</h3>
                  <p className="roles-row-desc">{r.small}</p>
                </div>
                <span className="roles-row-arrow" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
        
        <div className="center-row" style={{ marginTop: 36 }}>
          <a className="btn btn-ghost" href="technologies-roles-we-recruit.html">See all 16 technology groups</a>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section lux-pad" aria-label="What working with us is like" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="why" opacity={0.15} blur={38} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title={WHY_HEAD.title} link={{ label: "About us", href: "about.html" }} />
        
        {/* Editorial Feature Split Showcase (ZERO cards) */}
        <div className="why-editorial-layout">
          <div className="why-editorial-feature">
            <h2 className="why-editorial-statement">
              Software delivery built on <em>skin in the game</em>, practitioner screening, and speed.
            </h2>
            <p style={{ fontFamily: "Manrope", fontSize: 16, lineHeight: 1.7, color: "#456372", marginTop: 20 }}>
              We started Laprrk because we were tired of generic agencies that throw resumes over the fence. Every line of code, engineer shortlisted, and corporate programme is led by engineers who have built at scale.
            </p>
          </div>
          
          <div className="why-editorial-pillars">
            {WHY_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div className="why-pillar-item">
                  <span className="why-pillar-num">PILLAR // 0{i + 1}</span>
                  <h3 className="why-pillar-title">{c.title}</h3>
                  <p className="why-pillar-body">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="section lux-pad" aria-label="How we work" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="cases" opacity={0.14} blur={40} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title="Not sure where to start? We make it simple." link={{ label: "Book a free consultation", href: "contact.html" }} />
        
        {/* Horizontal Milestone Horizon (ZERO cards) */}
        <div className="steps-timeline-horizon">
          {STEPS.map((s) => (
            <Reveal key={s.n}>
              <div className="step-horizon-item">
                <span className="step-horizon-dot" aria-hidden="true" />
                <span className="step-horizon-n">PHASE // 0{s.n}</span>
                <h3 className="step-horizon-title">{s.title}</h3>
                <p className="step-horizon-body">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cases() {
  return (
    <section className="section lux-pad" aria-label="Case studies" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="cases" opacity={0.16} blur={38} />
      <div className="ambient-mesh-canvas" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title={CASES_HEAD.title} lede={CASES_HEAD.lede} eyebrow="Our work" link={{ label: "All case studies", href: "case-studies.html" }} />
        
        {/* Sculpted Claymorphic Case Studies Spotlight */}
        <div className="cases-clay-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="cases-clay-card">
                <div className="cases-clay-top">
                  <span className="cases-clay-sector">{c.sector}</span>
                  <span className="cases-clay-index">0{i + 1} // CASE</span>
                </div>

                <h3 className="cases-clay-title">
                  <a href={c.href}>{c.title}</a>
                </h3>

                <p className="cases-clay-body">{c.body}</p>

                <div className="cases-clay-metrics">
                  {c.stats.map((s) => (
                    <div key={s.l} className="cases-clay-metric-inset">
                      <div className="cases-clay-metric-val">{s.v}</div>
                      <div className="cases-clay-metric-lbl">{s.l}</div>
                    </div>
                  ))}
                </div>

                <a className="cases-clay-link" href={c.href}>
                  <span>Read case study</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  // The reference site pairs a link list with an image panel that swaps to the
  // hovered link. Same pairing here, index-aligned with the image column.
  const { active, setActive } = useActiveIndex(INDUSTRIES[0].title);
  return (
    <section className="band-light section lux-pad" aria-label="Industries" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="roles" opacity={0.12} blur={40} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead
          title="Industries we serve"
          lede="Domain context matters. We bring patterns from each of these sectors to every new engagement."
        />
        <div className="ind-swap">
          <DimSiblings selector="[data-dim-row]" className="ind-swap-links">
            <LinkImageSwap
              labels={INDUSTRIES.map((ind) => ({
                id: ind.title,
                label: ind.title,
                href: "case-studies.html",
              }))}
              active={active}
              onChange={setActive}
            />
          </DimSiblings>
          <div className="ind-swap-media glass" aria-hidden="true">
            {INDUSTRIES.map((ind, i) => (
              <img
                key={ind.title}
                src={`https://picsum.photos/seed/laprrk-industry-${i}/720/900`}
                alt=""
                loading="lazy"
                className={ind.title === active ? "ind-swap-img is-active" : "ind-swap-img"}
              />
            ))}
          </div>
          <p className="ind-swap-body">{INDUSTRIES.find((i) => i.title === active)?.body}</p>
        </div>
      </div>
    </section>
  );
}

export function Posts() {
  return (
    <section className="section lux-pad" aria-label="Blog posts" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="posts" opacity={0.15} blur={38} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title={POSTS_HEAD.title} />
        {/* Rows dim their siblings on hover and track a cursor-following layer;
            both are ported from the reference site's list interactions. */}
        <DimSiblings selector=".post-row" dimTo={0.35} className="post-rows">
          {POSTS.map((p, i) => (
            <HoverFollow key={p.href} className="post-row-hover">
              <Reveal key={p.href}>
                <article className="post-row glass" data-dim-row>
                  <img
                    src={`https://picsum.photos/seed/laprrk-${["nep-classroom", "ai-upskilling", "hire-train-deploy"][i]}/640/480`}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                  <div className="post-row-body">
                    <div className="case-top">
                      <span className="pill">{p.pill}</span>
                      <span className="case-sector mono">{p.meta}</span>
                    </div>
                    <h3><a href={p.href}>{p.title}</a></h3>
                    <p>{p.body}</p>
                    <a className="text-link" href={p.href}>Read article →</a>
                  </div>
                </article>
              </Reveal>
            </HoverFollow>
          ))}
        </DimSiblings>
        <div className="center-row">
          <a className="btn btn-ghost" href="blog.html">All articles</a>
        </div>
      </div>
    </section>
  );
}

export function Faqs() {
  return (
    <section className="section lux-pad" aria-label="Frequently asked questions" style={{ position: "relative", overflow: "hidden" }}>
      <SectionBackdrop variant="faq" opacity={0.14} blur={36} />
      <div className="container container-narrow" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead title="Frequently asked questions" />
        <div className="faq-list">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <details className="faq glass-tint">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <div className="center-row">
          <a className="btn btn-ghost" href="faq.html">All FAQs</a>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section lux-pad" aria-label="Contact">
      <div className="container">
        <Reveal>
          <div className="cta-panel glass-sheen">
            <FluidBackground variant="light" />
            <div className="cta-inner">
              <h2 className="cta-title">{CTA.title}</h2>
              <p className="lede">{CTA.lede}</p>
              <div className="hero-ctas">
                <Magnetic strength={0.25}>
                  <a className="btn btn-gold btn-lg sg-jelly" href={CTA.primary.href}>{CTA.primary.label} →</a>
                </Magnetic>
                <Magnetic strength={0.35}>
                  <a className="btn btn-ghost btn-lg sg-jelly" href="it-services.html">Explore services →</a>
                </Magnetic>
              </div>
              <div className="cta-contacts">
                {CTA.contacts.map((c) => (
                  <a key={c.href} className="cta-contact sg-jelly" href={c.href}>
                    <small>{c.small}</small>
                    <strong>{c.label}</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
