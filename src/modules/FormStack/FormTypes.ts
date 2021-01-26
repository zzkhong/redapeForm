import {initFields, setFetchSuccess, setFields} from './FormActions';

// Attributes of Form Field from API
export interface IFormFieldType {
  label: string;
  type: string;
  value: string | number;
  default: string | number | boolean;
  isOptional: boolean;
  isHidden: boolean;
}

// Form Reducer State Type
export interface IFormStateType {
  fields: IFormFieldType[];
  isFetchSuccess: boolean | null;
}

// Form Action Type
export type FormActions = ReturnType<
  typeof initFields | typeof setFields | typeof setFetchSuccess
>;
