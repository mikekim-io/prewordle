import { configureStore } from '@reduxjs/toolkit';
import appReducer from './redux';
import { createLogger } from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
// import axios from 'axios';

let middleware = [
  // `withExtraArgument` gives us access to axios in our async action creators!
  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
  thunkMiddleware.withExtraArgument({
    // axios
  }),
];

// if (process.browser) {
// We'd like the redux logger to only log messages when it's running in the
// browser, and not when we run the tests from within Mocha.
middleware = [...middleware, createLogger({ collapsed: true })];
// }

/** We wrap the entire redux store in a root reducer with a special
 * action, RESET_STORE. It calls our application's reducer with
 * state = undefined. This will trigger each of our sub-reducers
 * to reset back to their initial state. This will come in
 * handy when we need to reset our redux store in between tests.
 */
const RESET_STORE = 'RESET_STORE';
export const resetStore = () => ({ type: RESET_STORE });
const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
    return appReducer(state, action);
  }
  return appReducer(state, action);
};

// By default, configureStore from Redux Toolkit will:
// Call applyMiddleware with a default list of middleware, including redux-thunk, and some development-only middleware that catch common mistakes like mutating state
// Call composeWithDevTools to set up the Redux DevTools Extension
export default configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
});
