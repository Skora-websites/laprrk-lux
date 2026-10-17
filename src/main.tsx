import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { MotionProvider } from "./lib/motion";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionProvider>
      <App />
    </MotionProvider>
  </StrictMode>,
);
