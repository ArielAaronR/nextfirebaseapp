import firebase from 'firebase/app';
// import will tell next.js to bundle
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseCongif = 'yes';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCongif);
}

//Firebase SDK
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
