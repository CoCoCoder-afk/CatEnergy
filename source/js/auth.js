import { auth, database } from "./firebase.js";
import { backMenu } from "./utils.js";

let backMenuBtn = document.getElementById("loginBackMenu"),
    signInBtn = document.getElementById("loginSignIn"),
    signUpBtn = document.getElementById("loginSignUp");    
console.log(signInBtn);
backMenuBtn.addEventListener("click", backMenu, false);
signInBtn.addEventListener("click", signIn, false);
signUpBtn.addEventListener("click", signUp, false);

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

console.log('auth');