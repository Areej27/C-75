import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB-XMmpx4bJdOtmexsFzDKAaCBiw6SP_jQ",
  authDomain: "c-71-c3645.firebaseapp.com",
  databaseURL: "https://c-71-c3645-default-rtdb.firebaseio.com",
  projectId: "c-71-c3645",
  storageBucket: "c-71-c3645.appspot.com",
  messagingSenderId: "655838744242",
  appId: "1:655838744242:web:bb2ca581c120bd372603ab"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
