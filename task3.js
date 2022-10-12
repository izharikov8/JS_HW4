const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let n = Math.floor(Math.random() * 100);
let tries = 0; 


const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(console.log('Guess a number from 1 to 100: '))
    })
})


p.then(() => {
    return new Promise(function(resolve, reject) {
        rl.on('line', (userInput) => {
            tries++
            if (userInput < n)
                console.log(`Incorrect, you used ${ tries } attempts, please try again, number is bigger!\n`);
                rl.prompt()
            if (userInput > n)
                console.log(`Incorrect, you used ${ tries } attempts, please try again, number is smaller!\n`);
                rl.prompt()
            if (userInput == n)
                rl.close();
        resolve();
        })
    })
}).then(() => {
    rl.on('close', () => {
        console.log(`Congrats! You guessed with ${ tries } attempts!`)
    })
});
