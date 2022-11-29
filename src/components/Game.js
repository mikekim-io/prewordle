import React, { useState } from 'react';
import Board from './Board';
import VirtualKeyboard from './VirtualKeyboard';
import { connect } from 'react-redux';
import { addLetter, removeLetter } from '../redux/guesses';
import { updateRowIndex } from '../redux/rowIndex';

export const Game = (props) => {
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);

  const handleInput = (key) => {
    const re = /[a-z]/i;
    if (props.rowIndex < 6) {
      if ((key === 'Backspace' || key === 'Delete') && guess.length > 0) {
        setGuess((guess) => guess.slice(0, guess.length - 1));
        //send event to redux store
        props.removeLetter(props.rowIndex);
      } else if (key.toLowerCase() === 'enter') {
        handleSubmit();
      } else if (re.test(key) && key.length === 1 && guess.length < 5) {
        setGuess((guess) => (guess += key.toLowerCase()));
        //send event to redux store
        let letter = key.toLowerCase();
        props.addLetter(letter, props.rowIndex);
      }
    }
  };

  const handleSubmit = () => {
    alert(`Submitting word ${guess}`);
    // TODO: Submit new guesses to redux store
    // Update guesses array.
    setGuess('');
    setCount(count + 1);
    // send event to redux store
    // TODO: validator for word length, word existence
    props.updateRowIndex();
  };

  // end state (bug, repeats twice)
  if (count === 6 && props.rowIndex === 6) {
    alert('Ran out of guesses; game over');
  }
  return (
    <>
      <div className="font-sans font-extrabold">{guess}</div>
      <Board />
      <VirtualKeyboard handleInput={handleInput} />
    </>
  );
};

const mapState = (state) => ({
  rowIndex: state.rowIndex,
});

const mapDispatch = (dispatch) => ({
  addLetter: (letter, rowIndex) => dispatch(addLetter(letter, rowIndex)),
  removeLetter: (rowIndex) => dispatch(removeLetter(rowIndex)),
  updateRowIndex: () => dispatch(updateRowIndex()),
});

export default connect(mapState, mapDispatch)(Game);
