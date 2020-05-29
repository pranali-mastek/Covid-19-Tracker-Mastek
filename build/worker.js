const CACHE_NAME = 'covid-19-live-tracker';
const urlsToCache = [
  'index.html',
 
];

// Install a service worker
window.addEventListener('install', event => {
  console.log('service worker installed')
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


// Update a service worker
window.addEventListener('activate', event => {
  console.log('service worker activated')
  const cacheWhitelist = ['covid-19-live-tracker'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



window.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

