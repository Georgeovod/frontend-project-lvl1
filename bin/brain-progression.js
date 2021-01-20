#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line no-unused-vars
import { greeting, userName } from '../src/cli.js';
// eslint-disable-next-line no-unused-vars
import * as brainGames from './brain-games.js';

console.log('What number is missing in the progression?');
let round = 1;
const engeen = () => {
  let firstNumber = Math.floor((Math.random() * 10) + 1);
  const step = Math.floor((Math.random() * 10) + 1);
  const counter = Math.floor(Math.random() * (10 - 5)) + 5;
  const firstColl = [];
  let secondColl = '';
  let correctAnswer = '';
  const brainProgression = () => {
    firstColl.push(firstNumber);
    for (let i = 1; i < counter; i += 1) {
      firstColl.push(firstNumber + step);
      firstNumber += step;
    }
    const index = Math.floor(Math.random() * firstColl.length) + 0;
    correctAnswer += firstColl[index];
    for (let i = 0; i < firstColl.length; i += 1) {
      if (i !== index) {
        secondColl += ` ${firstColl[i]}`;
      }
      if (i === index) {
        secondColl += ' ..';
      }
    }
    console.log(secondColl);
  };
  brainProgression(firstColl);
  const userAnswer = readlineSync.question('Your answer: ');
  const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`;
  const checkAnswer = () => {
    if (correctAnswer === userAnswer && round < 3) {
      console.log('Correct!');
      round += 1;
      engeen();
    }
    if (correctAnswer !== userAnswer) {
      console.log(wrongAnswer);
    }
  };
  checkAnswer(correctAnswer, userAnswer);
};
engeen();
if (round === 3) {
  console.log(`Correct! Congratulations, ${userName}!`);
}
