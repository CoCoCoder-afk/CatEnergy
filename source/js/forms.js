import {Requests} from "./requests.js";

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

const errorText = {
  phone: "Укажите верный номер телефона!",
  name: "Укажите верное имя кота!",
  email: "Укажите верную почту!",
  weight: "Укажите вес вашего питомца!",
  age: "Укажите возраст вашего питомца!",
  password: "Исключите из вашего пароля спец. символы!"
};

const regExp = {
  email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
  weight: /^([0-1]?[0-9])$/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  name: /^[a-zA-Zа-яА-Я"][a-zA-Zа-яА-Я-"]+[a-zA-Zа-яА-Я"]$/,
  age: /^([0-2]?[0-9])$/,
  password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
};

let validate = function(key, value) {
  (!(regExp[key].test(value))) ? document.getElementById(key).setCustomValidity(errorText[key]) : document.getElementById(key).setCustomValidity("");
};

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