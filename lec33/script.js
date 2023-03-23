/*
Property of DOM collectiins (like HTMLCollection, NodeList etc)
    1. read-only
    2. automatically updated the collection if any element has changed
    3. iterstion possible throught for..of loop or for..in loop

siblings:- children of the same parent
*/
window.console.log(window.document.body.firstChild.nextSibling);
window.console.log(window.document.body.childNodes[1].previousSibling);

window.console.log(window.document.body.firstChild.parentNode);
window.console.log(window.document.body.firstChild.parentElement);

window.console.log(window.document.body.firstChild.nextSibling);
