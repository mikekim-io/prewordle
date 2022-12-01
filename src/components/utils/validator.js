import words from './words';
import store from '../../store';
import { STATUS } from '../../redux/status';

export const EVALUATION = {
  CORRECT: 'correct',
  PRESENT: 'present',
  ABSENT: 'absent',
};

export const checkValidWord = (guess) => words.indexOf(guess) > -1;

export const checkValidLength = (guess) => guess.length === 5;

export const checkSolution = (guess) => {
  const { solution } = store.getState();

  const evaluation = guess.split('').map((l, idx) => {
    if (l === solution[idx]) {
      return EVALUATION.CORRECT;
    } else if (solution.indexOf(l) > -1) {
      return EVALUATION.PRESENT;
    } else {
      return EVALUATION.ABSENT;
    }
  });
  console.log(solution, evaluation);
  return evaluation;
};

export const colorEvaluator = (evaluation, typeEvaluator) => {
  switch (evaluation) {
    case EVALUATION.CORRECT:
      return 'bg-correct text-white';
    case EVALUATION.PRESENT:
      return 'bg-present text-white';
    case EVALUATION.ABSENT:
      return 'bg-absent text-white';
    default:
      if (typeEvaluator === 'tile') {
        return 'border-2 border-gray-300';
      } else if (typeEvaluator === 'key') {
        return 'bg-gray-300';
      }
  }
};

export const keyEvaluator = (keyEvalObj, guess) => {
  const evaluation = checkSolution(guess);
  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    if (letter in keyEvalObj) {
      if (
        keyEvalObj[letter] === EVALUATION.CORRECT ||
        keyEvalObj === EVALUATION.ABSENT
      ) {
        continue;
      } else if (
        keyEvalObj[letter] === EVALUATION.PRESENT &&
        evaluation[i] === EVALUATION.CORRECT
      ) {
        keyEvalObj[letter] = EVALUATION.CORRECT;
      }
    } else {
      keyEvalObj[letter] = evaluation[i];
    }
  }

  return keyEvalObj;
};

export const isCorrect = (currentLetter) =>
  currentLetter === EVALUATION.CORRECT;

export const checkGameStatus = (status, callback) => {
  if (status === STATUS.WIN) {
    callback('WIN');
  } else if (status === STATUS.FAIL) {
    callback('GAME OVER');
  }
};
