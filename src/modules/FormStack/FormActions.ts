import { FormFieldType } from './FormTypes';

export enum FORM_ACTIONS_TYPES {
  SET_FIELDS = 'FORM/SET_FIELDS',
}

export const setFields = (fields: FormFieldType[]) => ({
  type: FORM_ACTIONS_TYPES.SET_FIELDS,
  fields,
});
