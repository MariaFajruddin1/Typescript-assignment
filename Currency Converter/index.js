#! /usr/bin/env node
//1st step import packages
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
//2nd step main heading => Welcome  My  Currency Converter
console.log(gradient.fruit(figlet.textSync("My Currency Converter")));
console.log(chalk.yellow(`                         Welcome  To  My  Currency  Converter`));
//3rd step again play question
async function answers() {
    const Cont = await inquirer.prompt([{
            name: "again",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do You want to more Currency Converter ? "
        }]);
    return (Cont.again == "Yes") ? true : false;
    answers();
}
//4th step currency convertion
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.79
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50
    }
};
//5th step currency converter
let play = true;
do {
    const answer = await inquirer.prompt([{
            name: "From",
            type: "list",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your Currency :"
        }, {
            name: "To",
            type: "list",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your Convertion Currency :"
        }, {
            name: "Amount",
            type: "number",
            message: "Enter Your Amount :"
        }]);
    const { From, To, Amount } = answer;
    if (From && To && Amount) {
        let Result = Convertion[From][To] * Amount;
        console.log(chalk.green(`Your Convertion from ${From} to ${To} is ${Result}`));
        play = await answers();
    }
    else {
        console.log(chalk.red("Invalid Input !!"));
        play = await answers();
    }
} while (play != false);
{
    console.log(gradient.fruit("Thanks to use my Currency Converter "));
}
