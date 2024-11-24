import inquirer from "inquirer";
async function CashDeposit(Balance) {
    const amount = await inquirer.prompt([{
            name: "Amt",
            type: "number",
            message: "Enter Your Amount"
        }]);
    Balance += amount.Amt;
    return Balance;
}
export default CashDeposit;
