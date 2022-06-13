import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDwDmsimK7sgt1mVJlFbRiIPI56Lxg4sPQ",
    authDomain: "whatsapp-clone-45f78.firebaseapp.com",
    projectId: "whatsapp-clone-45f78",
    storageBucket: "whatsapp-clone-45f78.appspot.com",
    messagingSenderId: "193336539138",
    appId: "1:193336539138:web:63caca960e47917c8c4f1b",
    measurementId: "G-K9QTH9MCQN"
  };

  const firebaseApp = firebase.initialize(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;