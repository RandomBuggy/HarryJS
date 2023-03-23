let user = window.prompt("Enter S, W or G: ");
let index = Math.floor(Math.random()*3);
let cpu = [`S`, `W`, `G`][index];

const match = (user, cpu) => {
    if (user === cpu) {
        return "tie";
    }
    else if (cpu ===`S` && user === `W`) {
        return "cpu";
    }
    else if (cpu === `S` && user === `G`) {
        return "user";
    }
    else if (cpu === `G` && user === `S`) {
        return "cpu";
    }
    else if (cpu === `G` && user === `W`) {
        return "user";
    }
    else if (cpu === `W` && user === `S`) {
        return "user";
    }
    else if (cpu === `W` && user === `G`) {
        return "cpu";
    }
};
let result = match(user, cpu);
window.document.write(`<div>CPU:${cpu} | USER:${user} | RESULT:${result}</div>`);
