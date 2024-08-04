const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter a number: \n 1.Rock \n 2.Paper \n 3.Scissor \n"));
let x = Math.floor(Math.random() * 3) + 1;

if (a == x) {
    console.log(" Both chose same");
}

else if ((a == 1 && x == 2) || (a == 2 && x == 3) || (a == 3 && x == 1)) {
    console.log("You lose");
}
else {
    console.log("You win");
}