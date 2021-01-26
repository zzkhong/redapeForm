import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Typography} from 'common/styles';

interface ISelectFieldProps {
  label: string;
  value: string[];
}

const SelectField: React.FC<ISelectFieldProps> = ({label, value}) => {
  const [selected, setSelected] = React.useState<string | number | undefined>();

  const handleValueChange = React.useCallback(
    (selectedValue) => {
      setSelected(selectedValue);
    },
    [setSelected],
  );

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker selectedValue={selected} onValueChange={handleValueChange}>
          {!!value
            && value.map((selectedValue: string) => (
              <Picker.Item
                key={selectedValue}
                label={selectedValue}
                value={selectedValue}
              />
            ))}
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {},
  label: {
    ...Typography.labelFont,
    margin: 10,
  },
  input: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
  },
});

export default SelectField;
