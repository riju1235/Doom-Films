import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDm--zdfPq8BivLs5roOY6s9Mg_RAFPPDY",
  authDomain: "doom-films.firebaseapp.com",
  projectId: "doom-films",
  storageBucket: "doom-films.appspot.com",
  messagingSenderId: "87584550154",
  appId: "1:87584550154:web:05c5d0adb9ccd2e7a79ef3",
  measurementId: "G-NTK7NPZZTQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
