import chalk from "chalk";
import inquirer from "inquirer";

async function OtherAmount(Balance:number){
    const OtherAmt = await inquirer.prompt([{
        name:"otherAmount",
        type:"number",
        message:"Enter Your Amount ?"
    }])
    Balance -= OtherAmt.otherAmount
    return Balance;
} 

async function CashWithdraw(Balance:number){
    const answer = await inquirer.prompt([{
        name:"Amount",
        type:"list",
        choices:["500","1000","2000","5000","10000","Other Amount"],
        message:"Select Your Amount ?"
    }]);
    switch(answer.Amount){
        case "500":
            if(Balance > Number(answer.Amount)){
                Balance -= 500
                console.log(chalk.blue(`Your New Balance is: ${Balance}`));
                break;
            }
            else{
                console.log(chalk.red("You have Insufficient Balance..."));
            }
            
        case "1000":
            if(Balance > answer.Amount){
                Balance -= 1000
                console.log(chalk.blue(`Your New Balance is: ${Balance}`));
                break;
            }
            else{
                console.log(chalk.red("You have Insufficient Balance..."));
            }
        case "2000":
            if(Balance > answer.Amount){
                Balance -= 2000
                console.log(chalk.blue(`Your New Balance is: ${Balance}`));
                break;
            }
            else{
                console.log(chalk.red("You have Insufficient Balance..."));
            }
        case "5000":
            if(Balance > answer.Amount){
                Balance -= 5000
                console.log(chalk.blue(`Your New Balance is: ${Balance}`));
                break;
            }
            else{
                console.log(chalk.red("You have Insufficient Balance..."));
            }
        case "10000":
            if(Balance > answer.Amount){
                Balance -= 10000
                console.log(chalk.blue(`Your New Balance is: ${Balance}`));
                break;
            }
            else{
                console.log(chalk.red("You have Insufficient Balance..."));
            }
            
        case "Other Amount":
            Balance = await OtherAmount(Balance)
            console.log(chalk.blue(`Your New Balance is: ${Balance}`));
            break;
    }
}
export default CashWithdraw;