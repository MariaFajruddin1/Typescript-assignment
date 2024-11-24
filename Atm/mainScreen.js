import inquirer from "inquirer";
import CashWithdraw from "./CashWithdraw.js";
import CashDeposit from "./CashDeposit.js";
import Tranfer from "./Transfer.js";
import Utility from "./UtilityBill.js";
import chalk from "chalk";
import gradient from "gradient-string";
async function anotherTransaction() {
    const OTrans = await inquirer.prompt([{
            name: "OtherTrans",
            type: "list",
            message: "Do You Want Another Transaction ?",
            choices: ["Yes", "No"]
        }]);
    return OTrans.OtherTrans;
}
async function mainScreen(Balance) {
    do {
        const Option = await inquirer.prompt([{
                name: "Menu",
                type: "list",
                choices: ["Balane Inquriy", "Cash Widthdraw", "Cash Deposit", "Tranfer", "Utility Bill", "Exit"],
                message: "Select Your Transaction Type"
            }]);
        switch (Option.Menu) {
            case "Balane Inquriy":
                console.log(chalk.green(`Your Current Balance is: ${Balance}`));
                break;
            case "Cash Widthdraw":
                await CashWithdraw(Balance);
                console.log(chalk.green(`Your Transaction is Successfull`));
                break;
            case "Cash Deposit":
                Balance = await CashDeposit(Balance);
                console.log(chalk.green(`Your Transaction is Successfull new Balance is ${Balance}`));
                break;
            case "Tranfer":
                Balance = await Tranfer(Balance);
                console.log(chalk.green(`Your Transaction is Successfull new Balance is ${Balance}`));
                break;
            case "Utility Bill":
                Balance = await Utility(Balance);
                console.log(chalk.green(`Your Transaction is Successfull new Balance is ${Balance}`));
                break;
            case "Exit":
                anothertrans = "No";
                break;
        }
        if (Option.Menu !== "Exit") {
            var anothertrans = await anotherTransaction();
        }
        if (anothertrans == "No") {
            console.log(gradient.rainbow("Thanks To Use My ATM Machine "));
        }
    } while (anothertrans != "No");
}
export default mainScreen;
