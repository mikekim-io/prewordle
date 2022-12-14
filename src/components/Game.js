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
import { loadGame, newGame } from '../store';
import Stats from './Stats';
import { updateStats } from '../redux/stats';
import { setLocalStorage } from './utils/tools';
import Help from './Help';

export const Game = (props) => {
  const [boardEvaluations, setBoardEvaluations] = useState([]);
  const [keyEvaluations, setKeyEvaluations] = useState({});
  const [toast, setToast] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  const { setSolution, loadGame } = props;

  const guess = props.guesses[props.rowIndex];
  const rowIndex = props.rowIndex;

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px'
      );
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const localStorageState = localStorage.getItem('rewordle-state');
    if (!localStorageState) {
      setSolution();
      setLocalStorage();
    } else {
      const gameState = JSON.parse(localStorageState);
      loadGame(gameState);
      const localStorageEvaluations = gameState.game.guesses
        .filter((guess) => guess !== '')
        .map((guess) => checkSolution(guess));
      const localStorageKeyEvaluations = {};

      gameState.game.guesses.forEach((guess) =>
        keyEvaluator(localStorageKeyEvaluations, guess)
      );

      setBoardEvaluations([...localStorageEvaluations]);
      setKeyEvaluations({ ...localStorageKeyEvaluations });
    }
    return () => {};
  }, [loadGame, setSolution, setBoardEvaluations, setKeyEvaluations]);

  useEffect(() => {
    checkGameStatus(props.status, [setToast, setShowToast], props.solution);
  }, [props.status, props.solution]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(null);
      setShowToast(false);
    }, 2000);
    return () => clearInterval(interval);
  }, [toast, showToast]);

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

  const handleSubmit = () => {
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
        console.log(boardEvaluations);
        const updatedKeyEvaluations = keyEvaluator(keyEvaluations, guess);
        setBoardEvaluations([...boardEvaluations, rowEvaluation]);
        setKeyEvaluations(updatedKeyEvaluations);

        // END GAME EDGE CASES
        // All letters match, or you've reached your last guess
        if (rowEvaluation.every(isCorrect)) {
          props.updateStatus(STATUS.WIN);
          props.updateStats(STATUS.WIN, rowIndex + 1);
          setLocalStorage();
          setShowStats(true);
          return;
        } else if (rowIndex === 5) {
          props.updateStatus(STATUS.FAIL);
          props.updateStats(STATUS.FAIL);
          setLocalStorage();
          setShowStats(true);
          return;
        }

        props.updateRowIndex();
        setLocalStorage();
      }
    }
  };

  const handleNewGame = () => {
    setBoardEvaluations([]);
    setKeyEvaluations({});
    props.newGame();
    props.setSolution();
    setLocalStorage();
  };

  return (
    <div className="flex flex-col justify-between h-screen select-none">
      <NavBar
        handleNewGame={handleNewGame}
        setShowStats={setShowStats}
        setShowHelp={setShowHelp}
      />
      <Board boardEvaluations={boardEvaluations} />
      <VirtualKeyboard
        keyEvaluations={keyEvaluations}
        handleInput={handleInput}
      />
      <Toast toast={toast} showToast={showToast} />
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />
      <Stats showStats={showStats} setShowStats={setShowStats} />
    </div>
  );
};

const mapState = (state) => ({
  state: state,
  guesses: state.game.guesses,
  rowIndex: state.game.rowIndex,
  status: state.game.status,
  solution: state.game.solution,
});

const mapDispatch = (dispatch) => ({
  setSolution: () => dispatch(setSolution()),
  addLetter: (letter, rowIndex) => dispatch(addLetter(letter, rowIndex)),
  removeLetter: (rowIndex) => dispatch(removeLetter(rowIndex)),
  updateRowIndex: () => dispatch(updateRowIndex()),
  updateStatus: (status) => dispatch(updateStatus(status)),
  updateStats: (status, rowIndex) => dispatch(updateStats(status, rowIndex)),
  newGame: () => dispatch(newGame()),
  loadGame: (state) => dispatch(loadGame(state)),
});

export default connect(mapState, mapDispatch)(Game);
