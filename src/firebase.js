import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnWwyu2ec3-WhmIeXLCmrvr1mhp_a-Vto",
    authDomain: "react-firebase-auth-4837b.firebaseapp.com",
    projectId: "react-firebase-auth-4837b",
    storageBucket: "react-firebase-auth-4837b.appspot.com",
    messagingSenderId: "723326874737",
    appId: "1:723326874737:web:6cb6ebae42a1443a4697d0"
};
const firebaseDB = firebase.initializeApp(firebaseConfig);
const db = firebaseDB.database().ref();

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
 
export {auth,googleAuthProvider,facebookAuthProvider, db};