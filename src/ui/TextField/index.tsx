import {Typography} from 'common/styles';
import React from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';

interface ITextFieldProps {
  label: string;
}

const TextField: React.FC<ITextFieldProps> = ({label}) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} placeholder={label} />
  </View>
);

const styles = StyleSheet.create({
  row: {
    marginBottom: 5,
  },
  label: {
    ...Typography.labelFont,
    margin: 10,
  },
  input: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default TextField;
