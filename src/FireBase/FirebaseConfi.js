// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4G49jQs8QhE4kDdrHOv1Zka18FMDPzLI",
    authDomain: "personajesnaruto-95bf7.firebaseapp.com",
    projectId: "personajesnaruto-95bf7",
    storageBucket: "personajesnaruto-95bf7.appspot.com",
    messagingSenderId: "949337743010",
    appId: "1:949337743010:web:0f2f590705d99d927101fb",
    measurementId: "G-W1QCM0LPV3"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
