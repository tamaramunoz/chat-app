import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBdjTWrTsuD-oYOOkVDGvGzFsepExICKYQ",
    authDomain: "chat-app-e7113.firebaseapp.com",
    databaseURL: "https://chat-app-e7113.firebaseio.com",
    projectId: "chat-app-e7113",
    storageBucket: "chat-app-e7113.appspot.com",
    messagingSenderId: "974531112428",
    appId: "1:974531112428:web:c1afaf2d7c9de83716a4c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }
  