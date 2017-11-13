this.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          if (cacheName === 'v1') return true
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
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/',
        '/static/index.css',
        '/static/normalize.css',
        '/static/master.css',
        '/static/goodbye-master.css',
        '/static/goodbye.css',
        '/static/core.js',
        '/static/favicon.ico',
      ])
    })
  )
})
