import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfggszvqfjW_EdeLUQNJQaWExA6yKvtYU",
  authDomain: "whatsapp-f4de6.firebaseapp.com",
  projectId: "whatsapp-f4de6",
  storageBucket: "whatsapp-f4de6.appspot.com",
  messagingSenderId: "83693175304",
  appId: "1:83693175304:web:8475ec06db118bb96447bd",
  measurementId: "G-7J2NK122KS",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, auth, storage };
