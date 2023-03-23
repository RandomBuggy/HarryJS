const f = () => {
try {
    let a = 0;
    console.log(xyz);
    console.log("run successful");
    return;
}
catch(x) {
    console.log("the error");
    console.log(x);
}
finally {
    console.log("finally runs every time");
    // exit the loop
    // close the file
    // write to the log file
}
};

f();
console.log("End");
