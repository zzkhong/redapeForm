import { combineReducers } from 'redux';
import form from 'modules/FormStack/FormReducer';
import { FormStateType } from 'modules/FormStack/FormTypes';

type AppState = {
  form: FormStateType;
};

const reducers = combineReducers<AppState>({
  form,
});

export default reducers;
