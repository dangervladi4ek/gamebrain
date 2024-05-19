import runGameFunc from '../src/gameplay.js';
import generatorNums from '../src/genrannum.js';

const description = 'What number is missing in the progression?';

const getProgression = (size, startValue, progressionValue) => {
  const arr = [startValue];
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getAnswerAndQuestion = () => {
  const minLengthProgression = 5;
  const sizeOfArray = minLengthProgression + generatorNums(0, 6);
  const missingElement = generatorNums(0, sizeOfArray);
  const startNumber = generatorNums(0, 100);
  const progressionMovement = generatorNums(0, 100);

  const array = getProgression(sizeOfArray, startNumber, progressionMovement);

  const question = array[missingElement].toString();
  array[missingElement] = '..';
  const answer = array.join(' ');

  return [answer, question];
};
const brainProgression = () => {
  runGameFunc(description, getAnswerAndQuestion);
};
brainProgression();