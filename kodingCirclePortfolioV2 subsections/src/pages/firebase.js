import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDclc6C5gHF_GcYOl854nAZQxv875YUF_I",
    authDomain: "codingcircle00.firebaseapp.com",
    databaseURL: "https://codingcircle00-default-rtdb.firebaseio.com",
    projectId: "codingcircle00",
    storageBucket: "codingcircle00.appspot.com",
    messagingSenderId: "350011162790",
    appId: "1:350011162790:web:5ae0aae633feff9d133467",
    measurementId: "G-L7NEWS4N8M"
  };
  
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export default database;
