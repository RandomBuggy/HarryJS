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

const emergency = () => {
};

const ILU = (error, src) => {
    window.alert("Element Created" + src);
    if (error) {
        emergency();
        return;
    }
    console.log("Event Occured");
};

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", ILU);

// pyramid of doom -> callback hell
// pyramid-of-doom is just a situation of calling callbacks recursively
// pyramid-of-doom solution is `promises`
