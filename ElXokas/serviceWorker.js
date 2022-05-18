const version = 34;
const elXokasWPA = `xokas-sounds-table-wpa-${version}`;
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
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/dos-por-uno-en-burros.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/deja-de-estar-tan-feliz.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/dios.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/eres-imbecil.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/esto-no-es-un-juego.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/esto-que-cojones-es.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/espanol-de-espana.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/fuera-de-mi-puta-vista.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/fumo-porros.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/gordo-peazo-de-vaca.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/gordo-como-una-polla.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/hemos-vuelto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/helado-de-happy-hippo.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/hostias.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/habla-todo-lo-espanol-que-puedas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/hijo-de-la-gran-puta.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/jajaja.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/la-madre-que-os-pario.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pisa-aterrisa-ibisa.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/los-inyecto-para.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/los-que-te-dicen-que-siempre-comen-sano.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/me-cago-en.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/me-cago-en-tus-muertos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/me-he-dejado-las-llaves-dentro.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/me-fumo-4-porros.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/me-he-fumado-un-porro.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/mi-plato-favorito-es-ver-gente-llorando.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/mirad-que-puta-locura.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/ni-de-conia.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/noname-de-mierda.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/no-es-gracioso.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/parad-de-rodar.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pedro-sanche-y.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pero-tu-eres-gilipollas-o-que.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/podeis-agarrarme-del-glande.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pum-baneado-15-dias.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pumba-que-dale.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/putos-pringaos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/que-no-se-pasen-de-listos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/queee.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/queh.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/que-dices.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/que-pasa.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/que-cojones-me-vas-a-contar-tu.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/que-te-meto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/que-ya-te-he-escuchado.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/quien-cojones-te-crees-que-eres.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/quiero-que-estes-callado.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/se-me-cae-la-babita.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/soy-el-mejor-streamer-de-espania.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/soy-el-xokas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/tell-me-what-you-want.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/te-meto-una-hostia.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/tonto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/tontito.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/vaya-tetas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/viva-espana-hijos-de-la-gran-puta.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/y-culo-culo-y-culo.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/y-le-he-dao-un-poco-a-la-teta.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/y-tu-callau.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/quieres-que-te-haga-caca-en-la-cara.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/punto.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/un-besito-a-todos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/dale-like.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/redz-a-trabajar-quiero-el-diamante.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/redz-cambia-eso.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/estas-en-desacuerdo-te-callas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/viva-hannah-montana.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/estara-haciendo-caca.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/yuhuu.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/tu-madre-es-un-postre-para-mi.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/la-espada-de-hielo-chaval.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/24-horas-baneado-me.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/baneame-si-tienes-huevos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/me-fume-un-porrazo.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/no-mando-saludos.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/vamo-vamo-eh-eh.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/voy-a-cervezas-aaa.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/ya-no-puedo-mas.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pezzimo-criterio.mp3",
  "https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/pido-a-una-puta.mp3",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(elXokasWPA).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== elXokasWPA)
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
