import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyDclc6C5gHF_GcYOl854nAZQxv875YUF_I",
//     authDomain: "codingcircle00.firebaseapp.com",
//     databaseURL: "https://codingcircle00-default-rtdb.firebaseio.com",
//     projectId: "codingcircle00",
//     storageBucket: "codingcircle00.appspot.com",
//     messagingSenderId: "350011162790",
//     appId: "1:350011162790:web:5ae0aae633feff9d133467",
//     measurementId: "G-L7NEWS4N8M"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBFDXds0Kocl-_1fUfIBQKlqu-R9eC5bmY",
    authDomain: "kodingcircle-490ba.firebaseapp.com",
    databaseURL: "https://kodingcircle-490ba-default-rtdb.firebaseio.com",
    projectId: "kodingcircle-490ba",
    storageBucket: "kodingcircle-490ba.firebasestorage.app",
    messagingSenderId: "746873995210",
    appId: "1:746873995210:web:7181ad5daa2fd5ffa45933",
    measurementId: "G-HD7C4RDD7J"
};
  
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export default database;
