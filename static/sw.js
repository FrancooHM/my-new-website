this.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          if (cacheName !== 'v3') return false
          else return true
        }).map(function(cacheName) {
          return caches.delete(cacheName)
        })
      )
    })
  )
})

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

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v3').then(function(cache) {
          cache.put(event.request, response.clone())
          return response
        })
      })
    })
  )
})
