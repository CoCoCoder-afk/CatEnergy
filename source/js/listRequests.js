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
let database = firebase.database(),
    ref = database.ref("requests"),
    data;

function signOut() {

    auth.signOut();
    window.location.replace("index.html");

}
let flag = true;

ref.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        data = childSnapshot.val();
        document.querySelector("#userWeight").textContent = data.weight;
        document.querySelector("#userName").textContent = data.name;
        document.querySelector("#userComment").textContent = data.comment;
        document.querySelector("#userAge").textContent = data.age;
        document.querySelector("#userEmail").textContent = data.email;
        document.querySelector("#userPhone").textContent = data.phone;
        document.querySelector("#userSweetener").textContent = data.sweetener;
        document.querySelector("#userWater").textContent = data.water;
        document.querySelector("#userMilk").textContent = data.milk;
        document.querySelector("#userVitamins").textContent = data.vitamins;
    });
})

function requestDelete() {
    document.querySelector(".item").innerHTML = "";
    alert("You have successfully deleted CatEnergy request.");
    data.removeValue();
}