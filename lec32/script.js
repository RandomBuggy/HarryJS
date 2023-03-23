// child node --> elements that are direct child to the parent. example:- head, body are child node of html tag(element)
// desendent node --> all nested elements, child-node, their child-node and so on

window.console.log(window.document.body.firstChild); /* this firstChild property (as aspect of OOPS) also count spaces as text-node */
window.console.log(window.document.body.lastChild); 
window.console.log(window.document.body.childNodes);

window.console.log(window.document.body.childNodes[0] === window.document.body.firstChild);
window.console.log(window.document.body.childNodes[window.document.body.childNodes.length - 1] === window.document.body.lastChild);
window.console.log(window.document.body.hasChildNodes());
