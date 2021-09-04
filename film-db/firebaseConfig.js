// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAUzy8W1zDOZVtR8n5_5Q4_Os8ZuGyTgg",
    authDomain: "aitbclex-testing.firebaseapp.com",
    databaseURL: "https://aitbclex-testing.firebaseio.com",
    projectId: "aitbclex-testing",
    storageBucket: "aitbclex-testing.appspot.com",
    messagingSenderId: "525699637891",
    appId: "1:525699637891:web:39c8b7ecc2f809f043b1b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// I guess creates a database of some sort.
let db = firebase.firestore();