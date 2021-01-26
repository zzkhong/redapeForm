import React, {ChangeEvent} from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {Colors, Typography} from 'common/styles';

interface IRadioFieldProps {
  label: string;
  value: any;
  onValueChange: (e: string | ChangeEvent<any>) => void;
  isHidden: boolean;
}

const RadioField: React.FC<IRadioFieldProps> = ({
  label,
  value,
  onValueChange,
  isHidden,
}) => {
  const [selected, setSelected] = React.useState<string>(value[0]);

  const handleSelect = React.useCallback(
    (selectedValue) => {
      onValueChange(selectedValue);
      setSelected(selectedValue);
    },
    [selected, setSelected],
  );

  return !isHidden ? (
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
  ) : (
    <></>
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
