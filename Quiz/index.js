#! /usr/bin/env node  
//1st step import packages
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
// 2nd step main heading
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    const rainbowTitle = chalkAnimation.rainbow(figlet.textSync(`Welcome  My  Quiz`));
    await sleep();
    rainbowTitle.stop();
}
await Welcome();
async function askname() {
    const Name = await inquirer.prompt([{
            name: "nameAsk",
            type: "input",
            message: "Enter your Name ?"
        }]);
}
async function PIAIC() {
    const ask = await inquirer.prompt([{
            name: "PiaicAsk",
            type: "list",
            choices: ["Yes", "No"],
            message: "Are you a student of PIAIC ?"
        }]);
    if (ask.PiaicAsk == "Yes") {
        console.log(gradient.rainbow("Welcome, Let start Quiz"));
    }
    else {
        console.log(gradient.rainbow("Don't worry!, Let's start Quiz"));
    }
}
await askname();
await PIAIC();
let TypeQuizScore = 0;
let JavaQuizScore = 0;
let HTMLQuizScore = 0;
let CSSQuizScore = 0;
//3rd step Quiz
async function Quiz() {
    do {
        const answer = await inquirer.prompt([{
                name: "quizList",
                type: "list",
                choices: ["Html", "Css", "Javascript", "Typescript", "Exit"],
                message: "Select your quiz "
            }]);
        switch (answer.quizList) {
            case "Typescript":
                await TypeScript();
                console.log(gradient.rainbow(`Your Typescript Score is ${TypeQuizScore}`));
                if (TypeQuizScore <= 20) {
                    console.log(chalk.red("Sorry, You Fail !!!"));
                }
                else if (TypeQuizScore <= 40) {
                    console.log(chalk.yellow("Keep it Up"));
                }
                else if (TypeQuizScore <= 60) {
                    console.log(chalk.blue("Much Better"));
                }
                else if (TypeQuizScore <= 80) {
                    console.log(chalk.green("Very Good, keep it up"));
                }
                else if (TypeQuizScore <= 100) {
                    console.log(gradient.rainbow("Excellent you Won !!!"));
                }
                break;
            case "Javascript":
                await JavaScript();
                console.log(gradient.rainbow(`Your Javascript Score is ${JavaQuizScore}`));
                if (JavaQuizScore <= 20) {
                    console.log(chalk.red("Sorry, You Fail !!!"));
                }
                else if (JavaQuizScore <= 40) {
                    console.log(chalk.yellow("Keep it Up"));
                }
                else if (JavaQuizScore <= 60) {
                    console.log(chalk.blue("Much Better"));
                }
                else if (JavaQuizScore <= 80) {
                    console.log(chalk.green("Very Good, keep it up"));
                }
                else if (JavaQuizScore <= 100) {
                    console.log(gradient.rainbow("Excellent you Won !!!"));
                }
                break;
            case "Html":
                await HTML();
                console.log(gradient.rainbow(`Your Html Score is ${HTMLQuizScore}`));
                if (HTMLQuizScore <= 20) {
                    console.log(chalk.red("Sorry, You Fail !!!"));
                }
                else if (HTMLQuizScore <= 40) {
                    console.log(chalk.yellow("Keep it Up"));
                }
                else if (HTMLQuizScore <= 60) {
                    console.log(chalk.blue("Much Better"));
                }
                else if (HTMLQuizScore <= 80) {
                    console.log(chalk.green("Very Good, keep it up"));
                }
                else if (HTMLQuizScore <= 100) {
                    console.log(gradient.rainbow("Excellent you Won !!!"));
                }
                break;
            case "Css":
                await CSS();
                console.log(gradient.rainbow(`Your Css Score is ${CSSQuizScore}`));
                if (CSSQuizScore <= 20) {
                    console.log(chalk.red("Sorry, You Fail !!!"));
                }
                else if (CSSQuizScore <= 40) {
                    console.log(chalk.yellow("Keep it Up"));
                }
                else if (CSSQuizScore <= 60) {
                    console.log(chalk.blue("Much Better"));
                }
                else if (CSSQuizScore <= 80) {
                    console.log(chalk.green("Very Good, keep it up"));
                }
                else if (CSSQuizScore <= 100) {
                    console.log(gradient.rainbow("Excellent you Won !!!"));
                }
                break;
            case "Exit":
                askAgain = "No";
                break;
        }
        if (answer.quizList !== "Exit") {
            var askAgain = await Exit();
        }
        if (askAgain == "No") {
            console.log(gradient.rainbow("Thanks to Play My Quiz"));
        }
    } while (askAgain != "No");
}
await Quiz();
//4th step quizAgain
async function Exit() {
    const again = await inquirer.prompt([{
            name: "quizAgain",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to give a Quiz again ?"
        }]);
    return again.quizAgain;
}
//  JAVASCRIPT Quiz
async function TypeScript() {
    const ans01 = await inquirer.prompt([{
            name: "Q01",
            type: "list",
            choices: ["A.  Array,Object,Boolean", "B.  Boolean,Number,String", "C.  Object,Array,Symbol", "D.  Object,String,Number"],
            message: "What are the three main 'simple types' in TypeScript?"
        }]);
    if (ans01.Q01 == "B.  Boolean,Number,String") {
        console.log(chalk.green("Very Nice"));
        TypeQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: Boolean,Number,String"));
    }
    const ans02 = await inquirer.prompt([{
            name: "Q02",
            type: "list",
            choices: ["A.  Extending", "B.  Improving", "C.  Duplicating", "D.  Idolizing"],
            message: "________ an interface will have the same properties as that interface."
        }]);
    if (ans02.Q02 == "A.  Extending") {
        console.log(chalk.green("Very Nice"));
        TypeQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: Extending"));
    }
    const ans03 = await inquirer.prompt([{
            name: "Q03",
            type: "list",
            choices: ["A.  1", "B.  5", "C.  10", "D.  0"],
            message: "Numeric enums first value is defaulted to what?"
        }]);
    if (ans03.Q03 == "D.  0") {
        console.log(chalk.green("Very Nice"));
        TypeQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: 0"));
    }
    const ans04 = await inquirer.prompt([{
            name: "Q04",
            type: "list",
            choices: ["A.  string", "B.  string | null", "C.  string | undefined", "D.  unknown"],
            message: "What is the type of the parameter: `function ex(param1?: string){}`?"
        }]);
    if (ans04.Q04 == "C.  string | undefined") {
        console.log(chalk.green("Very Nice"));
        TypeQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: string | undefined"));
    }
    const ans05 = await inquirer.prompt([{
            name: "Q05",
            type: "list",
            choices: ["A.  extending", "B.  override", "C.  overload", "D.  inheriting"],
            message: "When a class extends another class and replaces the members of its parent it is called what?"
        }]);
    if (ans05.Q05 == "B.  override") {
        console.log(chalk.green("Very Nice"));
        TypeQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: override"));
    }
}
//  JAVASCRIPT Quiz
async function JavaScript() {
    const ans01 = await inquirer.prompt([{
            name: "Q01",
            type: "list",
            choices: ["A.  <javascript>", "B.  <scripting>", "C.  <script>", "D.  <js>"],
            message: "Inside which HTML element do we put the JavaScript?"
        }]);
    if (ans01.Q01 == "C.  <script>") {
        console.log(chalk.green("Very Nice"));
        JavaQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: <script>"));
    }
    const ans02 = await inquirer.prompt([{
            name: "Q02",
            type: "list",
            choices: ["A.  alert('Hello World')", "B.  msg('Hello World')", "C.  alertBox('Hello World')", "D.  msgBox('Hello World')"],
            message: "How do you write 'Hello World' in an alert box?"
        }]);
    if (ans02.Q02 == "A.  alert('Hello World')") {
        console.log(chalk.green("Very Nice"));
        JavaQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: alert('Hello World')"));
    }
    const ans03 = await inquirer.prompt([{
            name: "Q03",
            type: "list",
            choices: ["A.  if i = 5", "B.  if (i == 5)", "C.  if i == 5 then", "D.  if i = 5 then"],
            message: "How to write an IF statement in JavaScript?"
        }]);
    if (ans03.Q03 == "B.  if (i == 5)") {
        console.log(chalk.green("Very Nice"));
        JavaQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: if (i == 5)"));
    }
    const ans04 = await inquirer.prompt([{
            name: "Q04",
            type: "list",
            choices: ["A.  <!--comment-->", "B.  'comment", "C.  //comment", "D.  //comment//"],
            message: "How can you add a comment in a JavaScript?"
        }]);
    if (ans04.Q04 == "C.  //comment") {
        console.log(chalk.green("Very Nice"));
        JavaQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: //comment"));
    }
    const ans05 = await inquirer.prompt([{
            name: "Q05",
            type: "list",
            choices: ["A.  =", "B.  *", "C.  x", "D.  -"],
            message: "Which operator is used to assign a value to a variable?"
        }]);
    if (ans05.Q05 == "A.  =") {
        console.log(chalk.green("Very Nice"));
        JavaQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: ="));
    }
}
// HTML Quiz
async function HTML() {
    const ans01 = await inquirer.prompt([{
            name: "Q01",
            type: "list",
            choices: ["A.  Hyper Text Markup Language", "B.  Hyper Text Makeup Language",
                "C.  Hyper Tech Markup Language", "D.  None of these"],
            message: "HTML stands for ________."
        }]);
    if (ans01.Q01 == "A.  Hyper Text Markup Language") {
        console.log(chalk.green("Very Nice"));
        HTMLQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: Hyper Text Markup Language"));
    }
    const ans02 = await inquirer.prompt([{
            name: "Q02",
            type: "list",
            choices: ["A.  Brendan Eich", "B.  Sabeer Bhatiya", "C.  Google Inc.", "D.  Tim Berners-Lee"],
            message: "Who was the primary author of HTML?"
        }]);
    if (ans02.Q02 == "D.  Tim Berners-Lee") {
        console.log(chalk.green("Very Nice"));
        HTMLQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: Tim Berners-Lee"));
    }
    const ans03 = await inquirer.prompt([{
            name: "Q03",
            type: "list",
            choices: ["A.  Document object model", "B.  Data object model", "C.  Document Oriented model",
                "D.  Data oriented model"],
            message: "DOM stands for"
        }]);
    if (ans03.Q03 == "A.  Document object model") {
        console.log(chalk.green("Very Nice"));
        HTMLQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: Document Object Model"));
    }
    const ans04 = await inquirer.prompt([{
            name: "Q04",
            type: "list",
            choices: ["A.  <ul>", "B.  <ol>", "C.  <dl>", "D.  <list> "],
            message: "How can you make a bulleted list?"
        }]);
    if (ans04.Q04 == "A.  <ul>") {
        console.log(chalk.green("Very Nice"));
        HTMLQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: <ul>  "));
    }
    const ans05 = await inquirer.prompt([{
            name: "Q05",
            type: "list",
            choices: ["A.  <", "B.  /", "C.  ^", "D.  *"],
            message: "Which character is used to indicate an end tag?"
        }]);
    if (ans05.Q05 == "B.  /") {
        console.log(chalk.green("Very Nice"));
        HTMLQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: /"));
    }
}
//CSS Quiz
async function CSS() {
    const ans01 = await inquirer.prompt([{
            name: "Q01",
            type: "list",
            choices: ["A.  Computer Style Sheets", "B.  Colorful Style Sheets",
                "C.  Cascading Style Sheets", "D.  Creative Style Sheets"],
            message: "What does CSS stand for?."
        }]);
    if (ans01.Q01 == "C.  Cascading Style Sheets") {
        console.log(chalk.green("Very Nice"));
        CSSQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: Cascading Style Sheets"));
    }
    const ans02 = await inquirer.prompt([{
            name: "Q02",
            type: "list",
            choices: ["A.  style", "B.  font", "C.  styles.", "D.  class"],
            message: "Which HTML attribute is used to define inline styles?"
        }]);
    if (ans02.Q02 == "A.  style") {
        console.log(chalk.green("Very Nice"));
        CSSQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: style"));
    }
    const ans03 = await inquirer.prompt([{
            name: "Q03",
            type: "list",
            choices: ["A.  /* comment */", "B.  // comment", "C.  'comment", "D.  // comment //"],
            message: "How do you insert a comment in a CSS file?"
        }]);
    if (ans03.Q03 == "A.  /* comment */") {
        console.log(chalk.green("Very Nice"));
        CSSQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: /* comment */"));
    }
    const ans04 = await inquirer.prompt([{
            name: "Q04",
            type: "list",
            choices: ["A.  font-style", "B.  text-size", "C.  text-style", "D.  font-size"],
            message: "Which CSS property controls the text size?"
        }]);
    if (ans04.Q04 == "D.  font-size") {
        console.log(chalk.green("Very Nice"));
        CSSQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: font-size"));
    }
    const ans05 = await inquirer.prompt([{
            name: "Q05",
            type: "list",
            choices: ["A.  static", "B.  relative", "C.  fixed", "D.  absolute"],
            message: "What is the default value of the position property?"
        }]);
    if (ans05.Q05 == "A.  static") {
        console.log(chalk.green("Very Nice"));
        CSSQuizScore += 20;
    }
    else {
        console.log(chalk.red("Correct Answer is: static"));
    }
}
