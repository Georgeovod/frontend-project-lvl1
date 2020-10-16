#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import { greeting, userName } from '../src/cli.js';

const brainGames = (nickName) => {
  console.log(`Hello, ${nickName}!`);
};
brainGames(userName);
export default { brainGames };
