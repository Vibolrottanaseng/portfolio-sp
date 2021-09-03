import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey:"AIzaSyCgLPH9rX_obw6i1jBMJolXtFfbH3WyG3k",
    authDomain: "portfolio-e78c6.firebaseapp.com",
    projectId: "portfolio-e78c",
    storageBucket:"portfolio-e78c6.appspot.com",
    messagingSenderId:"691403101137",
    appId:"1:691403101137:web:7f435ba96c477593c0c6f0",
    measurementId:"G-VDY4FJRRHL"
});


//const auth = app.auth();
export  default firebaseConfig;