#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
// eslint-disable-next-line no-unused-vars
import { greeting, userName } from '../src/cli.js';
// eslint-disable-next-line no-unused-vars
import * as brainGames from './brain-games.js';

console.log('Find the greatest common divisor of given numbers.');
let firstNumber = Math.floor((Math.random() * 10) + 1);
let secondNumber = Math.floor((Math.random() * 10) + 1);
const brainGcd = () => {
  let acc = 1;
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  let userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = () => {
    while (secondNumber !== 0) {
      const inner = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = inner;
    }
    return firstNumber;
  };
  const wrongAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer()}".\nLet's try again, ${userName}!`;
  while (Number(userAnswer) === correctAnswer() && acc < 3) {
    acc += 1;
    console.log('Correct!');
    firstNumber = Math.floor((Math.random() * 10) + 1);
    secondNumber = Math.floor((Math.random() * 10) + 1);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
  }
  if (acc === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  if (Number(userAnswer) !== correctAnswer()) {
    console.log(`${wrongAnswer}`);
  }
};
brainGcd();
