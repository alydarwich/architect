import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import './Expertise.css';

const steps = [
  { number: '01', label: 'Masterplanning', image: '/images/masterplanning.webp', alt: 'house from above' },
  { number: '02', label: 'Pre-Design', image: '/images/pre-design.webp', alt: 'house with garden' },
  { number: '03', label: 'Schematic Design', image: '/images/schematic-design.webp', alt: 'family house with car in front' },
  { number: '04', label: 'Construction Documents', image: '/images/construction-documents.webp', alt: 'floor plan document' },
  { number: '05', label: 'Construction', image: '/images/construction.webp', alt: 'house from front' },
];

export default function Expertise() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverIndexRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven active step only on desktop; mobile is a plain stacked list.
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (hoverIndexRef.current !== null) return;
            const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            setActiveIndex(idx);
          },
        });
        return () => st.kill();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (i) => {
    if (window.innerWidth < 768) return;
    hoverIndexRef.current = i;
    setActiveIndex(i);
  };

  const handleLeave = () => {
    hoverIndexRef.current = null;
  };

  return (
    <div className="section_expertise" ref={sectionRef}>
      <div className="expertise_wrapper">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="expertise_grid-container">
                <div className="expertise_left-col-wrapper">
                  <h2 className="heading-style-h2">Expertise</h2>
                  <div className="expertise_image-stack">
                    {steps.map((step, i) => (
                      <img
                        key={step.number}
                        src={step.image}
                        alt={step.alt}
                        className="expertise_list-item-image"
                        style={{ opacity: activeIndex === i ? 1 : 0 }}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>

                <div className="expertise_list-wrapper">
                  {steps.map((step, i) => (
                    <div
                      key={step.number}
                      className="expertise_list-item"
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={handleLeave}
                    >
                      <div className="expertise_list-item-content-wrapper">
                        <div className="expertise_list-item-text-wrapper">
                          <div className="expertise_list-item-number">{step.number}</div>
                          <div
                            className="expertise_list-item-text"
                            style={{ opacity: activeIndex === i ? 1 : 0.5 }}
                          >
                            {step.label}
                          </div>
                        </div>
                        <div className="expertise-list-item-line-wrapper">
                          <div className="expertise_list-item-line" />
                          <div
                            className="expertise_list-item-line-overlay"
                            style={{ width: activeIndex === i ? '100%' : '0%' }}
                          />
                        </div>
                      </div>
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="expertise_list-item-mobile-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="expertise_bg-image-wrapper">
        <img
          src="/svg/bg-pattern-half.svg"
          alt="background line pattern"
          className="expertise_bg-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
