import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC8vGODlSeRgIG7HzOb1D6hOTVtCstbpHs",
    authDomain: "makemycuisine.firebaseapp.com",
    projectId: "makemycuisine",
    storageBucket: "makemycuisine.appspot.com",
    messagingSenderId: "140699304592",
    appId: "1:140699304592:web:7d9f823f63756690068e15"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire