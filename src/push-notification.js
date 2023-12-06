// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage} from 'firebase/messaging';
// import {  } from "firebase/"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLlm6z4x5XxjLXWGL1plPRX3zuRHbhd4I",
  authDomain: "final-project-6f476.firebaseapp.com",
  projectId: "final-project-6f476",
  storageBucket: "final-project-6f476.appspot.com",
  messagingSenderId: "577114055575",
  appId: "1:577114055575:web:1da9cd32e0d1880f6f1ad2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;

// export const initializeFirebase = () => {
//     firebase.initializeApp({
//         apiKey: "AIzaSyCLlm6z4x5XxjLXWGL1plPRX3zuRHbhd4I",
//         authDomain: "final-project-6f476.firebaseapp.com",
//         projectId: "final-project-6f476",
//         storageBucket: "final-project-6f476.appspot.com",
//         messagingSenderId: "577114055575",
//         appId: "1:577114055575:web:1da9cd32e0d1880f6f1ad2"
//     });
//   }

// export const askForPermissionToReceiveNotifications = async () => {
//     try {
//       const messaging2 = getMessaging();
//       await messaging2.requestPermission();
//       const token = await messaging2.getToken();
//       console.log('Your token is:', token);
      
//       return token;
//     } catch (error) {
//       console.error(error);
//     }
// }
const messaging = getMessaging();

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: `BHlwohWgEEOWNEjVr2S2v4CoougHZ2J9sQZv3_iA-CECrdNhkjJQ-6pJc9ha5D6Ppf5r0yzSacvBSZfVF-QEcFc` })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });