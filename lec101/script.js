let timer = document.getElementById("timer");

setInterval(() => {
    let date = new Date();
    timer.innerHTML = date.toTimeString() + " " + date.toDateString()
}, 1000);

const setAlerm = seconds => {
    setTimeout(() => {
        let path = "";
        let audio = new Audio(path);
        audio.play();
    }, seconds*1000);
};

const seconds = parseInt(window.prompt("How many seconds later do you want Alerm?"));
setAlerm(seconds);
