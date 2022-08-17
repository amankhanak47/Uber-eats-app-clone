import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBcYCZfaI4QmERztiQea0qI1_1wT93M-pk",
  authDomain: "uber-eats-650fa.firebaseapp.com",
  projectId: "uber-eats-650fa",
  storageBucket: "uber-eats-650fa.appspot.com",
  messagingSenderId: "610143449889",
  appId: "1:610143449889:web:26793b2e74138506354460",
  measurementId: "G-S3RDY525Y9"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;