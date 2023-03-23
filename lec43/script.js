let div = document.getElementsByTagName("div")[0];
div.innerHTML = div.innerHTML + "<h1>Hello World</h1>";

let elem = document.createElement("div");
elem.innerHTML = "<h6> newly created </h6>";
div.append(elem);
div.appendChild(elem);
div.prepend(elem);

div.before(elem);
div.after(elem);

div.replaceWith(elem);
