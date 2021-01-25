import { takeLatest } from 'redux-saga/effects';
import { FORM_ACTIONS_TYPES } from './FormActions';

function* onInitFields() {
  yield console.log('INIT');
}

export default function* mainSaga() {
  yield takeLatest(FORM_ACTIONS_TYPES.INIT_FIELDS, onInitFields);
}
