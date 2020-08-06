import { auth, database } from "./firebase.js";
import { isOptionSelected } from "./utils.js";

let data,
    content = "",
    keys = [],
    isChildRemoved = false,
    items = "",
    signOutBtn = document.getElementById("signOutBtn"),
    ref = database.ref("requests");


function removeRequest(key) {

    this.parentNode.parentNode.remove();
    ref.child(key).remove();

}

ref.on("child_removed", function () {
    isChildRemoved = true;
})

ref.on("value", function (snapshot) {
    if (!isChildRemoved) {
        snapshot.forEach(function (childSnapshot) {
            data = childSnapshot.val();
            keys.push(childSnapshot.key);
            console.log(data.name);
            console.log(data.sweetener);
            console.log(data)
            content += `<div class="items__item item"><hr><p class="item__text"><span id="userName">Имя: ${data.name}</span><br><span id="userAge">Возраст: ${data.age}</span><br><span id="userWeight">Вес: ${data.weight}</span><br><span id="userEmail">Электронная почта: ${data.email}</span><br><span id="userPhone">Номер телефона: ${data.phone}</span><br><span id="userComment">Комментарий пользователя: ${data.comment}</span><br><span id="userSweetener">Сахарозаменитель: ${isOptionSelected(data.sweetener)}</span><br><span id="userWater">Питьевая вода: ${isOptionSelected(data.water)}</span><br><span id="userMilk">Молоко: ${isOptionSelected(data.milk)}</span><br><span id="userVitamins">Витамины: ${isOptionSelected(data.vitamins)}</span></p><p class="item__sub"><button id="deleteBtn" class="item__delete">Delete</button></p><hr></div>`;
        });
        items = document.querySelector('#items');
        items.insertAdjacentHTML('afterEnd', content);
        let buttonsRemove = document.querySelectorAll(".item__delete");
        for (let i = 0; i < keys.length; i++) {
            buttonsRemove[i].addEventListener("click", removeRequest.bind(buttonsRemove[i], keys[i]), false);
        }
    }
});

let signOut = function () {

    auth.signOut();
    window.location.replace("index.html");

}

signOutBtn.addEventListener("click", signOut, false);