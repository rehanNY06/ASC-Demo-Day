// Next Button code
let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton");
let arrowtrans = document.getElementById("og");

// nextButton.onclick=function(event){
//     event.preventDefault();
//     display="none";
// }

// nextButton.onhover = function() {
//     nextButton.style.display = "";
//     img = document.createElement("img");
//     img.src = ("images/red_arrow.png");
// }


// previousButton.onclick = function(event){
//     event.preventDefault()

// }

arrowtrans.onmouseover = function() {
    arrowtrans.src='images/red_arrow.png';
}
    
arrowtrans.onmouseout = function() {
    arrowtrans.src='images/arrow-back.png';
}
