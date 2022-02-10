const version = 1;
const elXokasWPA = `xokas-sounds-table-wpa-${version}`
const assets = [
  "/",
  "./index.html",
  "./data.json",
  "./data.json",
  "./aaa-mis-ojos.mp3",
  "./a-estudiar.mp3",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(elXokasWPA).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})