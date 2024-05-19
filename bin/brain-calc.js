#!/usr/bin/env node
import generatorNums from '../src/genrannum.js';
import runGameFunc from '../src/gameplay.js';

const description = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const result = (num1, num2, getRandomExample) => {
  let expression = 0;
  switch (getRandomExample) {
    case '+':
      expression = num1 + num2;
      break;
    case '-':
      expression = num1 - num2;
      break;
    case '*':
      expression = num1 * num2;
      break;
    default:
  }
  return expression;
};

const getAnswerAndQuestion = () => {
  const getRandomExample = operator[Math.floor(Math.random() * operator.length)];
  const num1 = generatorNums(1, 10);
  const num2 = generatorNums(1, 10);
  const question = `${num1} ${getRandomExample} ${num2}`;
  const rightAnswer = String(result(num1, num2, getRandomExample));
  return [question, rightAnswer];
};

const brainCalc = () => {
  runGameFunc(description, getAnswerAndQuestion);
};

brainCalc();