this.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          if (cacheName === 'v2') return true
          else return false
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v3').then(function(cache) {
      return cache.addAll([
        '/',
        '/static/styles/index.css',
        '/static/styles/normalize.css',
        '/static/styles/master.css',
        '/static/styles/goodbye-master.css',
        '/static/styles/goodbye.css',
        '/static/core.js',
        '/static/favicon.ico',
      ])
    })
  )
})
