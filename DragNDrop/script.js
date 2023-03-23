const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (ev) => {
});
imgBox.addEventListener("dragend", (ev) => {
    ev.target.className = "imgBox";
});

for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        ev.target.className += " hold";
        setTimeout(() => {
            ev.target.className = "hide";
        }, 0);
    });
    whiteBox.addEventListener("dragenter", (ev) => {
        ev.target.className += " dashed";
    });
    whiteBox.addEventListener("dragleave", (ev) => {
        ev.target.className = "whiteBox";
    });
    whiteBox.addEventListener("drop", (ev) => {
        ev.target.append(imgBox);
    });
}
