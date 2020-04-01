var urlsToCache = [
  '/',
  '/static/styles/index.css',
  '/static/styles/normalize.css',
  '/static/styles/master.css',
  '/static/styles/goodbye.css',
  '/static/favicon.ico',
]

var FRESH_CACHE_NAME = 'NEXT_1.7'

self.addEventListener('install', function(event) {
  console.log("Service worker installed. Don't take care about this... ")
  event.waitUntil(
    caches.open(FRESH_CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('activate', function(event) {
  console.log("New activated service worker. Amazing! ")
  var cacheWhitelist = [FRESH_CACHE_NAME]

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
  )
})

self.addEventListener('fetch', function(event) {
  console.log("Service worker is hearing Fetching. Woh!!! ")
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function(networkResponse) {
          return caches.open(FRESH_CACHE_NAME).then(function(cache) {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
        })
      }
    })
  )
})
