#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line no-unused-vars
import { greeting, userName } from '../src/cli.js';
// eslint-disable-next-line no-unused-vars
import * as brainGames from './brain-games.js';

const positiveAnswer = 'yes';
const negativeAnswer = 'no';
console.log(`Answer "${positiveAnswer}" if given number is prime. Otherwise answer "${negativeAnswer}".`);
const primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
  79, 83, 89, 97];
let round = 1;
const isPrime = () => {
  const number = Math.floor((Math.random() * 100) + 1);
  let correctAnswer = '';
  if (primeList.includes(number)) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const wrongAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${userName}!`;
  if (userAnswer === correctAnswer && round < 3) {
    console.log('Correct!');
    round += 1;
    isPrime();
  }
  if (userAnswer !== correctAnswer) {
    console.log(wrongAnswer);
  }
};
isPrime();
if (round === 3) {
  console.log(`Correct! Congratulations, ${userName}!`);
}
