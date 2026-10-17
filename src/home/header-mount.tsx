import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { SiteHeader } from "../components/SiteHeader";
import { SiteDrawer } from "../components/SiteChrome";
import { MotionProvider } from "../lib/motion";
import "../styles/global.css";

function HeroHeaderMount() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <MotionProvider>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </MotionProvider>
  );
}

const container = document.getElementById("header-root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <HeroHeaderMount />
    </StrictMode>,
  );
}
