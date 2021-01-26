import {Typography} from 'common/styles';
import React from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';

// TextInput Variations (match with API)
enum TEXT_INPUT_TYPES {
  EMAIL = 'email',
  PHONE = 'telephone',
}

interface ITextFieldProps {
  label: string;
  onChangeText: ((text: string) => void) | undefined;
  type: string;
  isHidden: boolean;
}

const TextField: React.FC<ITextFieldProps> = ({
  label,
  onChangeText,
  type,
  isHidden,
}) => {
  const getInputType = () => {
    switch (type) {
      case TEXT_INPUT_TYPES.EMAIL:
        return 'email-address';
      case TEXT_INPUT_TYPES.PHONE:
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  return !isHidden ? (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={getInputType()}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={label}
      />
    </View>
  ) : (
    <></>
  );
};

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
    paddingHorizontal: 10,
  },
  hidden: {},
});

export default TextField;
