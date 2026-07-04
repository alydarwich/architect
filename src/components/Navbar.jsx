import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/gsap.js';
import { introPromise } from '../lib/introSignal.js';
import './Navbar.css';

export default function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set(navRef.current, { yPercent: -100 });
    let cancelled = false;
    introPromise.then(() => {
      if (cancelled) return;
      gsap.to(navRef.current, {
        yPercent: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="padding-global">
        <div className="navbar_content-wrapper">
          <Link to="/" className="navbar_logo-wrapper">
            <img src="/svg/site-logo.svg" alt="SITE Logo" className="navbar_logo" />
          </Link>
          <div className="navbar_menu-wrapper">
            <a href="mailto:alyydarwich@gmail.com" className="navbar_button">
              <span className="navbar_button-text">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
