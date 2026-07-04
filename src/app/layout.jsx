import '../fonts.css';
import '../index.css';
import AppShell from './AppShell.jsx';

export const metadata = {
  title: 'SITE Architecture',
  description:
    'Full service studio based in Costa Rica crafting immersive atmospheres to shape more meaningful and purposeful spaces for brands, people, and places.',
  icons: {
    icon: { url: '/images/favicon.jpg', type: 'image/jpeg' },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload the hero art so it paints as early as possible. Mirrors the
            original index.html preload hints (desktop uses a 2x srcset). */}
        <link
          rel="preload"
          as="image"
          href="/images/hero.webp"
          imageSrcSet="/images/hero.webp 1920w, /images/hero-2x.webp 2500w"
          imageSizes="100vw"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-mobile.webp"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
