import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RadioField from 'ui/RadioField';
import SelectField from 'ui/SelectField';
import TextField from 'ui/TextField';

interface FormProps {}

const FormScreen: React.FC<FormProps> = ({}) => (
  <SafeAreaView style={styles.flex}>
    <TextField />
    <RadioField />
    <SelectField />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default FormScreen;
