"use strict";var precacheConfig=[["/0aa8f3b8a373745b68aef82d265d5399.png","0aa8f3b8a373745b68aef82d265d5399"],["/1854b08961029295351e3d80e6f0d40d.png","1854b08961029295351e3d80e6f0d40d"],["/1a4d2805d6f80bc53b45a959e0a14ca4.png","1a4d2805d6f80bc53b45a959e0a14ca4"],["/24b85a8d405f42a01e0e023cbec5f6a2.png","24b85a8d405f42a01e0e023cbec5f6a2"],["/36dd61d258a70f59a86094cbe4e15e63.png","36dd61d258a70f59a86094cbe4e15e63"],["/37519d4f431a45f27667cc857b40a00a.png","37519d4f431a45f27667cc857b40a00a"],["/438c17272c5f0e9f4a6da34d3e4bc5bd.png","438c17272c5f0e9f4a6da34d3e4bc5bd"],["/43f8fb98693c869119f7f2e5f2f6c4d6.png","43f8fb98693c869119f7f2e5f2f6c4d6"],["/4816ae547583db7b5208b9f63e6be02c.png","4816ae547583db7b5208b9f63e6be02c"],["/54088683f8b5057f10d84cc4b447d1f7.png","54088683f8b5057f10d84cc4b447d1f7"],["/5788b2a0f852d11f2cdfd2edac3f2709.png","5788b2a0f852d11f2cdfd2edac3f2709"],["/5bf8a3ca0bb6bfb41063cdd672be9ad9.svg","5bf8a3ca0bb6bfb41063cdd672be9ad9"],["/65a57caddbed6faeb5b0983ab6d6b359.png","65a57caddbed6faeb5b0983ab6d6b359"],["/69327cc29cb2d4954792f528aa9f5c05.png","69327cc29cb2d4954792f528aa9f5c05"],["/6f329024823f386dc7b2837382c81c7a.png","6f329024823f386dc7b2837382c81c7a"],["/72abd8652ddf8236dda1d317bac537f9.png","72abd8652ddf8236dda1d317bac537f9"],["/7cc2f2ddbc84e0d675636bec20ecd24d.png","7cc2f2ddbc84e0d675636bec20ecd24d"],["/7f3b6bdd8a9f69a6308a71d39578f031.png","7f3b6bdd8a9f69a6308a71d39578f031"],["/8484dc20de647fd0550a08b98bb11581.png","8484dc20de647fd0550a08b98bb11581"],["/84890975f5dce4577a617cfd9eadf94e.png","84890975f5dce4577a617cfd9eadf94e"],["/87d91ee51c4324779cd3a83f808f3fb8.png","87d91ee51c4324779cd3a83f808f3fb8"],["/8ab615545354a59db3ed4a838e4f4b76.png","8ab615545354a59db3ed4a838e4f4b76"],["/9085e04822a8ec9b78cdad6c598c8fa5.png","9085e04822a8ec9b78cdad6c598c8fa5"],["/98084d9d049e924e9d3f2c6e294c555b.png","98084d9d049e924e9d3f2c6e294c555b"],["/9aa878d30d75d5a8fccd0fbcd973a97b.png","9aa878d30d75d5a8fccd0fbcd973a97b"],["/abd2410829a9aeb07e6d204107d8a838.png","abd2410829a9aeb07e6d204107d8a838"],["/assets/icon.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/b4169f44921820c43e54f748773b2cc4.png","b4169f44921820c43e54f748773b2cc4"],["/b7bc4e91150a8b31a0860aaa504ebfd0.png","b7bc4e91150a8b31a0860aaa504ebfd0"],["/bundle.22259.js","48ace25e878915fe18c7d72b77d1203a"],["/c9a8186ef718e6c62ba132cc53317ca0.png","c9a8186ef718e6c62ba132cc53317ca0"],["/cd75a822f96b293ad970d9ed6a34149d.png","cd75a822f96b293ad970d9ed6a34149d"],["/d637e1a82c3cf9502aff3e17504fa231.png","d637e1a82c3cf9502aff3e17504fa231"],["/dd0ba5bc647746769af0ce0966e5df83.png","dd0ba5bc647746769af0ce0966e5df83"],["/e04fb0087292ce1b22833a6a4dd3ee82.png","e04fb0087292ce1b22833a6a4dd3ee82"],["/e1ea82cb1c39656b925012efe60f22ea.png","e1ea82cb1c39656b925012efe60f22ea"],["/e58ef6d04f9eb8bb511783e98ea22696.png","e58ef6d04f9eb8bb511783e98ea22696"],["/e5d3007b72bc7cd3f1ab5b77dd29b2e9.png","e5d3007b72bc7cd3f1ab5b77dd29b2e9"],["/e769a36e76f3390f13ecf0772326e5e4.png","e769a36e76f3390f13ecf0772326e5e4"],["/ee621a30c2b9a50a64005f695dd10a0d.png","ee621a30c2b9a50a64005f695dd10a0d"],["/extensions/index.html","20feeefb6d2613093972dab362bc9030"],["/favicon.ico","94eae66bebbd6bbfe48a669f245048ac"],["/fd0449f28059d9d24eaafa65dceaab4b.png","fd0449f28059d9d24eaafa65dceaab4b"],["/index.html","def90d716b3d40aaa826233c89514dfe"],["/manifest.json","310a916537fc6f66deb88310b13a2759"],["/projects/index.html","6bdcd06787ecc261040c906473d2048d"],["/style.313eb.css","ac5b8ee49b291fe55f0841727b38b1fe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,d){var n=new URL(e);return d&&n.pathname.match(d)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],d=new URL(a,self.location),n=createCacheKey(d,hashParamName,c,!1);return[d.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});