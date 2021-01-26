import {combineReducers} from 'redux';
import form from 'modules/FormStack/FormReducer';
import {IFormStateType} from 'modules/FormStack/FormTypes';

export type RootState = {
  form: IFormStateType;
};

const reducers = combineReducers<RootState>({
  form,
});

export default reducers;
