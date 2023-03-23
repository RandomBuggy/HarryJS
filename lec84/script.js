let submitBtn = document.getElementById("submit");
let deleteBtn = document.getElementById("delete");
let todo = document.getElementById("todo");

submitBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    let titleValue = title.value;
    let descValue = desc.value;
    localStorage.setItem("todo", JSON.stringify([titleValue, descValue]));
    let store = localStorage.getItem("todo").replace("\"/g", "").replace("[", "").replace("]", "").split(",");
    todo.innerHTML = `
    <h1>${store[0]}</h1>
    <br>
    <p>${store[1]}</p>
    `;
    title.value = "";
    desc.value = "";
});

deleteBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML = ``;
});

