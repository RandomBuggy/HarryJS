/*
callback function's reference/pointer -> passed to it's caller function as callee
don't run on nodejs-runtime, window-object not defined here
*/

const loadScript = (url, callback) => {
    let elem = document.createElement("script");
    elem.src = url;
    document.body.append(elem);
    elem.onload = () => {
        callback(null, url);
    }
    elem.onerror = () => {
        callback(new Error("src have some problem"), undefined);
    }
};

const ILU = (src) => {
    window.alert("Element Created" + src);
    console.log("Event Occured");
};

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", ILU);
