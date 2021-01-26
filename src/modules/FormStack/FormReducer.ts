import {FORM_ACTIONS_TYPES} from './FormActions';
import {FormActions, IFormStateType} from './FormTypes';

const initialState: IFormStateType = {
  fields: [],
  isFetchSuccess: null,
};

const reducer = (state: IFormStateType = initialState, action: FormActions) => {
  switch (action.type) {
    case FORM_ACTIONS_TYPES.SET_FIELDS:
      return {...state, fields: action.payload};
    case FORM_ACTIONS_TYPES.SET_FETCH_SUCCESS:
      return {...state, isFetchSuccess: action.payload};
    default:
      return state;
  }
};

export default reducer;
