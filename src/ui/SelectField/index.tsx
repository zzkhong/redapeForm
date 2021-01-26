import React, {ChangeEvent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Picker from 'react-native-picker-select';
import {Typography} from 'common/styles';

interface ISelectFieldProps {
  label: string;
  value: any;
  defaultValue: any;
  onValueChange: (e: string | ChangeEvent<any>) => void;
  isHidden: boolean;
}

const SelectField: React.FC<ISelectFieldProps> = ({
  label,
  value,
  defaultValue,
  onValueChange,
  isHidden,
}) => {
  const [selected, setSelected] = React.useState<any>(defaultValue);

  const handleValueChange = React.useCallback(
    (selectedValue) => {
      onValueChange(selectedValue);
      setSelected(selectedValue);
    },
    [setSelected, onValueChange],
  );

  return !isHidden ? (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Picker
          style={pickerStyle}
          value={selected}
          onValueChange={handleValueChange}
          placeholder={{}} // disable placeholder
          items={
            value
              ? value.map((selectedValue: string) => ({
                key: selectedValue,
                label: selectedValue,
                value: selectedValue,
              }))
              : []
          }
        />
      </View>
    </>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  label: {
    ...Typography.labelFont,
    margin: 10,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    height: 50,
  },
});

const pickerStyle = {
  inputIOS: {
    height: 50,
    marginHorizontal: 10,
  },
  inputAndroid: {
    height: 50,
  },
};

export default SelectField;
