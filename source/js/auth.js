import { auth } from "./firebase.js";

let authForm = document.querySelector("#authForm"),
    backMenuBtn = authForm.querySelector("#loginBackMenu"),
    signInBtn = authForm.querySelector("#loginSignIn"),
    signUpBtn = authForm.querySelector("#loginSignUp"),
    email = authForm.querySelector("#loginEmail"),
    password = authForm.querySelector("#loginPassword"),
    user = auth.currentUser;

backMenuBtn.addEventListener("click", backMenu, false);
signInBtn.addEventListener("click", signIn, false);
signUpBtn.addEventListener("click", signUp, false);

function signUp() {

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}

function signIn() {

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    event.preventDefault();
    promise.catch(e => alert(e.message));

}

function backMenu() {
    window.location.replace("index.html");
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        window.location.replace("requests.html");
    }
});
