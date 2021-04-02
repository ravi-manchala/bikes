import firebase from 'firebase/app';
import 'firebase/storage'; //used as storage for our images
import 'firebase/firestore'; //used as a database for our image urls
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDuIk-oRkI4KH25AuFw2a3jnH1bV_07teI",
    authDomain: "bikes-gallery-f3bfb.firebaseapp.com",
    projectId: "bikes-gallery-f3bfb",
    storageBucket: "bikes-gallery-f3bfb.appspot.com",
    messagingSenderId: "1052523480184",
    appId: "1:1052523480184:web:18ed6e5b31930f39b5598d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Initializing storage &firestore services
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};