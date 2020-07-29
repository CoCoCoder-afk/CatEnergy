import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAXNJV2NKPM6wEFE84iwu31snNtQFrpKiA",
    authDomain: "catenergy-bd4c1.firebaseapp.com",
    databaseURL: "https://catenergy-bd4c1.firebaseio.com",
    projectId: "catenergy-bd4c1",
    storageBucket: "catenergy-bd4c1.appspot.com",
    messagingSenderId: "502760223466",
    appId: "1:502760223466:web:6972347aaacff6973f5d93"
};

firebase.initializeApp(firebaseConfig);

export let auth = firebase.auth();
export let database = firebase.database();

module.exports = {
    auth,
    database,
}