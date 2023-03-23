let first = document.getElementById("first")

console.log(first.classList);
first.className = "text-dark";
console.log(first.classList);


first.classList.remove("yellow");
first.classList.add("red");

first.classList.toggle("text-dark");

first.classList.contains("red");
first.classList.contains("xyz");
