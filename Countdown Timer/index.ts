#! /usr/bin/env node 
             //IMPORT PACKAGES
//import inquirer from "inquirer";
//import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
//import chalkAnimation from 'chalk-animation';
                

                // Set the date we're counting down to   //'IT'S MY BIRTHDAY DATE'
let countDownDate:number = new Date("November 12, 2023 12:00:00").getTime();

                // Update the count down every 1 second
const CountDownTimer:NodeJS.Timer = setInterval(function():void {

    let now:number = new Date().getTime();

    let distance: number = countDownDate - now;

    let days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    const displayCountDown:string = (gradient.rainbow(figlet.textSync(days + "D  " + hours + "H  " + minutes + "M  " + seconds + "S  ")));
    console.clear()
    console.log(displayCountDown)

    if (distance < 0) {
        clearInterval(CountDownTimer);
    }
}, 1000);


CountDownTimer


