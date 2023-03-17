// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCx63X4vSCbleS8M16tOd9ntQKmQsVBNJU",
    authDomain: "clone-95c23.firebaseapp.com",
    projectId: "clone-95c23",
    storageBucket: "clone-95c23.appspot.com",
    messagingSenderId: "329809512907",
    appId: "1:329809512907:web:6fbed89340d421510f0e4e",
    measurementId: "G-HPTDFVEWYM"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};