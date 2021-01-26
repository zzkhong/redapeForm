import {call, put, takeLatest} from 'redux-saga/effects';
import ApiHelper from 'utils/ApiHelper';
import {FORM_ACTIONS_TYPES, setFetchSuccess, setFields} from './FormActions';

function* onInitFields() {
  let result;

  try {
    // Fetch Form Fields
    result = yield call(
      ApiHelper.get,
      'https://ansible-template-engine.herokuapp.com/form',
    );

    // Handle data fetched
    if (result.data) {
      // Set Fields to Reducer State
      yield put(setFields(result.data));

      // Set Fetch Flag to Success
      yield put(setFetchSuccess(true));
    }
  } catch (error) {
    yield put(setFetchSuccess(false));
  }
}

export default function* mainSaga() {
  yield takeLatest(FORM_ACTIONS_TYPES.INIT_FIELDS, onInitFields);
}
