import { combineReducers } from 'redux';
import guessesReducer from './guesses';

const appReducer = combineReducers({
  guesses: guessesReducer,
});

export default appReducer;
