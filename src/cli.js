import readlineSync from 'readline-sync';

const greeting = console.log('Welcome to the Brain Games!');
export { greeting };
const userName = readlineSync.question('May I have your name?');
export { userName };
