import inquirer from "inquirer";
const Electric = Math.floor(Math.random() * 1000 + 1);
const Gas = Math.floor(Math.random() * 1000 + 1);
const Phone = Math.floor(Math.random() * 1000 + 1);
async function Utility(Balance) {
    const Input = await inquirer.prompt([{
            name: "BillType",
            type: "list",
            message: "Select Your Bill Type ?",
            choices: ["Electricity", "Gas", "Phone"]
        }]);
    if (Input.BillType == "Electricity") {
        console.log(`${Electric}`);
        Balance -= Electric;
    }
    else if (Input.BillType == "Gas") {
        console.log(`${Gas}`);
        Balance -= Gas;
    }
    else if (Input.BillType == "Phone") {
        console.log(`${Phone}`);
        Balance -= Phone;
    }
    return Balance;
}
export default Utility;
