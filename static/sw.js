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
