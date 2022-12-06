import { combineReducers } from 'redux';
import guessesReducer from './guesses';
import rowIndexReducer from './rowIndex';
import { solutionReducer } from './solution';
import { statusReducer } from './status';
import { statsReducer } from './stats';

const gameReducer = combineReducers({
  guesses: guessesReducer,
  rowIndex: rowIndexReducer,
  solution: solutionReducer,
  status: statusReducer,
});

const appReducer = combineReducers({
  game: gameReducer,
  stats: statsReducer,
});

export default appReducer;
