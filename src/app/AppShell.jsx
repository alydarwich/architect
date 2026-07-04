'use client';

import SmoothScrollProvider from '../lib/SmoothScroll.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollManager from './ScrollManager.jsx';

export default function AppShell({ children }) {
  return (
    <SmoothScrollProvider>
      <ScrollManager />
      <Navbar />
      {children}
      <Footer />
    </SmoothScrollProvider>
  );
}
