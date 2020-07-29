import { signOut } from "./utils.js";
import { auth, database } from "./firebase.js";

let data,
    content = "",
    keys = [],
    child_removed = false,
    items = "",
    signOutBtn = document.getElementById("signOutBtn"),
    ref = database.ref("requests");


function removeRequest(key) {

    this.parentNode.parentNode.remove();
    ref.child(key).remove();

}

ref.on("child_removed", function () {
    child_removed = true;
})

ref.on("value", function (snapshot) {
    if (!child_removed) {
        snapshot.forEach(function (childSnapshot) {
            data = childSnapshot.val();
            keys.push(childSnapshot.key);
            content += `<div class="items__item item"><hr><p class="item__text"><span id="userName">${data.name}</span><br><span id="userAge">${data.age}</span><br><span id="userWeight">${data.weight}</span><br><span id="userEmail">${data.email}</span><br><span id="userPhone">${data.phone}</span><br><span id="userComment">${data.comment}</span><br><span id="userSweetener">${data.sweetener}</span><br><span id="userWater">${data.water}</span><br><span id="userMilk">${data.milk}</span><br><span id="userVitamins">${data.vitamins}</span></p><p class="item__sub">true - user needs / false - user don't<button id="deleteBtn" class="item__delete">Delete</button></p><hr></div>`;
        });
        items = document.querySelector('#items');
        items.insertAdjacentHTML('afterEnd', content);
        let buttonsRemove = document.querySelectorAll(".item__delete");
        for (let i = 0; i < keys.length; i++) {
            buttonsRemove[i].addEventListener("click", removeRequest.bind(buttonsRemove[i], keys[i]), false);
        }
    }
    else {
        console.log("");
    }
});

signOutBtn.addEventListener("click", signOut, false);

console.log('listRequests');