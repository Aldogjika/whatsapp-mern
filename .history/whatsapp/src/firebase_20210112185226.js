import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyaqWb3Q1dyObZuy8Q565CxApirbH0EKM",
  authDomain: "whatsapp-mern-1a41b.firebaseapp.com",
  projectId: "whatsapp-mern-1a41b",
  storageBucket: "whatsapp-mern-1a41b.appspot.com",
  messagingSenderId: "461221985266",
  appId: "1:461221985266:web:cb6599dfdcd4359cb8c96b",
  measurementId: "G-L3SL7CZM3Q",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, auth, storage };
