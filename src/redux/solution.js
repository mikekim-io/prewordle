const SET_SOLUTION = 'SET_SOLUTION';

export const setSolution = (solution) => ({
  type: SET_SOLUTION,
  solution,
});

const INITIAL_STATE = 'words';
export const solutionReducer = (solution = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOLUTION:
      return action.solution;
    default:
      return solution;
  }
};
