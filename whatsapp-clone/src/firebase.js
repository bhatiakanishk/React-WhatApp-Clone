//import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwDmsimK7sgt1mVJlFbRiIPI56Lxg4sPQ",
  authDomain: "whatsapp-clone-45f78.firebaseapp.com",
  projectId: "whatsapp-clone-45f78",
  storageBucket: "whatsapp-clone-45f78.appspot.com",
  messagingSenderId: "193336539138",
  appId: "1:193336539138:web:63caca960e47917c8c4f1b",
  measurementId: "G-K9QTH9MCQN"
};

  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;