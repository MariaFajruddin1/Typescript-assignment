import Users from "./Users.js";
import inquirer from "inquirer";
import chalk from "chalk";
import mainScreen from "./mainScreen.js";
import gradient from "gradient-string";

async function Login(){
    const answer = await inquirer.prompt([{
        name:"AccountNumber",
        type:"number",
        message:"Enter Your Account Number?"
    },{
        name:"PinCode",
        type:"password",
        mask:"*",
        message:"Enter Your 4 Digit Pin Code? "
    }]);
    let User = Users.find(x => x.accountNumber == answer.AccountNumber && x.pinCode == answer.PinCode)
    if(typeof User != "undefined"){
         console.log(gradient.rainbow("Welcome to my ATM Machine "));
        mainScreen(User.Balance)  
    }
    else{
        console.log(chalk.red(`You Enter Invalid PIN or Account Number...
        (Hint Acount Number : 1122/2233 or Pin :1234)`));
        
    }
}
export default Login;