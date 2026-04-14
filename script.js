// var console = {};
// console.log = function(){};

var deviceToken;

//20220127 ios js fix
const isSupported = () => 
'Notification' in window && 
'serviceWorker' in navigator && 
  'PushManager' in window 
//20220127 ios js fix

// importScripts("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js");
// const divInstall = document.getElementById("installContainer");
// const butInstall = document.getElementById("butInstall");

/* Put code here */
window.addEventListener("beforeinstallprompt", event => {
  console.log("👍", "beforeinstallprompt", event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  event.preventDefault();
  // Remove the 'hidden' class from the install button container
  // divInstall.classList.toggle("hidden", false); ///////////////////////////////////////////////
});

// butInstall.addEventListener("click", async () => { //////////////////////////////////////////////
//   console.log("👍", "butInstall-clicked");
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     // The deferred prompt isn't available.
//     return;
//   }
//   // Show the install prompt.
//   promptEvent.prompt();
//   // Log the result
//   const result = await promptEvent.userChoice;
//   console.log("👍", "userChoice", result);
//   // Reset the deferred prompt variable, since
//   // prompt() can only be called once.
//   window.deferredPrompt = null;
//   // Hide the install button.
//   divInstall.classList.toggle("hidden", true);
// });

window.addEventListener("appinstalled", event => {
  console.log("👍", "appinstalled", event);
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});

// /* Only register a service worker if it's supported */
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/service-worker.js");
// }

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
// if (window.location.protocol === "http:") {
//   const requireHTTPS = document.getElementById("requireHTTPS");
//   const link = requireHTTPS.querySelector("a");
//   link.href = window.location.href.replace("http://", "https://");
//   requireHTTPS.classList.remove("hidden");
// }




// browser notifications
// Notification.requestPermission(function(status) {
//   console.log('Notification permission status:', status);
// });


// setTimeout(function () {
//   Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
//   });
// }, 10000);
// changed 20220127 to allow for unsupported 'Notification'
setTimeout(function () { 
  if (isSupported()) { 
 
  Notification.requestPermission(function (status) { 
    console.log('Notification permission status:', status); 
  }); 
} 
}, 10000); 
// changed 20220127 to allow for unsupported 'Notification'



function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'Here is a notification body!',
        // icon: 'images/example.png',
        icon: 'manifest/icons/tfx-512-icon_bgtrans.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Explore this new world',
            // icon: 'images/checkmark.png'},
            icon: 'manifest/icons/tick_320.png'},
          {action: 'close', title: 'Close notification',
            // icon: 'images/xmark.png'},
            icon: 'manifest/icons/cross_320.png'},
        ]
      };
      reg.showNotification('Hello world!', options);
    });
  }
}

function displayTFXNotification(notification_title, notification_body) {
  console.log('displayTFXNotification');
  if (Notification.permission == 'granted') {
    console.log('granted');
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: notification_body,
        // icon: 'images/example.png',
        icon: 'manifest/icons/tfx-512-icon_bgtrans.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          // {action: 'explore', title: 'Explore this new world',
          //   // icon: 'images/checkmark.png'},
          //   icon: 'manifest/icons/tick_320.png'},
          // {action: 'close', title: 'Close notification',
          //   // icon: 'images/xmark.png'},
          //   icon: 'manifest/icons/cross_320.png'},
        ]
      };
      reg.showNotification(notification_title, options);
    });
  }
}
// browser notifications

// self.addEventListener('notificationclick', function (event) {
//   console.log('notificationclick');
//   const clickedNotification = event.notification;
//   // clients.openWindow('https://dev.travelfx.co.uk/client-area-order-history-overview');


//     // var urlToRedirect = event.notification.data.url;
//     event.notification.close();
//     // event.waitUntil(self.clients.openWindow(urlToRedirect));




//   // clickedNotification.close();
// //     notification.close();

//   // Do something as the result of the notification click
//   // const promiseChain = doSomething();
//   // event.waitUntil(promiseChain);
// });



// self.addEventListener('notificationclick', function (event) {
//     console.log("notificationclick", event)
//     var urlToRedirect = event.notification.data.url;
//     event.notification.close();
//     event.waitUntil(self.clients.openWindow(urlToRedirect));
// });












// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//       navigator.serviceWorker.register('service-worker.js').catch(function(ex) {
//           console.warn(ex);
//           console.warn('(This warning can be safely ignored outside of the production build.)');
//       });
//   })
// }

// // push notifications
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('service-worker.js').then(function(reg) {
//     console.log('Service Worker Registered!', reg);

//     reg.pushManager.getSubscription().then(function(sub) {
//       if (sub === null) {
//         // Update UI to ask user to register for Push
//         console.log('Not subscribed to push service!');
//       } else {
//         // We have a subscription, update the database
//         console.log('Subscription object: ', sub);
//       }
//     });
//   })
//    .catch(function(err) {
//     console.log('Service Worker registration failed: ', err);
//   });
// })
// }



















// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log(
//       "[firebase-messaging-sw.js] Received background message ",
//       payload,
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//       body: "Background Message body.",
//       icon: "/itwonders-web-logo.png",
//   };

//   return self.registration.showNotification(
//       notificationTitle,
//       notificationOptions,
//   );
// });
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // ...
//   return self.registration.showNotification();
// });















