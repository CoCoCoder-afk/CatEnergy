import { auth } from "./firebase.js";

let errorText = {
    error1: "Укажите верный номер телефона!",
    error2: "Укажите верное имя кота!",
    error3: "Укажите верную почту!",
    error4: "Укажите вес вашего питомца!",
    error5: "Укажите возраст вашего питомца!",
    error6: "Исключите из вашего пароля спец. символы!",
};

let errorTextKeys = ["phone", "name", "email", "weight", "age", "password"];

let regExp = {
    email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
    weight: /^([0-1]?[0-9])$/,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    name: /^[a-zA-Zа-яА-Я"][a-zA-Zа-яА-Я-"]+[a-zA-Zа-яА-Я"]$/,
    age: /^([0-2]?[0-9])$/,
    password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
};

export let isValidate = function (key, value) {
    (!(regExp[key].test(value))) ? document.getElementById(key).setCustomValidity(errorText["error" + (errorTextKeys.indexOf(key)+1)]) : document.getElementById(key).setCustomValidity("");
};

export let isOptionSelected = function (value) {
    if (value == true) {
        return "выбрано";
    }
    return "не выбрано";
}