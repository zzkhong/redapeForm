import {typedAction} from 'common/actions';
import {IFormFieldAttribute} from './FormTypes';

export enum FORM_ACTIONS_TYPES {
  INIT_FIELDS = 'FORM/INIT_FIELDS',
  SET_FIELDS = 'FORM/SET_FIELDS',
  SET_FETCH_SUCCESS = 'FORM/SET_FETCH_SUCCESS',
}

export const initFields = () => typedAction(FORM_ACTIONS_TYPES.INIT_FIELDS);

export const setFields = (fields: IFormFieldAttribute[]) =>
  typedAction(FORM_ACTIONS_TYPES.SET_FIELDS, fields);

export const setFetchSuccess = (isFetchSuccess: boolean | null) =>
  typedAction(FORM_ACTIONS_TYPES.SET_FETCH_SUCCESS, isFetchSuccess);
