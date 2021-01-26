import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {Typography} from 'common/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface IRadioFieldProps {
  label: string;
  value: string[];
}

const RadioField: React.FC<IRadioFieldProps> = ({label, value}) => {
  const [selected, setSelected] = React.useState<string | null>(null);

  const handleSelect = React.useCallback(
    (selectedValue) => {
      setSelected(selectedValue === selected ? null : selectedValue);
    },
    [selected, setSelected],
  );

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      {!!value
        && value.map((selectedValue: string) => (
          <TouchableOpacity
            onPress={() => handleSelect(selectedValue)}
            key={selectedValue}
            style={styles.input}
          >
            <View style={styles.row}>
              <View
                style={[
                  styles.radio,
                  selectedValue === selected && styles.selected,
                ]}
              />
              <Text>{selectedValue}</Text>
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  label: {
    ...Typography.labelFont,
    margin: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    borderWidth: 1,
  },
  selected: {
    backgroundColor: Colors.black,
  },
  input: {
    height: 50,
  },
});

export default RadioField;
