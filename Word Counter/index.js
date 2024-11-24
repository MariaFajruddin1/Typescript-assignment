#! /usr/bin/env node
//1st step import packages
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
//2nd step main heading
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    const heading = chalkAnimation.rainbow(figlet.textSync("My Word Counter"));
    await sleep();
    heading.stop();
}
await Welcome();
//3rd step word counter
console.log(chalk.magenta(`               Welcome to My Word Counter`));
async function Word() {
    let count = true;
    do {
        const answer = await inquirer.prompt([{
                name: "Counter",
                type: "input",
                message: "Enter the Paragraph you want to Convert: "
            }]);
        const wordCount = answer.Counter.split(" ");
        console.log(chalk.green(`Word in Your Paragraph is: ${chalk.red(wordCount.length)}`));
        const letter = answer.Counter.replace(/ /g, "");
        console.log(chalk.green(`Characters in Your Paragraph is: ${chalk.red(letter.length)}`));
        count = await againCount();
    } while (count != false);
    {
        console.log(gradient.rainbow("Thanks to use my Word Counter :)"));
    }
}
Word();
//4th/last step Countinue Question
async function againCount() {
    const again = await inquirer.prompt([{
            name: "PlayAgain",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do You want to more Word Counter ?"
        }]);
    return (again.PlayAgain == "Yes") ? true : false;
    againCount();
}
