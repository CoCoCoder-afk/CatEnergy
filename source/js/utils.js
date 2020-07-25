export { signOut };


function signOut() {

    auth.signOut();
    window.location.replace("index.html");

}


