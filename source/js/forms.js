import { Requests } from "./requests.js";
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
console.log(name, form, weight);

name.addEventListener("input", function() {
  let nameValue = name.value;
  validate("name", nameValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

email.addEventListener("input", function() {
  let emailValue = email.value;
  validate("email", emailValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

phone.addEventListener("input", function() {
  let phoneValue = phone.value;
  validate("phone", phoneValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

age.addEventListener("input", function() {
  let ageValue = age.value;
  validate("age", ageValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

weight.addEventListener("input", function() {
  let weightValue = weight.value;
  validate("weight", weightValue);
  this.removeEventListener(event.type,arguments.callee,event.eventPhase);
}, false);

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