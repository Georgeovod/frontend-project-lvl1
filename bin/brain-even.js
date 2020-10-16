#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line no-unused-vars
import { greeting, userName } from '../src/cli.js';
// eslint-disable-next-line no-unused-vars
import * as brainGames from './brain-games.js';

const positveAnswer = 'yes';
const negativeAnswer = 'no';
console.log(`Answer "${positveAnswer}" if the number is even, otherwise answer "${negativeAnswer}".`);
const brainEven = () => {
  let randomNumber = Math.floor((Math.random() * 10) + 1);
  console.log(`Question: ${randomNumber}`);
  let userAnswer = readlineSync.question('Your answer: ');
  let result = 0;
  let playOn = false;
  const checkAnswer = (num, answer) => {
    let correctAnswer = '';
    if (num % 2 === 0) {
      correctAnswer = positveAnswer;
    } else correctAnswer = negativeAnswer;
    const wrongAnswer = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
    if (answer === correctAnswer) {
      console.log('Correct!');
      result += 1;
      playOn = true;
    }
    if (answer !== correctAnswer) {
      console.log(wrongAnswer);
      playOn = false;
    }
  };
  checkAnswer(randomNumber, userAnswer);
  while (playOn === true && result < 3) {
    randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(`Question: ${randomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    checkAnswer(randomNumber, userAnswer);
  }
  if (result === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
brainEven();
export default { brainEven };
