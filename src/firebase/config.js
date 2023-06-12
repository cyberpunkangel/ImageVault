// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_MEASUREMENTID,
  VITE_APPID,
} = getEnvironments();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Variables de entorno para producción:
// const firebaseConfig = {
//   apiKey: "AIzaSyB1hcuAT3pgnNby4_147m6_00ehk5hHZOU",
//   authDomain: "react-cursos-d0aa5.firebaseapp.com",
//   projectId: "react-cursos-d0aa5",
//   storageBucket: "react-cursos-d0aa5.appspot.com",
//   messagingSenderId: "873313109197",
//   appId: "1:873313109197:web:cfcc609d256230066b1584"
// };
// Variables de entorno para testing:
// const firebaseConfig = {
//   apiKey: "AIzaSyD82QIiAzbk3bbZHNstBT7XwCJil-BZeOk",
//   authDomain: "react-cursos-testing-39562.firebaseapp.com",
//   projectId: "react-cursos-testing-39562",
//   storageBucket: "react-cursos-testing-39562.appspot.com",
//   messagingSenderId: "17169649679",
//   measurementId: "G-V25BQNRKVJ",
//   appId: "1:17169649679:web:50c6c19eeb4862420ed37a"
// };

// Initialize Firebase

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  measurementid: VITE_MEASUREMENTID,
  appId: VITE_APPID,
};


export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );