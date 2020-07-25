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

export const errorText = {
    phone: "������� ������ ����� ��������!",
    name: "������� ������ ��� ����!",
    email: "������� ������ �����!",
    weight: "������� ��� ������ �������!",
    age: "������� ������� ������ �������!",
    password: "��������� �� ������ ������ ����. �������!"
};

export const regExp = {
    email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9�-��-�]{1}[-0-9�-�\.]{1,}[0-9�-��-�]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
    weight: /^([0-1]?[0-9])$/,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    name: /^[a-zA-Z�-��-�"][a-zA-Z�-��-�-"]+[a-zA-Z�-��-�"]$/,
    age: /^([0-2]?[0-9])$/,
    password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
};

export let validate = function (key, value) {
    (!(regExp[key].test(value))) ? document.getElementById(key).setCustomValidity(errorText[key]) : document.getElementById(key).setCustomValidity("");
};

const auth = firebase.auth();

export let signOut = function () {

    auth.signOut();
    window.location.replace("index.html");

}