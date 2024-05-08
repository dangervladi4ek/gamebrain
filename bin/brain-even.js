import { welcomeUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

function isEven(num) {
    return num % 2 === 0;
}

function playBrainEven() {
    welcomeUser();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const minNumber = 1;
    const maxNumber = 100;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        console.log('Congratulations!');
    } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log("Let's try again!");
    }
}

playBrainEven();