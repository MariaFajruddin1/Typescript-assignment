#! /usr/bin/env node
//1st step import
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import colors from 'colors';
//import { createSpinner } from 'nanospinner'
//        //let's start
//2nd step main heading
let games;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const firstHeading = async () => {
    const rainbowTitle = chalkAnimation.rainbow(figlet.textSync(`Guess Number \n`));
    await sleep();
    rainbowTitle.stop();
};
//3rd  step ask a name
async function Name() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Write your name?',
        default() {
            return 'Player Name';
        },
    });
    games = answers.player_name;
}
//last step 
let counter = 0;
const numberOfChances = 5;
let remainingChances = numberOfChances;
let randomNumer = Math.floor(Math.random() * 10) + 1;
function isNumber(str) {
    const mayBeNum = parseInt(str);
    const isNum = !isNaN(mayBeNum);
    return isNum;
}
async function guessANumber() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input",
        name: "num",
        message: "Pick a number between 1 To 10 ?" })
        .then(answer => {
        if (answer["num"] !== "") {
            const isNum = isNumber(answer["num"]);
            if (isNum) {
                counter++;
                let guessedNumber = parseInt(answer["num"]);
                if (guessedNumber === randomNumer) {
                    console.log(colors.rainbow(figlet.textSync(`   Congrats !!`)));
                    console.log(chalk.green.bold(`Correct Answer You Win The Game in ${counter} chance`));
                    console.log('\n');
                    console.log(gradient.rainbow('       Thanks to play With Me !!!'));
                }
                else if (guessedNumber > randomNumer && counter < numberOfChances) {
                    console.log(chalk.yellowBright('Your Guess,' + answer["num"] + ` is too High, and your ${remainingChances} chances are Left`));
                    remainingChances--;
                    guessANumber();
                }
                else if (guessedNumber < randomNumer && counter < numberOfChances) {
                    console.log(chalk.yellowBright('Your Guess,' + answer["num"] + ` is too Low, and your ${remainingChances} chances are Left`));
                    remainingChances--;
                    guessANumber();
                }
                else {
                    console.log(chalk.redBright(figlet.textSync(`   Oops Sorry !! `)));
                    console.log(chalk.redBright.bold(`No turns left. My number was: ${randomNumer}.`));
                }
                // const result: number = Calculator( num1, num2, currentOperator);
                // console.log(`Your Result is ::: ${num1} ${currentOperator} ${num2} = ${result}`)
            }
            else {
                console.log(chalk.blueBright("Invalid Input! Please enter a number between 1 To 10"));
                guessANumber();
            }
        }
    });
}
console.clear();
await firstHeading();
await Name();
console.log(gradient.rainbow('         Ready to Play'));
await guessANumber();
// console.log(chalk.blue('Ready to Play'));
// console.log(chalk.red('Ready to Play'));
// console.log(chalk.green('Ready to Play'));
// console.log(chalk.yellow('Ready to Play'));
// console.log(chalk.magenta('Ready to Play'));
// console.log(chalk.cyan('Ready to Play'));
// console.log(chalk.white('Ready to Play'));
// console.log('\n');
// console.log(chalk.blueBright('Ready to Play'));
// console.log(chalk.blackBright('Ready to Play'));
// console.log(chalk.redBright('Ready to Play'));
// console.log(chalk.greenBright('Ready to Play'));
// console.log(chalk.yellowBright('Ready to Play'));
// console.log(chalk.magentaBright('Ready to Play'));
// console.log(chalk.cyanBright('Ready to Play'));
// console.log(chalk.whiteBright('Ready to Play'));
