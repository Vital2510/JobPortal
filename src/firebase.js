import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyBCLrhd2CTP8nqBz1HL9-n4fWwNdB_y28E",
  authDomain: "jobportal-f16a5.firebaseapp.com",
  projectId: "jobportal-f16a5",
  storageBucket: "jobportal-f16a5.appspot.com",
  messagingSenderId: "923182695396",
  appId: "1:923182695396:web:e5905ad65cc9ba2ffb7df1",
  measurementId: "G-60E95761M8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {auth,db};
