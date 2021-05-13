import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCpYhUbvtUBhvFIHjkLRf9lVzL7hkSonSo",
    authDomain: "wireless-library-76db7.firebaseapp.com",
    databaseURL: "https://wireless-library-76db7.firebaseio.com",
    projectId: "wireless-library-76db7",
    storageBucket: "wireless-library-76db7.appspot.com",
    messagingSenderId: "44664059122",
    appId: "1:44664059122:web:a4a150614a7fa29ae68c6b"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();