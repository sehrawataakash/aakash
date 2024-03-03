let btn1 = document.querySelector("#btn1");
let herosection = document.querySelector(".hero-section");
let navbar = document.querySelector(".navbar");
let flag = 0;

btn1.addEventListener("click", function () {
    if (flag === 0) {
        herosection.style.backgroundColor = "darkgoldenrod";
        navbar.style.backgroundColor = "darkgoldenrod";
        console.log("Light Theme");
        flag = 1;
    } else {
        herosection.style.backgroundColor = "black";
        navbar.style.backgroundColor = "black";
        console.log("Dark Theme");
        flag = 0;
    }
});