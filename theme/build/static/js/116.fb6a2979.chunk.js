(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{735:function(e,a,t){"use strict";t.r(a);var n=t(736),o=(t(745),t(0)),i=(t(45),t(6)),s=t.n(i),r=t(10),c=t.n(r),p=(t(8),t(9));try{n.initializeApp({apiKey:"AIzaSyDNYE9M32BQm5cOZeaPU416aK9cywMgfgc",authDomain:"mybeldara.firebaseapp.com",databaseURL:"https://mybeldara.firebaseio.com",projectId:"mybeldara",storageBucket:"mybeldara.appspot.com",messagingSenderId:"944225435259"});var m=n.messaging();m.usePublicVapidKey("BPlqEOm2KBrl6qVbavoOst-AzE-SLg775YPeTC8TN4ekDevf0xKUJnaq6YvCPpI0vo_0fQUBMTpRSbvEaIWhzC0"),m.requestPermission().then(function(){return console.log("Notification permission granted."),m.getToken()}).then(function(e){s.a.post("".concat(o.d,"/common/ajax-firebase.php"),{security_token:"",plateform_type:"",token:e,type:"messaging",sellerid:c.a.get("sellerid"),visitorid:Object(p.s)("mhinpbnb")},{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){}).catch(function(e){var a=e.response;return Promise.reject(a)})}).catch(function(e){}),m.onMessage(function(e){})}catch(d){}}}]);
//# sourceMappingURL=116.fb6a2979.chunk.js.map