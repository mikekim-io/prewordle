const SET_GUESSES = 'SET_GUESSES';
const UPDATE_GUESSES = 'UPDATE_GUESSES';

export const setGuesses = (guesses) => ({
  type: SET_GUESSES,
  guesses,
});

export const updateGuesses = (guesses) => ({
  type: UPDATE_GUESSES,
  guesses,
});

const INITIAL_STATE = ['', '', '', '', '', ''];

export default function guessesReducer(guesses = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_GUESSES:
      return [...action.guesses, ...guesses.slice(1)];
    default:
      return guesses;
  }
}
