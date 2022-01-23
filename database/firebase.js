// database/firebaseDb.js

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD4UG0hsXSb5EV-9_X5MirXvgFerSraBKs",
  authDomain: "projectdatabase-5b08e.firebaseapp.com",
  databaseURL: "https://projectdatabase-5b08e-default-rtdb.firebaseio.com",
  projectId: "projectdatabase-5b08e",
  storageBucket: "projectdatabase-5b08e.appspot.com",
  messagingSenderId: "225541644594",
  appId: "1:225541644594:web:93764fcf8557bee1e9372b"
};

firebase.initializeApp(firebaseConfig);
export default firebase;