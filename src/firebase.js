// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FirebaseApiKey,
    authDomain: "tiktok-clone-402eb.firebaseapp.com",
    projectId: "tiktok-clone-402eb",
    storageBucket: "tiktok-clone-402eb.appspot.com",
    messagingSenderId: "44222967538",
    appId: "1:44222967538:web:e42029f79f2276ea206a6b",
    measurementId: "G-FK73ZC5921"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export default db;