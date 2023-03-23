let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolveed after 2 sec");
        resolve(1234);
    }, 2000);
});

p1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");}, 2000);
    });
}).then((value) => {
    console.log(value);
    return 2;
}).then((value) => {
    console.log(value);
});

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript"
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            reject(false);
        };
    })
};

let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");

p.then((value) => {
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
