import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteDrawer, SiteFooter, WhatsAppFab } from "../components/SiteChrome";
import { DevAnnotation } from "../components/DevAnnotation";
import { CinematicStoryHero } from "./CinematicStoryHero";
import {
  Services, Tech, Synergy, Roles, Why, Steps, Cases,
  Industries, Posts, Faqs, CtaBand,
} from "./sections";

export function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main id="main">
        {/* 1. Cinematic landing page story hero with 3 narrative chapters */}
        <CinematicStoryHero />

        {/* 2. Full home page sections from https://laprrk.vercel.app/ from "What we do" to footer */}
        <Services />
        <Tech />
        <Synergy />
        <Roles />
        <Why />
        <Steps />
        <Cases />
        <Industries />
        <Posts />
        <Faqs />
        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <DevAnnotation />
    </>
  );
}
