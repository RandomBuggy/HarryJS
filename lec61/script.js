try {
    console.log(harry);
    throw new Error("Hi, I am an error");
}
catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
