document.body.getElementsByTagName("div")[0].getAttribute("id");
document.body.getElementsByTagName("div")[0].getAttribute("class");

let first = document.body.getElementsByTagName("div")[0];
console.log(first.hasAttribute("hidden"));
console.log(first.hasAttribute("id"));

console.log(first.setAttribute("hidden", true));

document.getElementsByClassName("hey")[0].removeAttribute("id");
console.log(document.getElementsByClassName("hey")[0].attributes);

console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);
