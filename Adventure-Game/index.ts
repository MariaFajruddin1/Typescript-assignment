#! /usr/bin/env node
            //import packages
import { question } from 'readline-sync';
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import chalk from 'chalk';
import gradient from 'gradient-string';

            // Random number
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
            // Game
const enemies: string[] = ["Skeleton", 'Zombie', 'Warrior', 'Assassin'];
const maxEnemyHealth: number = 75;
const enemyAttacDamage: number = 25;

            // Player
let health: number = 100;
const attackDamage: number = 50;
let numHealthPotions: number = 3;
const healthPotoionHealAmount = 30;
const healthPotoionDropChance = 50;

const running: boolean = true;
            //Main heading
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function Welcome() {
    const title: chalkAnimation.Animation = chalkAnimation.rainbow(figlet.textSync("Welcome  to  My  Game")
    );
    await sleep();
    title.stop();
  }
  await Welcome();
            //let's start
while (running) {
    let enemyHealth: number = getRandomInt(maxEnemyHealth);
    let enemy: string = enemies[getRandomInt(enemies.length)];
    console.log(chalk.bgRed(`\t# ${enemy} has Appeared! #\n`));

    while (enemyHealth > 0) {
        console.log(chalk.cyanBright(`\t Your HP: ${health}`));
        console.log(chalk.cyanBright(`\t ${enemy}'s HP: ${enemyHealth}`));
        console.log(chalk.redBright(`\n\tWhat would you like to do ? `));
        console.log(chalk.yellow(`\t1. Attack`));
        console.log(chalk.yellow(`\t2. Drink Health Potion`));
        console.log(chalk.yellow(`\t3. Run!`));

        let input: string = question();

        if (input === '1') {
            let damageDealt: number = getRandomInt(attackDamage);
            let damageTaken: number = getRandomInt(enemyAttacDamage);

            enemyHealth -= damageDealt;
            health -= damageTaken;

            console.log(chalk.blueBright(`\t> You Strike the ${enemy} for ${damageDealt} Damage.`));
            console.log(chalk.redBright(`\t> You Recieve ${damageTaken} in Retaliation!`));

            if (health < 1) {
                console.log(chalk.bgRed('\t> You have taken too much Damage, you are too Weak to go on!'));;
                break;
            }
        }
        else if (input === '2') {
            if (numHealthPotions > 0) {
                health += healthPotoionHealAmount;
                numHealthPotions--;
                console.log(chalk.greenBright(`\t> You drink a Health Potion, healing yourself for ${healthPotoionHealAmount}
                \n\t You now have ${health} HP.
                \n\t You have ${numHealthPotions} Health Potions left.\n`));

            } else {
                console.log(chalk.bgRed('\t> You have no Health Potions Left! Defeat Enemies for a Chance to Get One!'));
            }
        }
        else if (input === '3') {
            console.log(chalk.redBright(`\t You Run Away from the ${enemy}!`));
        }
        else {
            console.log(chalk.redBright('\tInvalid command!'));
        }
    }

    if (health < 1) {
        console.log(chalk.bgRed('\t\You limp out of the Dungeon, you are too Weak from Battal.'));
        break;
    }


    console.log(chalk.greenBright("--------------------------------------------------------------------"));
    console.log(chalk.greenBright(` # ${enemy} was Defeated! #`));
    console.log(chalk.greenBright(` # You have ${health} HP left.`));
    if (getRandomInt(100) > healthPotoionDropChance) {
       numHealthPotions++;
        console.log(chalk.blueBright(` # the ${enemy} Dropped a Health Potion! #`));
       console.log(chalk.blueBright(` # You now have ${numHealthPotions} Health Potion(s). #`));

    }

    console.log(chalk.greenBright("--------------------------------------------------------------------"));
    console.log(chalk.redBright('What would you like to do now?'));
    console.log('1. Continue');
    console.log('2. Exit');

    let input: string = question();
    while (input !== '1' && input !== '2') {
        console.log(chalk.redBright('Invalid Command!'));
        input = question();
    }

    if (input === '1') {
        console.log(chalk.greenBright('You Continue on your Adventure'));

    } else if (input === '2') {
        console.log(chalk.redBright('You Exit the Dungeon, Successful from your Adventures!'));
        break;
    }

}
console.log(gradient.rainbow('Thanks to play'));

