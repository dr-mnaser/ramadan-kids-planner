'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c04d803870f20845c6a8afbe3cf3afa4",
"assets/AssetManifest.bin.json": "02820bad3385700536a6e94bc8736e9d",
"assets/assets/audio/day10_dua.wav": "9f28753af6c66a9d376c631689309d88",
"assets/assets/audio/day11_dua.wav": "4412dc9e230f6679a7c4ba98523edf5a",
"assets/assets/audio/day12_dua.wav": "d37f88a937a661ca8ca3c46655b81f99",
"assets/assets/audio/day13_dua.wav": "917710893727d568023361942f780220",
"assets/assets/audio/day14_dua.wav": "52bf4272c0fdc0b7262d86eccc4ed5e7",
"assets/assets/audio/day15_dua.wav": "31c55def0bd507908d8d31ef79f7c45e",
"assets/assets/audio/day16_dua.wav": "9ead860dcca2c5219dd3fb733f71db94",
"assets/assets/audio/day17_dua.wav": "c978803f3a2052db9961518d55f70f69",
"assets/assets/audio/day18_dua.wav": "de486f97c1336833ecdaa35065af18fb",
"assets/assets/audio/day19_dua.wav": "082393b5b936d2e2fc29143e5025c67f",
"assets/assets/audio/day1_dua.wav": "af65334b29291047cbbd3b2a8d417a4d",
"assets/assets/audio/day20_dua.wav": "0549ec5920cb1566f7b461ec2f7e8b78",
"assets/assets/audio/day21_dua.wav": "efbde6f8d03d79e5e95f0d0379765af7",
"assets/assets/audio/day22_dua.wav": "7ce9e540eadd4e5aa869bca825d0a69c",
"assets/assets/audio/day23_dua.wav": "9a85e1a16c7c457f725c000e2fad9361",
"assets/assets/audio/day24_dua.wav": "d417a2e0a875e14b22e3e1c9279aacb0",
"assets/assets/audio/day25_dua.wav": "f18a61651b31409b131ab595074eadfd",
"assets/assets/audio/day26_dua.wav": "3a0ffd158bb7e8f08abea844c12030de",
"assets/assets/audio/day27_dua.wav": "0396285af817043c1e5a1047c85b34df",
"assets/assets/audio/day28_dua.wav": "944ee77b20fdbd5db78acecd6c594fb8",
"assets/assets/audio/day29_dua.wav": "78250017ee1313aa689f19894b7d68e7",
"assets/assets/audio/day2_dua.wav": "29cea364e615b282b4ec8a44a1948206",
"assets/assets/audio/day30_dua.wav": "368e73d0f1fcb04278bbe11bb7e36456",
"assets/assets/audio/day3_dua.wav": "59675dfb3e838bb294f93065fd546eff",
"assets/assets/audio/day4_dua.wav": "904908f9bb518facbb8bebe9d598dc47",
"assets/assets/audio/day5_dua.wav": "7e1827c9636f63813dd8c4979dba3ad9",
"assets/assets/audio/day6_dua.wav": "e8a7e81f6eec28815e7fe3a776ca4359",
"assets/assets/audio/day7_dua.wav": "fe9a8851245d500b550d14ceae3e3399",
"assets/assets/audio/day8_dua.wav": "ab5968758394cdbccb1ba9b8d2724970",
"assets/assets/audio/day9_dua.wav": "945560bfecac22f8c529ba9c9cf92c13",
"assets/assets/images/badges.png": "dc2ff6a4068b8282374dd270ee261866",
"assets/assets/images/cover_day2.png": "9195677073b50401f660c561510fdba9",
"assets/assets/images/dua.png": "7d95de65724fdd0c1af268a538c5543a",
"assets/assets/images/jar.png": "4522f5110fd5d79be9be016d743f4eb9",
"assets/assets/images/missions.png": "52923129f246e7260da7f99674f2918c",
"assets/assets/images/moon_story.png": "9195677073b50401f660c561510fdba9",
"assets/assets/images/story.png": "1da3a030b4bf7ae392b188d8bbb46672",
"assets/assets/sounds/badge.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/sounds/coin.mp3": "65a2b0819023b28c08dd6d324e746de0",
"assets/assets/sounds/page.mp3": "5b1f8c03f9fe065fb6763b3314d2d301",
"assets/assets/stories/day1.pdf": "a26e432fc9b500d2947b222ed631087f",
"assets/assets/stories/day10.pdf": "60a2b5957974e47a1318da8e61baeb54",
"assets/assets/stories/day11.pdf": "02aa105786f2983c87e1cf57a1fa4eb3",
"assets/assets/stories/day12.pdf": "2fde4d08a9899e85a86cea72b6c8a1d2",
"assets/assets/stories/day13.pdf": "0fecaff0c79e400315b2ea7eba483ce3",
"assets/assets/stories/day14.pdf": "25ce9d86f0c62bf80e920caccdd272ec",
"assets/assets/stories/day15.pdf": "a59941a1e92fca7b3b7396fd329fa65c",
"assets/assets/stories/day16.pdf": "2e7cb10d2e46360f7a24db5230ac731b",
"assets/assets/stories/day17.pdf": "6cb4c2f90efbf4ce3939f331862d3a1e",
"assets/assets/stories/day18.pdf": "4f04b4fc76a4a77f8e1963ce35970b25",
"assets/assets/stories/day19.pdf": "ebb2646deaf595e6131d17397afd5644",
"assets/assets/stories/day2.pdf": "22317cdeea0cc3f301fde8dc0fc3fd4b",
"assets/assets/stories/day20.pdf": "3bdc4cc4408c6effb185959b8f41c321",
"assets/assets/stories/day21.pdf": "0e1cc73be8658d1614a39a9b9369240a",
"assets/assets/stories/day22.pdf": "7044553273b06f71904220c8470ec528",
"assets/assets/stories/day23.pdf": "6bf73e04da1e043e6e26f8964a012dcb",
"assets/assets/stories/day24.pdf": "4e225e1ebdb93ac8d796373d4a2ddd3e",
"assets/assets/stories/day25.pdf": "bd5e62b336e127a6da4a4c6218a21113",
"assets/assets/stories/day26.pdf": "6cd12f509efb806e5f1b4e7dd8ab9bcb",
"assets/assets/stories/day27.pdf": "700a3d88c7b0be79b2b7a61bd590aa46",
"assets/assets/stories/day28.pdf": "3228b6d5b731889b2c63154f2d815b8e",
"assets/assets/stories/day29.pdf": "8298e2ad6b6deaa2c40df693e12bc723",
"assets/assets/stories/day3.pdf": "1bf3a8b9bb8c17fd2bf96c4946fac8e7",
"assets/assets/stories/day30.pdf": "5d52c1c3138be14410ed869b698a8806",
"assets/assets/stories/day4.pdf": "0624285ae7ce52296e9a401efc855e68",
"assets/assets/stories/day5.pdf": "873ac133b43ef16ddf08ed59f9e2785c",
"assets/assets/stories/day6.pdf": "22c14a32b181267abe63ceb492bc6826",
"assets/assets/stories/day7.pdf": "6c0a54b14e8cdeb8dc4bef09448065a9",
"assets/assets/stories/day8.pdf": "16a5aafa4a741853566139b2682d7738",
"assets/assets/stories/day9.pdf": "cf225f01b7dbc165e1ee1e24c67b2d59",
"assets/assets/stories/eid.pdf": "03870335a7ee17ee615c36865eac4954",
"assets/assets/Surprise/1.jpeg": "46a3c106d43f1a2a7d61d8e3a1882ed7",
"assets/assets/Surprise/10.jpeg": "7174043d06bc8369956ca9fd590421d9",
"assets/assets/Surprise/11.jpeg": "3f99818e011e4ef860a31f08734886c4",
"assets/assets/Surprise/12.jpeg": "ef6abd056869f5c15b652a12ae2cf9a0",
"assets/assets/Surprise/13.jpeg": "524de3172a8fbb288dad3f154701bd26",
"assets/assets/Surprise/14.jpeg": "6da9332f1b1e260991c17c4bff32fbbb",
"assets/assets/Surprise/15.jpeg": "0e35c74beab665ed222ae26c47837f5b",
"assets/assets/Surprise/16.jpeg": "6e65b5da0df76e9400e236788e2d2a8d",
"assets/assets/Surprise/17.jpeg": "d34df629554e1f73900131eb47a9c8e2",
"assets/assets/Surprise/18.jpeg": "e07bf05b4bd79b9c22111c4e0db47b22",
"assets/assets/Surprise/19.jpeg": "811117c7128b21362ef39e771216926a",
"assets/assets/Surprise/2.jpeg": "66dc3230b6fdcfc58f7e13614d3ed77d",
"assets/assets/Surprise/20.jpeg": "0debb71a3106f0e74566b6f92ce8f454",
"assets/assets/Surprise/21.jpeg": "2bff1dd60c3547ffaf83ddbe6e4cf1d9",
"assets/assets/Surprise/22.jpeg": "626a0e7bc2deddc9aa6faeec19f98ee1",
"assets/assets/Surprise/23.jpeg": "526be2650792b941fc0e0f687875dd2f",
"assets/assets/Surprise/24.jpeg": "0569cdf86f2e5fe2f222c49884978c57",
"assets/assets/Surprise/25.jpeg": "ef0405cfbcb18be3a589a1073099108b",
"assets/assets/Surprise/26.jpeg": "62034d1e7aee42ad81c00e310bfa908f",
"assets/assets/Surprise/27.jpeg": "a47b2a136207e80bcf86e7d1df2ac185",
"assets/assets/Surprise/28.jpeg": "b3b62627d78c52803917a5941584fd97",
"assets/assets/Surprise/29.jpeg": "10185167486907dabf735c52d07578f8",
"assets/assets/Surprise/3.jpeg": "ae616e5b42c09def800821bc094cb11d",
"assets/assets/Surprise/30.jpeg": "d343cea2c131dd9eaa7b37034286fae0",
"assets/assets/Surprise/4.jpeg": "d250805478b7c5dcb4ba00a316b72c35",
"assets/assets/Surprise/5.jpeg": "4f0bba930785786017c96738d181eb83",
"assets/assets/Surprise/6.jpeg": "148d4ee772f32f30f5fa45da2112491f",
"assets/assets/Surprise/7.jpeg": "8e0fed2b1eebcd36d5378b8657ce7bd9",
"assets/assets/Surprise/8.jpeg": "0f3bd28edc8d3bd7d3de5526541d6f47",
"assets/assets/Surprise/9.jpeg": "80db37982cfa387fb03237a0b5c07341",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "feee0ba6d540e94d9e64a4d57faf7288",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "683b2df7434f00a0a06bc7084e2bbb15",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c4bf5a83e5c60dfe1408f06e0440956",
"/": "5c4bf5a83e5c60dfe1408f06e0440956",
"main.dart.js": "49e863c101be51ac10de91b5c59de72f",
"manifest.json": "7958b60f13474fad0640530902083ae7",
"version.json": "af37a22af425830fb675c5a0a3984ed8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
