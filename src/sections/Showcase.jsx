'use client';

import { useEffect, useRef } from 'react';
import './Showcase.css';

const projects = [
  {
    key: 'dosel',
    name: 'DOSEL',
    location: 'Heredia, Costa Rica | Residential',
    image: '/images/showcase-dosel.webp',
  },
  {
    key: 'linea',
    name: 'LINEA DE VIDA',
    location: 'Medellín, Colombia | Mixed-use',
    image: '/images/showcase-linea.webp',
  },
  {
    key: 'intraca',
    name: 'INTRACA',
    location: 'Heredia, Costa Rica | Workplace',
    image: '/images/showcase-intraca.webp',
  },
  {
    key: 'conchal',
    name: 'CONCHAL',
    location: 'Guanacaste, Costa Rica | Hospitality',
    image: '/images/showcase-conchal.webp',
  },
];

export default function Showcase() {
  const wrapperRef = useRef(null);

  // The showcase art is set as a CSS background, which the browser can't lazy
  // load natively. Defer each image until its tile approaches the viewport so
  // it stops competing with the hero for bandwidth on first paint.
  useEffect(() => {
    const tiles = wrapperRef.current?.querySelectorAll('.showcase_image_container');
    if (!tiles?.length) return;

    const load = (el) => {
      if (el.dataset.bg) {
        el.style.backgroundImage = `url(${el.dataset.bg})`;
        delete el.dataset.bg;
      }
    };

    if (!('IntersectionObserver' in window)) {
      tiles.forEach(load);
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            load(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '300px' },
    );

    tiles.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section_showcase">
      <div className="showcase_images-wrapper" ref={wrapperRef}>
        {projects.map((p) => (
          <div key={p.key} className="showcase_image_container" data-bg={p.image}>
            <div className="showcase_info-wrapper">
              <h3 className="showcase_info-heading">{p.name}</h3>
              <div className="showcase_info-text">{p.location}</div>
              <div className="showcase_info-underline" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
