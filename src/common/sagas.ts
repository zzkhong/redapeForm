import form from 'modules/FormStack/FormSaga';
import { all, fork } from 'redux-saga/effects';

export default function* sagas() {
  yield all([fork(form)]);
}
