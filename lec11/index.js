// old school -> traditional function
function onePlusAvg(p, q) {
    return Math.round(1 + (p+q)/2);
}

// modern -> arrow function

const sum = (a, b) => {
    return a+b;
}
console.log(onePlusAvg(4, 6.7));
console.log(sum(5, 5));
