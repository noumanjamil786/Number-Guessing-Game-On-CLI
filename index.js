#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to the Number Guessing Game");
const answers = await inquirer.prompt([
    {
        type: "input",
        message: "Guess number between 1 to 10:",
        name: "GuessNumber",
    }
]);
if (answers.GuessNumber == randomNumber) {
    console.log("Congratulations!, You have successfully guessed");
}
else {
    console.log("Sorry, You have not guessed correctly");
}
