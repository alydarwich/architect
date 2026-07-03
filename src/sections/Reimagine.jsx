import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';
import CursorGlow from '../components/CursorGlow.jsx';
import './Reimagine.css';

export default function Reimagine() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            end: '40% center',
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_reimagine" ref={sectionRef}>
      <CursorGlow />
      <div className="reimagine_bg-image-wrapper">
        <img
          src="/svg/bg-pattern-half.svg"
          alt="background line pattern"
          className="reimagine_bg-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-small">
            <div className="reimagine_content-wrapper">
              <div className="reimagine_headline-wrapper">
                <h2 className="heading-style-h2 text-align-right" ref={headingRef}>
                  Reimagine Design as a Legacy
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
