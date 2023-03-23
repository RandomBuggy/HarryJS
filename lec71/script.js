// prblm 01
let url = "https://kontests.net/api/v1/all";

let promise = fetch(url);
promise.then((responce) => {
    return responce.json();
}).then((contests) => {
    ihtml = "";
    for (item in contests) {
        console.log(contests[item].name);
        ihtml += `
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${contests[item].name}</h5>
    <p class="card-text">Starts At: ${contests[item].start_time}</p>
    <p class="card-text">Ends At: ${contests[item].end_time}</p>
    <a href="${contests[item].url}" class="btn btn-primary">Go To ${contests[item].name}</a>
        `;
    }
    cardContainer.innerHTML = ihtml;
});

// prblm 03
let n = localStorage.getItem("note");
window.alert("your note is "+n);
// prblm 02
let a = prompt("Enter your note");
if (a) {
    localStorage.setItem("note", a);
}
let c = window.confirm("you want to delete your note?");

// prblm 04
if (c) {
    localStorage.removeItem("note");
}
