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

let content = "";

function signOut() {

    auth.signOut();
    window.location.replace("index.html");

}
let flag = true;

ref.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        data = childSnapshot.val(); 
        content += `<div class="items__item item"><hr><p class="item__text"><span id="userName">${data.name}</span><br><span id="userAge">${data.age}</span><br><span id="userWeight">${data.weight}</span><br><span id="userEmail">${data.email}</span><br><span id="userPhone">${data.phone}</span><br><span id="userComment">${data.comment}</span><br><span id="userSweetener">${data.sweetener}</span><br><span id="userWater">${data.water}</span><br><span id="userMilk">${data.milk}</span><br><span id="userVitamins">${data.vitamins}</span></p><p class="item__sub">true - user needs / false - user don't<button onclick="requestDelete()" id="deleteBtn" class="item__delete">Delete</button></p><hr></div>`
    });
    let items = document.querySelector('#items');
    items.insertAdjacentHTML('afterEnd', content);
})

function requestDelete() {
    document.querySelector(".item").innerHTML = "";
    alert("You have successfully deleted CatEnergy request.");
    data.removeValue();
}