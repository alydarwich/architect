import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import './CoCreate.css';

export default function CoCreate() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const curtainRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const curtains = curtainRefs.current;

      // Horizontal bands retracting from the sides (staggered):
      //   top (is-1)    -> origin left  -> retracts left
      //   middle (is-2) -> origin right -> retracts right
      //   bottom (is-3) -> origin left  -> retracts left
      gsap.set(curtains[0], { transformOrigin: 'left center' });
      gsap.set(curtains[1], { transformOrigin: 'right center' });
      gsap.set(curtains[2], { transformOrigin: 'left center' });
      gsap.set(headingRef.current, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        anticipatePin: 1,
        refreshPriority: 1,
      });

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
          { scaleX: 0, ease: 'none', duration: 2.6, stagger: 0.5 },
          0,
        )
        .to(headingRef.current, { opacity: 1, x: 0, ease: 'none', duration: 2 }, 1.4);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_co-create" ref={sectionRef}>
      <div className="co-create_inner">
        <div className="co-create_text-wrapper">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-small">
                <div className="co-create_headline-wrapper">
                  <h2
                    className="heading-style-h2 text-color-white has-shadow"
                    ref={headingRef}
                  >
                    {'Co‑Creating Tailored Spaces'}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="co-create_image-wrapper">
          <img
            src="/images/co-create-bg.webp"
            alt="office space in house"
            className="co-create_bg-image"
            ref={imageRef}
            loading="lazy"
            decoding="async"
          />
          <div className="co-create_bg-image-overlay" />
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`co-create_curtain-block is-${i + 1}`}
            ref={(el) => (curtainRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
