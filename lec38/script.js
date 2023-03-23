// prblm 01
window.document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// prblm 02
// (raa-source)view-source -> no-tbody
// (live rendering)inspect -> v8-js-engine has already auto-correct this tbody tag and appended the DOM tree

// prblm 03
window.document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
window.document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// prblm 04
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "red";
});

// prblm 05
// MCQ ans: (d) none of them
