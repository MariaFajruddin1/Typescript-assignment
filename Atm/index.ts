#! /usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import Login from './Login.js';

console.log(chalk.yellow(figlet.textSync("My  ATM   Machine  ")));



Login()
