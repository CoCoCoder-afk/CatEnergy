import { Requests } from "./utils.js";
import { validate } from "./utils.js";

let form = document.getElementById("mainForm"),
    weight = document.querySelector("#weight"),
    age = document.querySelector("#age"),
    name = document.querySelector("#name"),
    phone = document.querySelector("#phone"),
    email = document.querySelector("#email"),
    modal = document.querySelector(".modal"),
    submitButton = document.getElementById("extra-button"),
    slim = document.querySelector("#slim"),
    getMass = document.querySelector("#getMass"),
    idk = document.querySelector("#idk"),
    sweetener = document.querySelector("#sweetener"),
    water = document.querySelector("#water"),
    milk = document.querySelector("#milk"),
    vitamins = document.querySelector("#vitamins"),
    comment = document.querySelector("#comment");

name.addEventListener("input", name.fnVal = function fn() {
  let nameValue = name.value;
  validate("name", nameValue);
}, false);
name.removeEventListener("click", name.fnVal, false);

email.addEventListener("input", email.fnVal = function fn() {
  let emailValue = email.value;
  validate("email", emailValue);
}, false);
email.removeEventListener("click", email.fnVal, false);

phone.addEventListener("input", phone.fnVal = function fn() {
  let phoneValue = phone.value;
  validate("phone", phoneValue);
}, false);
phone.removeEventListener("click", phone.fnVal, false);

age.addEventListener("input", age.fnVal = function fn() {
  let ageValue = age.value;
  validate("age", ageValue);
}, false);
age.removeEventListener("click", age.fnVal, false);

weight.addEventListener("input", weight.fnVal = function fn() {
  let weightValue = weight.value;
  validate("weight", weightValue);
}, false);
weight.removeEventListener("click", weight.fnVal, false);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  modal.style.display = "flex";
  setTimeout(function() {
    modal.style.display = "none";
  }, 5000);
});

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const request = {
        name: "Имя: " + name.value,
        age: "Возраст: " + age.value,
        weight: "Вес: " + weight.value,
        email: "Электронная почта: " + email.value,
        phone: "Номер телефона: " + phone.value,
        slim: "Похудение: " + slim.checked,
        getMass: "Набор массы: " + getMass.checked,
        idk: "Я не знаю (помогите с выбором): " + idk.checked,
        sweetener: "Сахарозаменитель: " + sweetener.checked,
        water: "Питьевая вода: " + water.checked,
        milk: "Молоко: " + milk.checked,
        vitamins: "Витамины: " + vitamins.checked,
        comment: "Комментарий к заявке: " + comment.value,
    }
    Requests.create(request);
}