const x = (eventObj) => {
    window.alert("Hello World 1");
    console.log(eventObj);
}

const y = (eventObj) => {
    window.alert("Hello World 2");
    console.log(eventObj.target);
    console.log(eventObj.type);
    console.log(`Cursor Co-ordinate:${eventObj.clientX} ${eventObj.clientY}`);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", x);

btn.addEventListener("click", y);

let reply = window.prompt("What is your favourite number?");

if (reply === "1") {
    btn.removeEventListener("click", x);
}
else if (reply === "2") {
    btn.removeEventListener("click", y);
}
