import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA5Jx7dVziGplCrvLd28mZUNtwGlMJ4hTk",
    authDomain: "todo-app-8b455.firebaseapp.com",
    databaseURL: "https://todo-app-8b455.firebaseio.com",
    projectId: "todo-app-8b455",
    storageBucket: "todo-app-8b455.appspot.com",
    messagingSenderId: "250760254302",
    appId: "1:250760254302:web:ca65ad49ebee279126f5cf"
});

const db = firebaseApp.firestore();
export default db;