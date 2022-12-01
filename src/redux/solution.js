import words from '../components/utils/words';

const SET_SOLUTION = 'SET_SOLUTION';

export const setSolution = () => {
  const solution = words[Math.floor(Math.random() * words.length)];

  return {
    type: SET_SOLUTION,
    solution,
  };
};

const INITIAL_STATE = '';

export const solutionReducer = (solution = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOLUTION:
      return action.solution;
    default:
      return solution;
  }
};
