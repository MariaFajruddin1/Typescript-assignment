#!/usr/bin/env node
//import package
import chalk from 'chalk';
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
const sleep = () => new Promise((r) => setTimeout(r, 2000));
export function DisplayInfo(customer) {
    console.log(chalk.whiteBright(`${chalk.bgRgb(1, 59, 52)(`Name            : `)} ${customer.name}`));
    console.log(chalk.whiteBright(`${chalk.bgRgb(1, 59, 52)(`Age             : `)} ${customer.age}`));
    console.log(chalk.whiteBright(`${chalk.bgRgb(1, 59, 52)(`Contact Number  : `)} ${customer.contactNumber}`));
    console.log(chalk.whiteBright(`${chalk.bgRgb(1, 59, 52)(`UserID          : `)} ${customer.userId}`));
    console.log(chalk.whiteBright(`${chalk.bgRgb(1, 59, 52)(`Account Balance : `)} RS: ${customer.bankAccount.accountBalance}`));
    console.log(chalk.whiteBright(`${chalk.bgRgb(1, 59, 52)(`Account Number  : `)} ${customer.bankAccount.accountNumber}`));
}
export function ShowAccountBalance(customer) {
    console.log(chalk.whiteBright(`${chalk.yellow(`Account Balance : `)} RS: ${customer.bankAccount.accountBalance}`));
}
export async function Credit(customer) {
    while (true) {
        const { amount } = await inquirer.prompt([{
                name: 'amount',
                message: 'Enter Amount : ',
                type: 'number'
            }]);
        let spinner = createSpinner('Processing').start();
        await sleep();
        if (!amount) {
            spinner.error({ text: chalk.red(` Enter Correct Amount`) });
            continue;
        }
        customer.bankAccount.Credit(amount);
        spinner.success({ text: gradient.rainbow(`${amount > 100 ? 'Transaction Sccessful' : 'Transaction Sccessful And RS:1 Minus'} `) });
        return;
    }
}
export async function Debit(customer) {
    while (true) {
        const { amount } = await inquirer.prompt([{
                name: 'amount',
                message: 'Enter Amount : ',
                type: 'number'
            }]);
        let spinner = createSpinner('Processing').start();
        await sleep();
        if (!amount) {
            spinner.error({ text: chalk.red(` Enter Correct Amount`) });
            continue;
        }
        if (amount > customer.bankAccount.accountBalance) {
            spinner.error({ text: chalk.red(` Amount is Greater than Your Balance`) });
            return;
        }
        customer.bankAccount.Debit(amount);
        spinner.success({ text: gradient.rainbow(`Transaction Successful`) });
        return;
    }
}
export function TransactionHistory(customer) {
    if (!customer.bankAccount.transactionHistory.length) {
        console.log(chalk.red(` No Transaction Available`));
        return;
    }
    console.table(customer.bankAccount.transactionHistory.map((val) => { return { ...val, fee: `RS: ${val.fee}`, amount: `RS: ${val.amount}` }; }));
}
