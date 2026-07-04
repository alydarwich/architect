'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from '../lib/SmoothScroll.jsx';
import { ScrollTrigger } from '../lib/gsap.js';
import { completeIntro } from '../lib/introSignal.js';

export default function ScrollManager() {
  const lenis = useLenis();
  const pathname = usePathname();

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
