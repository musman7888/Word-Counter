#! /usr/bin/env node
import inquirer from "inquirer";
// take input from user
const userInput = await inquirer.prompt([
    { message: "Please enter paragraph: ",
        type: "input",
        name: "paragraph"
    }
]);
// count the number of word/characters without white spaces
let wordsArr = userInput.paragraph.trim().split(" ");
let charArr = userInput.paragraph.trim().replaceAll(" ", "");
console.log(`Your entered paragraph has following:
Number of Words      : ${wordsArr.length}
Number of Characters : ${charArr.length}`);
