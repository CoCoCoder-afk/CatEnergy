import { isValidate } from "./utils.js";

let form = document.getElementById("mainForm"),
    weight = form.querySelector("#weight"),
    age = form.querySelector("#age"),
    name = form.querySelector("#name"),
    phone = form.querySelector("#phone"),
    email = form.querySelector("#email"),
    modal = form.querySelector(".modal"),
    submitButton = form.querySelector("#extra-button"),
    slim = form.querySelector("#slim"),
    getMass = form.querySelector("#getMass"),
    idk = form.querySelector("#idk"),
    sweetener = form.querySelector("#sweetener"),
    water = form.querySelector("#water"),
    milk = form.querySelector("#milk"),
    vitamins = form.querySelector("#vitamins"),
    comment = form.querySelector("#comment");

name.addEventListener("input", name.fnVal = function fn() {
  let nameValue = name.value;
  isValidate("name", nameValue);
}, false);
name.removeEventListener("click", name.fnVal, false);

email.addEventListener("input", email.fnVal = function fn() {
  let emailValue = email.value;
  isValidate("email", emailValue);
}, false);
email.removeEventListener("click", email.fnVal, false);

phone.addEventListener("input", phone.fnVal = function fn() {
  let phoneValue = phone.value;
  isValidate("phone", phoneValue);
}, false);
phone.removeEventListener("click", phone.fnVal, false);

age.addEventListener("input", age.fnVal = function fn() {
  let ageValue = age.value;
  isValidate("age", ageValue);
}, false);
age.removeEventListener("click", age.fnVal, false);

weight.addEventListener("input", weight.fnVal = function fn() {
  let weightValue = weight.value;
  isValidate("weight", weightValue);
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
    let request = {
        name: name.value,
        age: age.value,
        weight: weight.value,
        email: email.value,
        phone: phone.value,
        slim: slim.checked,
        getMass: getMass.checked,
        idk: idk.checked,
        sweetener: sweetener.checked,
        water: water.checked,
        milk: milk.checked,
        vitamins: vitamins.checked,
        comment: comment.value,
    }
    console.log(request);
    Requests.create(request);
}

class Requests {
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