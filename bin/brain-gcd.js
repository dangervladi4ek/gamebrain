import generatorNums from '../src/genrannum.js';
import runGameFunc from '../src/gameplay.js';

const description = 'Find the greatest common divisor of given numbers.';

const getAnswerAndQuestion = () => {
  const num1 = generatorNums() + 1;
  const num2 = generatorNums() + 1;
  const question = `${num1} ${num2}`;
  let rightAnswer = '';
  for (let i = Math.min(num1, num2); i >= 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      rightAnswer = String(i);
      break;
    }
  }
  return [question, rightAnswer];
};

const brainGcd = () => {
  runGameFunc(description, getAnswerAndQuestion);
};
brainGcd();