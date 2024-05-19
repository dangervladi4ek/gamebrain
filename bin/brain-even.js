import generatorNums from '../src/genrannum.js';
import runGameFunc from '../src/gameplay.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = generatorNums(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => {
  runGameFunc(description, getAnswerAndQuestion);
};
brainEven();