import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import { introPromise } from '../lib/introSignal.js';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const bgWrapperRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(titleRef.current, { types: 'lines,words' });
      const paragraphSplit = new SplitType(paragraphRef.current, { types: 'lines,words' });

      gsap.set(logoRef.current, { y: 10, opacity: 0 });
      gsap.set(titleSplit.words, { yPercent: 120 });
      gsap.set(paragraphSplit.words, { yPercent: 120 });
      gsap.set(buttonRef.current, { x: -10, opacity: 0 });

      let cancelled = false;

      introPromise.then(() => {
        if (cancelled) return;

        const tl = gsap.timeline({ defaults: { ease: 'circ.out' } });
        tl.to(logoRef.current, { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }, 0.1)
          .to(titleSplit.words, { yPercent: 0, duration: 1, stagger: 0.5 }, 0.15)
          .to(
            paragraphSplit.words,
            { yPercent: 0, duration: 1, stagger: 0.05 },
            '<0.8',
          )
          .to(
            buttonRef.current,
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            '<0.5',
          );
      });

      gsap.to(bgWrapperRef.current, {
        scale: 1.1,
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      return () => {
        cancelled = true;
        titleSplit.revert();
        paragraphSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_hero" ref={sectionRef}>
      <div className="padding-global">
        <div className="hero_container">
          <div className="hero_content-wrapper">
            <h1 className="heading-style-h1 hero_title" ref={titleRef}>
              Shaping Dreams
            </h1>
            <div className="spacer-medium" />
            <p className="hero_paragraph" ref={paragraphRef}>
              Full service studio crafting immersive atmospheres to shape more meaningful and
              purposeful spaces for brands, people and places.
            </p>
            <div className="spacer-medium" />
            <a href="mailto:info@site-cr.com" className="hero_primary-button" ref={buttonRef}>
              <span className="primary-button_icon-wrapper">
                <img src="/svg/cta-arrow.svg" alt="" className="primary-button_arrow-icon" />
              </span>
              <span className="primary-button_text">Contact</span>
            </a>
          </div>

          <div className="hero_image-wrapper" ref={bgWrapperRef}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/images/hero-mobile.webp"
                width="900"
                height="1601"
              />
              <img
                src="/images/hero.webp"
                srcSet="/images/hero.webp 1920w, /images/hero-2x.webp 2500w"
                sizes="100vw"
                alt="house with garden at night"
                className="hero_bg-image"
                fetchPriority="high"
                decoding="async"
                width="1920"
                height="1080"
              />
            </picture>
            <div className="hero_bg-image-overlay" />
          </div>
        </div>
      </div>
      <img src="/svg/site-logo.svg" alt="SITE Logo" className="hero_logo" ref={logoRef} />
    </section>
  );
}
