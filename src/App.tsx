import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { Page } from "./pages/Page";
import { PAGES, getPage } from "./pages/data";

/**
 * Normalizes slug by stripping leading slashes, hashes, query params, and trailing .html
 */
function cleanSlug(path: string): string {
  let s = path.replace(/^\/+/, "").split("#")[0].split("?")[0].replace(/\.html$/, "");
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

  // Scroll to top on page navigation (or to hash anchor if present)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace(/^#/, "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [slug, location.hash]);

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

      // Parse path and hash from href
      let path = href;
      let hash = "";
      const hashIndex = path.indexOf("#");
      if (hashIndex !== -1) {
        hash = path.slice(hashIndex + 1);
        path = path.slice(0, hashIndex);
      }

      // Normalize clean slug
      const clean = cleanSlug(path);

      // Case 1: Pure hash on the current page (e.g. href="#scope")
      if (!path && hash) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", `#${hash}`);
        } else if (location.pathname !== "/" && location.pathname !== "/index.html") {
          // Element might be on the home page
          navigate(`/#${hash}`);
        }
        return;
      }

      // Case 2: Link to home with or without hash (e.g. "/" or "/#services" or "/index.html")
      if (!clean) {
        e.preventDefault();
        navigate(hash ? `/#${hash}` : "/");
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 80);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      // Case 3: Link to a subpage with or without hash (e.g. "/devops-devsecops" or "technologies-roles-we-recruit#java-jvm")
      e.preventDefault();
      const targetUrl = `/${clean}${hash ? '#' + hash : ''}`;
      navigate(targetUrl);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [navigate, location.pathname]);

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
          <Route path="/:slug" element={<SubpageRenderer />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </ClientNavigationInterceptor>
    </BrowserRouter>
  );
}
