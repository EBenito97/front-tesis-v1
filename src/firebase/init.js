// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
//import firestore from "firebase/compat/firestore";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNNAZ93WXhKHfal2Aw4dfMHPvm-6d4SuI",
  authDomain: "applogin-fa8a7.firebaseapp.com",
  projectId: "applogin-fa8a7",
  storageBucket: "applogin-fa8a7.appspot.com",
  messagingSenderId: "709498295378",
  appId: "1:709498295378:web:f422f46059376d233f3b8b",
  measurementId: "G-3NC87YT777",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshot: true, merge: true });

export default firebaseApp.firestore();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
