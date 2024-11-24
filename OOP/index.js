#! /usr/bin/env node 
//import file
import { Student } from "./student.js";
import { Person } from "./person.js";
//import packages
import * as inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
//main heading
console.log(gradient.rainbow(figlet.textSync("Welcome to OOP")));
//let's start
function isNumber(str) {
    const mayBeNum = parseInt(str);
    const isNum = !isNaN(mayBeNum);
    return isNum;
}
let studentName;
function inputPersonality() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num", message: chalk.blue("Type '1' if you like to talk to others and type '2' if you would rather keep to yourself:") })
        .then(answer => {
        if (answer["num"] !== "") {
            const isNum = isNumber(answer["num"]);
            if (isNum) {
                const Myperson = new Person();
                Myperson.askQuestion(answer["num"]);
                console.log(chalk.greenBright("You are " + Myperson.getPersonality()));
                inputName();
            }
            else {
                console.log(chalk.red("Please enter an integer value"));
            }
        }
    });
}
function inputName() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "name", message: "What is your name:" })
        .then(answer => {
        if (answer["name"] !== "") {
            studentName = answer["name"];
            const student1 = new Student();
            student1.Name = studentName;
            console.log(gradient.rainbow(`Your Name is: ${student1.Name} and your personality is ${student1.getPersonality()}`));
        }
        else {
            console.log(chalk.red("Please enter an integer value"));
        }
    });
}
inputPersonality();
