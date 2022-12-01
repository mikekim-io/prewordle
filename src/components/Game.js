import React, { useEffect, useState } from 'react';
import Board from './Board';
import VirtualKeyboard from './VirtualKeyboard';
import { connect } from 'react-redux';
import { addLetter, removeLetter } from '../redux/guesses';
import { updateRowIndex } from '../redux/rowIndex';
import {
  checkGameStatus,
  checkSolution,
  checkValidLength,
  checkValidWord,
  isCorrect,
  keyEvaluator,
} from './utils/validator';
import NavBar from './NavBar';
import { STATUS, updateStatus } from '../redux/status';
import { setSolution } from '../redux/solution';
import Toast from './Toast';

export const Game = (props) => {
  const [boardEvaluations, setBoardEvaluations] = useState([]);
  const [keyEvaluations, setKeyEvaluations] = useState({});

  const { setSolution } = props;

  useEffect(() => {
    setSolution();
  }, [setSolution]);

  useEffect(() => {
    checkGameStatus(props.status, [setToast, setShowToast]);
  }, [props.status]);

  const [toast, setToast] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(null);
      setShowToast(false);
    }, 2000);
    return () => clearInterval(interval);
  }, [toast, showToast]);

  const guess = props.guesses[props.rowIndex];
  const rowIndex = props.rowIndex;

  const handleInput = (key) => {
    const re = /[a-z]/i;
    if (props.status === STATUS.IN_PROGRESS) {
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

  const handleSubmit = async () => {
    const validLength = checkValidLength(guess);
    const validWord = checkValidWord(guess);

    if (props.status === STATUS.IN_PROGRESS) {
      if (!validLength) {
        setToast('Not enough letters');
        setShowToast(true);
      } else if (!validWord) {
        setToast('Not in word list');
        setShowToast(true);
      } else {
        const rowEvaluation = checkSolution(guess);
        const updatedKeyEvaluations = keyEvaluator(keyEvaluations, guess);

        setBoardEvaluations([...boardEvaluations, rowEvaluation]);
        setKeyEvaluations(updatedKeyEvaluations);

        // END GAME EDGE CASES
        // All letters match, or you've reached your last guess
        if (rowEvaluation.every(isCorrect)) {
          props.updateStatus(STATUS.WIN);
          return;
        } else if (rowIndex === 5) {
          props.updateStatus(STATUS.FAIL);
          return;
        }

        props.updateRowIndex();
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
      <Toast toast={toast} showToast={showToast} />
    </div>
  );
};

const mapState = (state) => ({
  guesses: state.guesses,
  rowIndex: state.rowIndex,
  status: state.status,
  solution: state.solution,
});

const mapDispatch = (dispatch) => ({
  setSolution: () => dispatch(setSolution()),
  addLetter: (letter, rowIndex) => dispatch(addLetter(letter, rowIndex)),
  removeLetter: (rowIndex) => dispatch(removeLetter(rowIndex)),
  updateRowIndex: () => dispatch(updateRowIndex()),
  updateStatus: (status) => dispatch(updateStatus(status)),
});

export default connect(mapState, mapDispatch)(Game);
