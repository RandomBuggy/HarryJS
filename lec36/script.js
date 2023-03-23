// change the card title to red
// let card_title = window.document.getElementsByClassName("card-title");
// card_title.style.color = "red"

window.document.getElementById("card-01").style.color = "blue";

window.document.querySelectorAll(".card-title")[0].style.color = "red";
window.document.querySelectorAll(".card-title")[1].style.color = "blue";
window.document.querySelectorAll(".card-title")[2].style.color = "green";

window.document.querySelector(".this").style.color = "cyan";
window.document.querySelector(".this").style.background = "black";

window.console.log(window.document.body.getElementsByTagName("a"));
