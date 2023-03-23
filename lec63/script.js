// prblm 01
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src);
        };
        document.head.append(script);
    });
};

let url = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";

loadScript(url).then((x) => {
    console.log(new Date().getMilliseconds());
    window.console.log(x);
    console.log(new Date().getMilliseconds());
});

// prblm 02
const f = async () => {
    console.log(new Date().getMilliseconds());
    let resolved = await loadScript(url);
    window.console.log(resolved);
    console.log(new Date().getMilliseconds());
};

f();

// prblm 03

let p = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Not Acceptable"));
        }, 3000);
    });
};

let func = async () => {
    try {
        let rejected = await p();
        console.log(rejected);
    }
    catch(e) {
        console.log(e);
    }
};

// prblm 04

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
};

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
};

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    });
};


const run = async () => {
    console.time("run")
    let a1 = await p1();
    let a2 = await p2();
    let a3 = await p3();
    console.log(a1, a2, a3);
    console.timeEnd("run");
};

const run2 = async () => {
    console.time("run2");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = Promise.all(Array(a1, a2, a3));
    console.log(a1a2a3);
    console.timeEnd("run2");
};
// comparison
run();
run2();
