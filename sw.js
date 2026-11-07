// Scoped to this game. Network-first avoids pinning players to an old release.
const CACHE = 'pjl-pwa-v1-' + self.registration.scope;
const HOME = new URL('./', self.registration.scope).href;
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([
    HOME, new URL('icon-192.png', HOME).href, new URL('icon-512.png', HOME).href,
  ])));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin
      || !url.href.startsWith(self.registration.scope) || request.headers.has('range')) return;
  // Do not cache API calls, errors or the worker itself.
  if (request.mode !== 'navigate' && !/\.(js|css|png|svg|webmanifest|glb|jpg|webp|mp3|ogg|wav)$/.test(url.pathname)) return;
  if (url.pathname.endsWith('/sw.js')) return;
  const key = request.mode === 'navigate' ? HOME : request;
  const response = fetch(request).then(async (result) => {
    if (result.ok && result.type === 'basic') {
      const copy = result.clone();
      // A full cache must never prevent the online game from loading.
      await caches.open(CACHE).then((cache) => cache.put(key, copy)).catch(() => {});
    }
    return result;
  }).catch(async () => {
    const cached = await caches.open(CACHE).then((cache) => cache.match(key));
    return cached || Response.error();
  });
  event.respondWith(response);
});
