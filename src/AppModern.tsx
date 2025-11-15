import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "@/components/Pre.tsx";
import Navbar from "@/components/NavbarTailwind.tsx";
import Footer from "@/components/FooterTailwind.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import ErrorBoundary from "@/components/ErrorBoundary.tsx";
import { useUIStore } from "@/stores";
import "./style.css";
import "./App.css";
import "@/styles/tailwind.css";

// Lazy load route components for better performance
const Home = lazy(() => import("@/components/Home/HomeTailwind.tsx"));
const About = lazy(() => import("@/components/About/AboutTailwind.tsx"));
const Projects = lazy(() => import("@/components/Projects/ProjectsTailwind.tsx"));
const Resume = lazy(() => import("@/components/Resume/ResumeTailwind.tsx"));

// Loading component for Suspense
const RouteLoader: React.FC = () => (
  <div className="route-loader">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  const [load, setLoad] = useState(true);
  const { setLoading } = useUIStore();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
      setLoading(false);
    }, 1200);
    
    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, [setLoading]);

  return (
    <ErrorBoundary>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;