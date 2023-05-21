var colors = ["rgb(0, 112, 255)", "rgb(255, 185, 0)", "rgb(238, 52, 52)", "rgb(0, 172, 71)"];
var x = 0;
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    if (x == 0) {
        x = 1;
        menu.style.left = "0px";
        overlay.style.display = "block";
    }
    else {
        x = 0;
        menu.style.left = "-300px";
        overlay.style.display = "none";
    }
});