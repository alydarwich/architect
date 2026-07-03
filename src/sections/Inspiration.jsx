import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import './Inspiration.css';

export default function Inspiration() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const curtainRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const curtains = curtainRefs.current;

      // Per-column reveal direction:
      //   left (is-1)  -> origin top    -> retracts up   -> reveals bottom→top
      //   middle (is-2)-> origin bottom -> retracts down -> reveals top→bottom
      //   right (is-3) -> origin top    -> retracts up   -> reveals bottom→top
      gsap.set(curtains[0], { transformOrigin: 'center top' });
      gsap.set(curtains[1], { transformOrigin: 'center bottom' });
      gsap.set(curtains[2], { transformOrigin: 'center top' });
      gsap.set(headingRef.current, { opacity: 0, x: -40 });

      // Pin the section cleanly at the top (no gap above).
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        anticipatePin: 1,
        refreshPriority: 1,
      });

      // Drive the reveal on a scrub that begins slightly during the entrance
      // (before the section is fully covering) so it kicks off a touch earlier.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 12%',
          end: '+=80%',
          scrub: true,
        },
      });

      tl.to(imageRef.current, { scale: 1.12, ease: 'none', duration: 6 }, 0)
        .to(
          curtains,
          { scaleY: 0, ease: 'none', duration: 2.6, stagger: 0.5 },
          0,
        )
        .to(headingRef.current, { opacity: 1, x: 0, ease: 'none', duration: 2 }, 1.4);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_inspiration" ref={sectionRef}>
      <div className="inspiration_inner">
        <div className="inspiration_text-wrapper">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-small">
                <div className="inspiration_headline-wrapper">
                  <h2
                    className="heading-style-h2 text-color-white has-shadow"
                    ref={headingRef}
                  >
                    Design Inspired <span className="nowrap">by Nature</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inspiration_image-wrapper">
          <img
            src="/images/conchal.webp"
            alt="house with pool"
            className="inspiration_bg-image"
            ref={imageRef}
            loading="lazy"
            decoding="async"
          />
          <div className="inspiration_bg-image-overlay" />
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`inspiration_curtain-block is-${i + 1}`}
            ref={(el) => (curtainRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
