#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line no-unused-vars
import { greeting, userName } from '../src/cli.js';

console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
let firstNumber = Math.floor(Math.random() * 10) + 1;
let secondNumber = Math.floor(Math.random() * 10) + 1;
let operand = ['*', '+', '-'][Math.floor(Math.random() * 3)];
console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
let userAnswer = readlineSync.question('Your answer: ');
let counter = 0;
let playOn = false;
let result = 0;
const correctAnswer = (a, b, op) => {
  // eslint-disable-next-line default-case
  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
  }
  return result;
};
const checkAnswer = (a, b, op) => {
  const answer = correctAnswer(a, b, op);
  const wrongAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`;
  if (Number(userAnswer) === answer) {
    console.log('Correct!');
    counter += 1;
    playOn = true;
  }
  if (Number(userAnswer) !== answer) {
    console.log(`${wrongAnswer}`);
    playOn = false;
  }
};
checkAnswer(firstNumber, secondNumber, operand);
while (playOn === true && counter < 3) {
  firstNumber = Math.floor(Math.random() * 10) + 1;
  secondNumber = Math.floor(Math.random() * 10) + 1;
  operand = ['*', '+', '-'][Math.floor(Math.random() * 3)];
  console.log(`Question: ${firstNumber} ${operand} ${secondNumber}`);
  userAnswer = readlineSync.question('Your answer: ');
  checkAnswer(firstNumber, secondNumber, operand);
}
if (counter === 3) {
  console.log(`Congratulations, ${userName}!`);
}
