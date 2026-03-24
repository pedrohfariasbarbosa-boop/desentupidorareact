import { useState, useEffect } from "react";
import globalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  const [page, setPage] = useState("home");       // "home" | "service" | "blog"
  const [slug, setSlug] = useState(null);
  const [scrollTarget, setScrollTarget] = useState(null);

  const navigate = (targetPage, targetSlug = null) => {
    setPage(targetPage);
    setSlug(targetSlug);
    if (targetPage !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setScrollTarget(null);
    } else if (targetSlug) {
      setScrollTarget(targetSlug);
    }
  };

  useEffect(() => {
    if (page === "home" && scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
        setScrollTarget(null);
      }
    }
  }, [page, scrollTarget]);

  const renderPage = () => {
    if (page === "service") return <ServicePage slug={slug} onNavigate={navigate} />;
    if (page === "blog") return <BlogPostPage slug={slug} onNavigate={navigate} />;
    return <HomePage onNavigate={navigate} scrollTarget={scrollTarget} />;
  };

  return (
    <>
      <style>{globalStyles}</style>
      <Navbar onNavigate={navigate} currentPage={page} />
      <main style={{ paddingTop: page === "home" ? 0 : 0 }}>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingCTA />
    </>
  );
}
