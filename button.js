let bold = document.getElementById("button2");
let txt = document.getElementById("input");
let color = document.getElementById("button3");
let blackButton = document.getElementById("button4");
let Italics1 = document.getElementById("button5");

Italics1.onclick = function () {
    if(txt.style.fontStyle == "italic") {
        txt.style.fontStyle = "normal";
    }

    else{
        txt.style.fontStyle = "italic"
    }
}

bold.onclick = function () {
    if(txt.style.fontWeight == "bold") {
        txt.style.fontWeight = ("normal");
    }
    
    else{
        txt.style.fontWeight = "bold";
    }
}

color.onclick = function () {
    txt.style.color = randomRGB();
}

blackButton.onclick = function () {
    txt.style.color = ("#000000");
}

function randInt(n) {
    return Math.floor(Math.random() * n)
}

function randomRGB() {
    let r = randInt(256);
    let g = randInt(256);
    let b = randInt(256);

    return `rgb(${r}, ${g}, ${b})`;
}

