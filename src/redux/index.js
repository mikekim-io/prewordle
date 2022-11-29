import { combineReducers } from 'redux';
import guessesReducer from './guesses';
import rowIndexReducer from './rowIndex';

const appReducer = combineReducers({
  guesses: guessesReducer,
  rowIndex: rowIndexReducer,
});

export default appReducer;
