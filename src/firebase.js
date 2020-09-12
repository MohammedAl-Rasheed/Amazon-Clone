import firebase from "firebase" ;


const firebaseConfig = {
    apiKey: "AIzaSyA6EYXTlHy_w7m7UlOynMSs-6xjc1oDdv0",
    authDomain: "actual-covid-19-56b76.firebaseapp.com",
    databaseURL: "https://actual-covid-19-56b76.firebaseio.com",
    projectId: "actual-covid-19-56b76",
    storageBucket: "actual-covid-19-56b76.appspot.com",
    messagingSenderId: "218626680940",
    appId: "1:218626680940:web:5541de6ab1cf9c920ad049",
    measurementId: "G-SCYDGX6GN3" ,
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export { db, auth };

