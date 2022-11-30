import React, { useState } from 'react';
import Board from './Board';
import VirtualKeyboard from './VirtualKeyboard';
import { connect } from 'react-redux';
import { addLetter, removeLetter } from '../redux/guesses';
import { updateRowIndex } from '../redux/rowIndex';
import {
  checkSolution,
  checkValidLength,
  checkValidWord,
  isCorrect,
  keyEvaluator,
} from './utils/validator';
import NavBar from './NavBar';

export const Game = (props) => {
  const [boardEvaluations, setBoardEvaluations] = useState([]);
  const [keyEvaluations, setKeyEvaluations] = useState({});
  const guess = props.guesses[props.rowIndex];
  const rowIndex = props.rowIndex;

  const handleInput = (key) => {
    const re = /[a-z]/i;
    if (rowIndex < 6) {
      if ((key === 'Backspace' || key === 'Delete') && guess.length > 0) {
        props.removeLetter(rowIndex);
      } else if (re.test(key) && key.length === 1 && guess.length < 5) {
        let letter = key.toLowerCase();
        props.addLetter(letter, rowIndex);
      } else if (key.toLowerCase() === 'enter') {
        handleSubmit();
      }
    }
  };

  // TODO: ADD CASES FOR END GAME STATE
  const handleSubmit = () => {
    const validLength = checkValidLength(guess);
    const validWord = checkValidWord(guess);

    if (!validLength) {
      alert(`Not enough letters`);
    } else if (!validWord) {
      alert('Not in word list');
    } else {
      alert(`Submitting word ${guess}`);
      const rowEvaluation = checkSolution(guess);
      const updatedKeyEvaluations = keyEvaluator(keyEvaluations, guess);

      setBoardEvaluations([...boardEvaluations, rowEvaluation]);
      setKeyEvaluations(updatedKeyEvaluations);

      if (rowEvaluation.every(isCorrect)) {
        alert(`WINNER WINNER`);
        return;
      }

      props.updateRowIndex();

      if (rowIndex === 6) {
        alert('Ran out of guesses; game over');
      }
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <Board boardEvaluations={boardEvaluations} />
      <VirtualKeyboard
        keyEvaluations={keyEvaluations}
        handleInput={handleInput}
      />
    </div>
  );
};

const mapState = (state) => ({
  guesses: state.guesses,
  rowIndex: state.rowIndex,
});

const mapDispatch = (dispatch) => ({
  addLetter: (letter, rowIndex) => dispatch(addLetter(letter, rowIndex)),
  removeLetter: (rowIndex) => dispatch(removeLetter(rowIndex)),
  updateRowIndex: () => dispatch(updateRowIndex()),
});

export default connect(mapState, mapDispatch)(Game);
