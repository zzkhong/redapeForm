import React from 'react';
import {Text} from 'react-native';
import RadioField from 'ui/RadioField';
import SelectField from 'ui/SelectField';
import TextField from 'ui/TextField';

interface FormInputProps {
  isFetched: boolean | null;
}
const FormInput: React.FC<FormInputProps> = ({isFetched}) => {
  if (isFetched) {
    return (
      <>
        <TextField />
        <RadioField />
        <SelectField />
      </>
    );
  }
  if (isFetched === null) {
    return <></>;
  }
  return <Text>Failed to load form, please try again</Text>;
};

export default FormInput;
