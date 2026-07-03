import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import CursorGlow from '../components/CursorGlow.jsx';
import './StoryIntro.css';

export default function StoryIntro() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(titleRef.current, { types: 'lines' });

      split.lines.forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top 95%',
              end: 'bottom 85%',
              scrub: true,
            },
          },
        );
      });

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_story" ref={sectionRef}>
      <CursorGlow />
      <div className="padding-global">
        <div className="full-width-container">
          <div className="padding-section-small">
            <p className="story_title" ref={titleRef}>
              Our expertise is to tell your story through design. We leverage design to evoke an
              emotion and tell a story beyond the functional aspects.
            </p>
          </div>
        </div>
      </div>
      <div className="story_bg-image-wrapper">
        <img
          src="/svg/bg-pattern-half.svg"
          alt="background line pattern"
          className="story_bg-image"
        />
        <div className="story_bg-image-overlay" />
      </div>
    </section>
  );
}
