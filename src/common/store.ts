import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';

let reduxMiddleware;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Metro react-native babel-preset global scope variable
// eslint-disable-next-line no-undef
if (__DEV__) {
  reduxMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
} else {
  reduxMiddleware = applyMiddleware(sagaMiddleware);
}

const store = createStore(reducers, reduxMiddleware);

// run saga
sagaMiddleware.run(sagas);

export default store;
