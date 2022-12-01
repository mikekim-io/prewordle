import { combineReducers } from 'redux';
import guessesReducer from './guesses';
import rowIndexReducer from './rowIndex';
import { solutionReducer } from './solution';
import { statusReducer } from './status';

const appReducer = combineReducers({
  guesses: guessesReducer,
  rowIndex: rowIndexReducer,
  solution: solutionReducer,
  status: statusReducer,
});

export default appReducer;
