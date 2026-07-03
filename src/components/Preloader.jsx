import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';
import { completeIntro, isIntroResolved } from '../lib/introSignal.js';
import { useLenis } from '../lib/SmoothScroll.jsx';
import './Preloader.css';

export default function Preloader() {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const ranRef = useRef(false);
  const lenisRef = useRef(null);
  const lenis = useLenis();

  // Keep the freshest lenis instance available to the (run-once) timeline.
  lenisRef.current = lenis;

  useLayoutEffect(() => {
    // Guard against StrictMode's double-invoke: run the reveal exactly once.
    // The timeline is intentionally NOT killed on cleanup so it survives the
    // StrictMode unmount/remount cycle.
    if (ranRef.current || isIntroResolved()) return;
    ranRef.current = true;

    document.documentElement.style.overflow = 'hidden';
    lenisRef.current?.stop();

    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        if (rootRef.current) gsap.set(rootRef.current, { display: 'none' });
        document.documentElement.style.overflow = '';
        lenisRef.current?.start();
        completeIntro();
      },
    });

    tl.to(barRef.current, {
      height: 500,
      y: -50,
      duration: 1.5,
      ease: 'power2.in',
    }).to(
      rootRef.current,
      {
        yPercent: -100,
        duration: 1,
        ease: 'power2.inOut',
      },
      '-=0.6',
    );
  }, []);

  return (
    <div className="pre-loader" ref={rootRef}>
      <div className="pre-loader_logo-wrapper">
        <img
          src="/svg/site-logo-black.svg"
          alt="SITE Logo black"
          className="pre-loader_logo"
        />
      </div>
      <div className="pre-loader_red-bar" ref={barRef} />
    </div>
  );
}
