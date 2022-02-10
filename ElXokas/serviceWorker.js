const version = 2;
const elXokasWPA = `xokas-sounds-table-wpa-${version}`
const assets = [
  "/",
  "./index.html",
  "./data.json",
  "./aaa-mis-ojos.mp3",
  "./a-estudiar.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/a-ver-si-se-oye-asi-bien.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/bueno.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/calla-la-boca.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/callate.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/como-que-un-juego.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/de-verdad.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/dos-por-uno-en-burros.mp3"
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