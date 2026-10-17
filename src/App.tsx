import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { Page } from "./pages/Page";
import { PAGES, getPage } from "./pages/data";

/**
 * Normalizes slug by stripping leading slashes, hashes, query params, and trailing .html
 */
function cleanSlug(path: string): string {
  let s = path.replace(/^\/+/, "").replace(/\.html$/, "");
  if (!s || s === "index") return "";
  return s;
}

/**
 * Dynamic Subpage component driven by React Router params and URL
 */
function SubpageRenderer() {
  const params = useParams<{ slug?: string }>();
  const location = useLocation();

  // Determine current page slug from path
  const pathPart = location.pathname.split("/").filter(Boolean).pop() || "";
  const slug = cleanSlug(params.slug || pathPart);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  // Page title update
  const pageData = getPage(slug || "about");
  useEffect(() => {
    if (pageData?.title) {
      document.title = `${pageData.title} | Laprrk Technology Solutions`;
    }
  }, [pageData]);

  return <Page data={pageData} />;
}

/**
 * Global navigation interceptor: catches local <a href="*.html"> clicks
 * so navigation stays 100% inside React client SPA without full browser reloads.
 */
function ClientNavigationInterceptor({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, javascript, new tab
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Handle anchor hash links on the same page
      if (href.startsWith("#")) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      // If linking to home
      if (href === "/" || href === "/index.html" || href === "index.html") {
        e.preventDefault();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Internal subpage link: /something.html or something.html
      const clean = href.replace(/^\/+/, "").replace(/\.html$/, "");
      if (clean in PAGES || clean.length > 0) {
        e.preventDefault();
        navigate(`/${clean}.html`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [navigate]);

  // Scroll to top on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Ensure clean URL without index.html
  useEffect(() => {
    if (window.location.pathname === "/index.html" || window.location.pathname.endsWith("/index.html")) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return <>{children}</>;
}

export function App() {
  return (
    <BrowserRouter>
      <ClientNavigationInterceptor>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/:slug.html" element={<SubpageRenderer />} />
          <Route path="/:slug" element={<SubpageRenderer />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </ClientNavigationInterceptor>
    </BrowserRouter>
  );
}
