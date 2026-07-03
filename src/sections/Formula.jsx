import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';
import './Formula.css';

export default function Formula() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRefs = useRef([]);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven reveal only on desktop; mobile is a plain stacked column.
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: '10% 50%',
              end: '30% center',
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          subtextRefs.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            ease: 'none',
            stagger: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: '10% 50%',
              end: '30% center',
              scrub: true,
            },
          },
        );

        gsap.to(bgRef.current, {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_formula" ref={sectionRef}>
      <div className="formula_sticky-content-wrapper">
        <div className="padding-global">
          <div className="container-large formula_flex-box">
            <div className="padding-section-large">
              <div className="formula_content-grid">
                <div className="formula_headline-wrapper">
                  <h2 className="heading-style-h2 text-color-white" ref={headingRef}>
                    How We Do It
                  </h2>
                </div>
                <div className="formula_subtext-wrapper">
                  <div
                    className="formula_subtext text-weight-bold"
                    ref={(el) => (subtextRefs.current[0] = el)}
                  >
                    Our process, Our formula.
                  </div>
                  <div className="spacer-small" />
                  <div
                    className="formula_subtext"
                    ref={(el) => (subtextRefs.current[1] = el)}
                  >
                    We redefined architecture to create deeper meanings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="formula_bg-image-wrapper">
          <img
            src="/images/formula-bg.webp"
            alt="wooden path in nature"
            className="formula_bg-image"
            ref={bgRef}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="formula_formula-content-wrapper">
        <div className="padding-global">
          <div className="container-large">
            <div className="formula_content-wrapper">
              <div className="formula_image-wrapper">
                <img
                  src="/svg/formula-white.svg"
                  alt="SITE formula"
                  className="formula-formula-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
