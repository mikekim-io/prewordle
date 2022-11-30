import words from './words';
import store from '../../store';

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

export const colorEvaluation = (tileEvaluation) => {
  switch (tileEvaluation) {
    case EVALUATION.CORRECT:
      return 'bg-correct text-white';
    case EVALUATION.PRESENT:
      return 'bg-present text-white';
    case EVALUATION.ABSENT:
      return 'bg-absent text-white';
    default:
      return 'border-2 border-gray-300';
  }
};

export const isCorrect = (currentLetter) =>
  currentLetter === EVALUATION.CORRECT;
