const CACHE = 'manav-portfolio-v2';

const PRECACHE = [
  '/',
  '/index.html',
  '/manav-mehta-resume.pdf',
  '/og-preview.png',
  '/favicon.ico',
  '/favicon.png',
  '/favicon.svg',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/site.webmanifest',
  '/assets/ferrari.webp',
  '/assets/ferrari-divider-car-cutout.png',
  '/assets/hero-01.webp',
  '/assets/hero-02.webp',
  '/assets/hero-03.webp',
  '/assets/hero-04.webp',
];

// Install — precache local assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate — delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache-first for same-origin, network-first for CDN
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET and browser extensions
  if (e.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // External CDN (GSAP, fonts, analytics) — network first, no caching
  if (url.origin !== self.location.origin) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }

  // Same-origin — cache first, fall back to network then cache it
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      });
    })
  );
});
