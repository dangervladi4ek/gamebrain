import generatorNums from '../src/genrannum.js';
import runGameFunc from '../src/gameplay.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestion = () => {
  const num = generatorNums(2, 200);
  const question = `${num}`;

  const answerTrue = isPrime(num) ? 'yes' : 'no';

  return [question, answerTrue];
};

const brainPrime = () => {
  runGameFunc(description, getAnswerAndQuestion);
};
brainPrime();