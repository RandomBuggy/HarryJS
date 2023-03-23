 /**
  * prblm 04
  */
let google = document.getElementById("google");
google.addEventListener("click", () => {
    window.location = "https://google.com/";
    window.focus();
});

let fb = document.getElementById("fb");
fb.addEventListener("click", () => {
    window.location = "https://fb.com/";
    window.focus();
});

let twt = document.getElementById("twt");
twt.addEventListener("click", () => {
    window.location = "https://twitter.com/"
    window.focus();
});

const fetchContent = async (url) => {
    let con = await fetch(url);
    let data = await con.json();
    return data;
};

setInterval(async () => {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url));
}, 3000);
// prblm 05
setInterval(() => {
    document.querySelector("#bulb").classList.toggle("bulb");
}, 1000);
