import { playGame, getRandom } from '../core.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 300;

const isEven = (number) => number % 2 === 0;

const run = () => {
  const getGameData = () => {
    const question = getRandom(minNumber, maxNumber);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  playGame(gameDescription, getGameData);
};

export default run;
