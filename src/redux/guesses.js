const SET_GUESSES = 'SET_GUESSES';
const UPDATE_GUESSES = 'UPDATE_GUESSES';
const ADD_LETTER = 'ADD_LETTER';
const REMOVE_LETTER = 'REMOVE_LETTER';

export const setGuesses = (guesses) => ({
  type: SET_GUESSES,
  guesses,
});

export const updateGuesses = (guesses) => ({
  type: UPDATE_GUESSES,
  guesses,
});

export const addLetter = (letter, rowIndex) => ({
  type: ADD_LETTER,
  letter,
  rowIndex,
});

export const removeLetter = (letter, rowIndex) => ({
  type: ADD_LETTER,
  letter,
  rowIndex,
});
const INITIAL_STATE = ['', '', '', '', '', ''];

export default function guessesReducer(guesses = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_LETTER:
      // current word in board is relative to rowIndex provided
      let currentWord = guesses[action.rowIndex];
      currentWord += action.letter;
      return [
        guesses.slice(0, action.rowIndex),
        currentWord,
        guesses.slice(action.rowIndex + 1, guesses.length),
      ];
    case REMOVE_LETTER:
      // current word in board is relative to rowIndex provided
      let updateWord = guesses[action.rowIndex].slice(
        0,
        guesses[action.rowIndex].length - 1
      );
      return [
        guesses.slice(0, action.rowIndex),
        updateWord,
        guesses.slice(action.rowIndex + 1, guesses.length),
      ];
    default:
      return guesses;
  }
}
