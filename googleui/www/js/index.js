var colors = ["rgb(0, 112, 255)", "rgb(255, 185, 0)", "rgb(238, 52, 52)", "rgb(0, 172, 71)"]

document.getElementById("button1").addEventListener("click", () => {
    var color = colors[Math.floor(Math.random()*colors.length)]
    document.getElementById("button1").style.backgroundColor = color;
});