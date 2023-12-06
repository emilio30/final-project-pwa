// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
//   apiKey: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_API_KEY`,
//   authDomain: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_AUTH_DOMAIN`,
//   projectId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_PROJECT_ID`,
//   storageBucket: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_STORAGE_BUCKET`,
//   messagingSenderId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_SENDER_ID`,
//   appId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_APP_ID`,
//   measurementId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_MEASUREMENT_ID`,

  apiKey: "AIzaSyCLlm6z4x5XxjLXWGL1plPRX3zuRHbhd4I",
  authDomain: "final-project-6f476.firebaseapp.com",
  projectId: "final-project-6f476",
  storageBucket: "final-project-6f476.appspot.com",
  messagingSenderId: "577114055575",
  appId: "1:577114055575:web:1da9cd32e0d1880f6f1ad2"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});