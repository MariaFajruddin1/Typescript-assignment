import inquirer from "inquirer";

async function Tranfer(Balance:number){
    const answer = await inquirer.prompt([{
        name:"accNumber",
        type:"number",
        message:"Enter Account Number..."
    },{
        name:"amount",
        type:"number",
        message:"Enter Your Amount..."
    }])
    Balance -= answer.amount;
    return Balance;
}
export default Tranfer;