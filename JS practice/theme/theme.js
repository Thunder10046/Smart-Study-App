let btn = document.querySelector(".button_1");

let body = document.querySelector("body");
let curr_theme = "light"; 

btn.addEventListener("click", function () {
    // body.classList contains a list of classes, so we can use contains() to check if a class is present
    // toggle() will add or remove a class depending on whether it is already present or not
    body.classList.toggle("dark");
    body.classList.toggle("white");
    // after we toggle the classes, we can check which one is present to determine the current theme
    curr_theme = body.classList.contains("dark") ? "dark" : "white";
    // console.log(curr_theme) will help us understand the value of curr_theme
});


