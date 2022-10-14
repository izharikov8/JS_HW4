const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let n = Math.floor(Math.random() * 100);


async function getUserInput() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Guess a number from 1 to 100: ', (input) => {
            let number = input;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return await promise;
}

async function game() {
    let tries = 0;
    while(true) {
        let input = await getUserInput();
        let userNumber = +input
        tries++;
    
        if(userNumber === n) {
            console.log(`Congrats! You guessed with ${ tries } attempts!`);
            break;
        }
    
        if(userNumber > n) {
            console.log(`Incorrect, you used ${ tries } attempts, please try again, number is smaller!\n`);
        } 
        if(userNumber < n) {
            console.log(`Incorrect, you used ${ tries } attempts, please try again, number is bigger!\n`);
        }
    }
    rl.close();
}

game();
