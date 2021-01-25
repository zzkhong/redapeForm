import {typedAction} from 'common/actions';
import {FormFieldType} from './FormTypes';

export enum FORM_ACTIONS_TYPES {
  INIT_FIELDS = 'FORM/INIT_FIELDS',
  SET_FIELDS = 'FORM/SET_FIELDS',
}

export const initFields = () => typedAction(FORM_ACTIONS_TYPES.INIT_FIELDS);

export const setFields = (fields: FormFieldType[]) =>
  typedAction(FORM_ACTIONS_TYPES.SET_FIELDS, fields);
