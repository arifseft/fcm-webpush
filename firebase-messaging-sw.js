// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  messagingSenderId: "288408470629",
  apiKey: "AIzaSyAvHVtDEgX-ZyiiPfzYHa1DIh_9LjJMvmk",
  projectId: "push-notif-740da",
  appId: "1:288408470629:web:93ab38eb6f444d2de1b28c",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
