export const errorText = {
    phone: "Укажите верный номер телефона!",
    name: "Укажите верное имя кота!",
    email: "Укажите верную почту!",
    weight: "Укажите вес вашего питомца!",
    age: "Укажите возраст вашего питомца!",
    password: "Исключите из вашего пароля спец. символы!"
};

export const regExp = {
    email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
    weight: /^([0-1]?[0-9])$/,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    name: /^[a-zA-Zа-яА-Я"][a-zA-Zа-яА-Я-"]+[a-zA-Zа-яА-Я"]$/,
    age: /^([0-2]?[0-9])$/,
    password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
};

export const validate = function (key, value) {
    (!(regExp[key].test(value))) ? document.getElementById(key).setCustomValidity(errorText[key]) : document.getElementById(key).setCustomValidity("");
};

export class Requests {
    static create(request) {
        return fetch("https://catenergy-bd4c1.firebaseio.com/requests.json", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                request.id = response.name
                return request
            })
    }
}

export function backMenu() {
    window.location.replace("index.html");
}
 
