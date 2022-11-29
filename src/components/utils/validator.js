import words from './words';
import store from '../../store';

export const checkValidWord = (guess) => words.indexOf(guess) > -1;
export const checkValidLength = (guess) => guess.length === 5;
export const checkSolution = (guess) => {
  const { solution } = store.getState();
  console.log('solution', solution);
  return guess === solution;
};
