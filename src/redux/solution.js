import words from '../components/utils/words';
import { INITIAL_STATE } from './initialState';

const SET_SOLUTION = 'SET_SOLUTION';

export const setSolution = () => {
  const solution = words[Math.floor(Math.random() * words.length)];

  return {
    type: SET_SOLUTION,
    solution,
  };
};

export const solutionReducer = (solution = INITIAL_STATE.solution, action) => {
  switch (action.type) {
    case SET_SOLUTION:
      return action.solution;
    default:
      return solution;
  }
};
