import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

let reduxMiddleware;

// Metro react-native babel-preset global scope variable
// eslint-disable-next-line no-undef
if (__DEV__) {
  reduxMiddleware = composeWithDevTools(applyMiddleware());
} else {
  reduxMiddleware = applyMiddleware();
}

const store = createStore(reducers, reduxMiddleware);

export default store;
