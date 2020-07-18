var firebaseConfig = {
    apiKey: "AIzaSyAXNJV2NKPM6wEFE84iwu31snNtQFrpKiA",
    authDomain: "catenergy-bd4c1.firebaseapp.com",
    databaseURL: "https://catenergy-bd4c1.firebaseio.com",
    projectId: "catenergy-bd4c1",
    storageBucket: "catenergy-bd4c1.appspot.com",
    messagingSenderId: "502760223466",
    appId: "1:502760223466:web:6972347aaacff6973f5d93"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp() {

    let email = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}

function signIn() {

    let email = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    event.preventDefault();
    promise.catch(e => alert(e.message));

}

auth.onAuthStateChanged(function (user) {
    if (user) {
        window.location.replace("requests.html");
    }
});

function backMenu() {
    window.location.replace("index.html");
}