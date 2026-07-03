import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SmoothScrollProvider, { useLenis } from './lib/SmoothScroll.jsx';
import { ScrollTrigger } from './lib/gsap.js';
import { completeIntro } from './lib/introSignal.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

const Terms = lazy(() => import('./pages/Terms.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));

function ScrollManager() {
  const lenis = useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname, lenis]);

  useEffect(() => {
    // Only the home page renders a preloader; every other route should
    // resolve the shared intro signal immediately so the navbar animates in.
    if (pathname !== '/') completeIntro();
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </SmoothScrollProvider>
  );
}
