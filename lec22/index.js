// Guess The Game
// write a javascript programme to generate a random number and stire it in a variable. The programme, then take an 8nput from the user to tell them whether the guess was correct, grster or lesser than the correct number.

// 100 - (no of guesses) is the score of the user, the programme is expected to terminated, once the number is guessed. tye number should be between 1-100.

/*** Solution **/
const guess = Number.parseInt(Math.random()*100);
// console.log(guess);

let number = 0;
let tries = 0;
while (number !== guess) {
    number = Number.parseInt(window.prompt("Enter a number: "));
    if (number > guess) {
        console.log("Entered number is greater");
    }
    else if (number < guess) {
        console.log("Entered number is lesser");
    }
    else if (number === guess) {
        console.log("Correct Guess");
    }
    else {
        console.log("something went wrong");
    }
    tries += 1;
}
console.log(`It took ${tries} guesses to accomplish the task. Your score ${100 - tries}`);
