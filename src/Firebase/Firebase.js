import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "portfolio-auth-8a5b3.firebaseapp.com",
    projectId: "portfolio-auth-8a5b3",
    storageBucket: "portfolio-auth-8a5b3.appspot.com",
    messagingSenderId: "571959191437",
    appId: "1:571959191437:web:4724d5a99bd7b4af11ffc4",
    measurementId: "G-4C1QH2ZMDY"
}

firebase.initializeApp(config);
firebase.firestore();

export default firebase;