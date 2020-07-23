import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDweaZLPzfimYrozto59Q0DeECwpNSuumA",
    authDomain: "react-redux-armanproject.firebaseapp.com",
    databaseURL: "https://react-redux-armanproject.firebaseio.com",
    projectId: "react-redux-armanproject",
    storageBucket: "react-redux-armanproject.appspot.com",
    messagingSenderId: "915068282540",
    appId: "1:915068282540:web:fac7bc00ddab3ab290e109",
    measurementId: "G-D31MP6DF8G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({});

export default firebase;
