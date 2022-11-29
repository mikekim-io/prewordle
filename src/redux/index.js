import { combineReducers } from 'redux';
import guessesReducer from './guesses';
import rowIndexReducer from './rowIndex';
import { solutionReducer } from './solution';

const appReducer = combineReducers({
  guesses: guessesReducer,
  rowIndex: rowIndexReducer,
  solution: solutionReducer,
});

export default appReducer;
