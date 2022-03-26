import firebase from 'firebase/app';
// import will tell next.js to bundle
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(dotenv.config());

const firebaseConfig = {
  apiKey: 'AIzaSyCSMWzjgAPMSok9hp-LCFOE1siVMEL2i04',
  authDomain: 'nextfire-2f2f4.firebaseapp.com',
  projectId: 'nextfire-2f2f4',
  storageBucket: 'nextfire-2f2f4.appspot.com',
  messagingSenderId: '573811017773',
  appId: '1:573811017773:web:da8e418b4178a9690b50a4',
  measurementId: 'G-6QF68RF6KT',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//Firebase SDK
export const auth = firebase.auth();

//Object tells whichprovider to user when triggering a pop-up modal to sign in
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
