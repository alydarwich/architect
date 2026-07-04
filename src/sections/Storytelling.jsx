'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';
import './Storytelling.css';

export default function Storytelling() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '10% 50%',
            end: '50% center',
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        subtextRefs.current,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          ease: 'none',
          stagger: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '10% 50%',
            end: '50% center',
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_storytelling" ref={sectionRef}>
      <div className="storytelling_bg-image-wrapper">
        <img
          src="/svg/bg-pattern-white-lines.svg"
          alt="background line pattern"
          className="storytelling_bg-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-small">
            <div className="storytelling_content-wrapper-2grid">
              <div className="storytelling_headline">
                <h2 className="heading-style-h2 text-color-white" ref={headingRef}>
                  Storytelling Shaping Design
                </h2>
              </div>
              <div className="storytelling_subtext-wrapper">
                <p
                  className="storytelling_subtext text-weight-bold"
                  ref={(el) => (subtextRefs.current[0] = el)}
                >
                  We guide your project vision to build strong identities and atmospheres from
                  concepts to function.
                </p>
                <div className="spacer-small" />
                <p
                  className="storytelling_subtext _30ch"
                  ref={(el) => (subtextRefs.current[1] = el)}
                >
                  We redefine and elevate spaces to trigger senses and emotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
