// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDL0Ah63r85NnFsihKiqoKifH22qxsl2rI",
    authDomain: "linkedin-clone-97dd3.firebaseapp.com",
    projectId: "linkedin-clone-97dd3",
    storageBucket: "linkedin-clone-97dd3.appspot.com",
    messagingSenderId: "5855757038",
    appId: "1:5855757038:web:ca72c7a9f8e8578a2629ff",
    measurementId: "G-PLW025D7Y7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };