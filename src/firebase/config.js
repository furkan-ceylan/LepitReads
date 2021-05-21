import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzPb-zzH6uAPWpacD1a_TOsOnsfLJ8t_U",
  authDomain: "lepitreads.firebaseapp.com",
  projectId: "lepitreads",
  storageBucket: "lepitreads.appspot.com",
  messagingSenderId: "807283930460",
  appId: "1:807283930460:web:f82c9cea8e30343c8cfd99",
  measurementId: "G-LLLNXGKXWS",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
