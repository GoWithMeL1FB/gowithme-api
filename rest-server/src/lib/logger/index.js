import * as chalk from 'chalk';

export const success = (...logger) => {
  if (process.env.DEBUG === 'TRUE') {
    console.log(chalk.default.white.bgGreen.bold(...logger));
  }
};

export const warning = (...logger) => {
  if (process.env.DEBUG === 'TRUE') {
    console.log(chalk.default.white.bgYellow.bold(...logger));
  }
};

export const error = (...logger) => {
  if (process.env.DEBUG === 'TRUE') {
    console.log(chalk.default.white.bgRed.bold(...logger));
  }
};

export const log = (...logger) => {
  if (process.env.DEBUG === 'TRUE') {
    console.log(chalk.default.white.bdWhite.bold(...logger));
  }
};