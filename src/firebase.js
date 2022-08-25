// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjc532mWwPoSiGIz3ZuVg9dbXqXImSBjQ",
    authDomain: "apanah-fd0a0.firebaseapp.com",
    projectId: "apanah-fd0a0",
    storageBucket: "apanah-fd0a0.appspot.com",
    messagingSenderId: "480517952505",
    appId: "1:480517952505:web:2306c9fa5612ed67e6e328",
    measurementId: "G-MR8T3D4G29"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};