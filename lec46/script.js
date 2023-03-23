let timerId = setTimeout(() => {
    window.alert("Inside setTimeout()");
}, 5000);

setTimeout(() => {
window.alert(`${new Date()}`);
}, 7000);

const reply = window.prompt("Stop First Alert!");

if (reply === "y") {
    clearTimeout(timerId);
}

const sum = (a, b) => a+b;

let tId = setTimeout((x, y) => {
    const literal = `<b><i><u>${x}+${y}=${sum(x,y)}</u></i></b>`;
    document.body.innerHTML = literal;
    window.alert(literal);
}, 12000, 50, 50);

let tId2 = setInterval((x) => {
    window.alert(x);
}, 1000, new Date());
clearInterval(tId2)
