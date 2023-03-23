console.log(window.document.getElementsByTagName("span")[0]);
console.dir(window.document.getElementsByTagName("span")[0]);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(document.body.firstElementChild.tagName);
console.log(document.getElementById("first").innerHTML);
console.log(document.getElementById("first").outerHTML);
console.log(document.getElementById("first").data);
console.log(document.getElementById("first").firstElementChild.nodeValue);

console.log(document.body.textContent);
window.document.getElementsByTagName("b")[0].hidden = true;
