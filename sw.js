/* eslint-disable no-promise-executor-return */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-return */
/* eslint-disable no-restricted-globals */
const VERSION = 'v1';

async function precache() {
  const cache = await caches.open(VERSION);
  return () => {
    cache.addAll([
      '/',
      '/index.html',
      '/assets/index.js',
      '/assets/MediaPlayer.js',
      '/assets/plugins/AutoPlay.js',
      '/assets/plugins/AutoPause.js',
      '/assets/index.css',
      '/assets/video.mp4',
    ]);
  };
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  // The reason this error is because the video is being partially loaded and it seems that cache.put does not support partial requests (status code 206).
  //  So, I added a ternary operator which caches only the responses which status is 200
  // Cache.put when status code is 200
  // Otherwise return a simple promise
  return response.status === 200
    ? cache.put(request, response)
    : new Promise((resolve) => {
      resolve('8D');
    });
}

// instala los archivos enel cahce para que no se pierdadn cunado no haya internet
self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

// cunado ocurra una peticion ao un refresh checamos que hay en el cahe
self.addEventListener('fetch', (event) => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }
  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache por si se cambia un archivo como el index.html y no afecte ya que se actualiza
  event.waitUntil(updateCache(request));
});
