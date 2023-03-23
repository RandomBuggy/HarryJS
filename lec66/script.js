let promise = fetch("https://goweather.herokuapp.com/weather/Ny");
promise.then((responce) => {
    // fetch-api returns a Renponse-class object
    console.log(responce.status);
    console.log(responce.ok);
    return responce.json();
    // return responce.text();
}).then((value) => {
    console.log(value);
});

/* request-respince headers */
let url = "https://google.com/";
let opt_obj = {
    headers: {
        "User Agent": `Mozilla/5.0 (Linux; Android 11; RMX2195) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36`
    }
};

let p = fetch(url, opt_obj);

p.then((responce) => {
    console.log(responce.status);
    console.log(responce.ok);
    console.log(responce.headers);
    return responce.text();
}).then((value) => {
    console.log(value);
});
