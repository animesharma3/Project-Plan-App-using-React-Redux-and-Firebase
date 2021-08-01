import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyABRG_mEN9G3E90gfi3zPmqLJAiMI5IMRE",
    authDomain: "socialape-f95eb.firebaseapp.com",
    projectId: "socialape-f95eb",
    storageBucket: "socialape-f95eb.appspot.com",
    messagingSenderId: "554131364774",
    appId: "1:554131364774:web:b90a19e3690075ae040d67",
    measurementId: "G-5BRESRKJJM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase