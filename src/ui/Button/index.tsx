import {Colors} from 'common/styles';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IButtonProps {
  label: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Button: React.FC<IButtonProps> = ({label, onPress}) => (
  <>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    borderWidth: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  label: {
    color: Colors.white,
  },
});

export default Button;
