'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';
import './CursorGlow.css';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    const parent = el.parentElement;
    const quickX = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' });
    const quickY = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' });

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      quickX(e.clientX - rect.left);
      quickY(e.clientY - rect.top);
    };

    parent.addEventListener('mousemove', onMove);
    return () => parent.removeEventListener('mousemove', onMove);
  }, []);

  return <div className="global_bg-circle-interaction" ref={glowRef} />;
}
