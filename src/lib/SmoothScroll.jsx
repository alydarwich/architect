'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 0.75,
      autoRaf: false,
    });
    lenisRef.current = lenis;
    setInstance(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    document.documentElement.classList.add('lenis');

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return (
    <LenisContext.Provider value={instance}>{children}</LenisContext.Provider>
  );
}
