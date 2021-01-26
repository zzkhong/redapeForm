import {Colors} from 'common/styles';
import {initFields} from 'modules/FormStack/FormActions';
import {IFormFieldType} from 'modules/FormStack/FormTypes';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import RadioField from 'ui/RadioField';
import SelectField from 'ui/SelectField';
import TextField from 'ui/TextField';

interface IFormInputProps {
  isFetched: boolean | null;
  fields: IFormFieldType[];
}

const FormInput: React.FC<IFormInputProps> = ({isFetched, fields}) => {
  const dispatch = useDispatch();

  const handleReloadPress = React.useCallback(() => {
    dispatch(initFields());
  }, []);

  const renderForm = () => {
    if (fields.length) {
      return (
        <>
          {fields.map((field) => {
            switch (field.type) {
              case 'email':
                return <TextField label={field.label} />;
              case 'telephone':
                return <TextField label={field.label} />;
              case 'radio':
                return <RadioField label={field.label} value={field.value} />;
              case 'select':
                return <SelectField label={field.label} value={field.value} />;
              case 'hidden':
                return <TextField />;
              default:
                return <></>;
            }
          })}
        </>
      );
    }
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.description}>
          Failed to load form, please try again
        </Text>
        <TouchableOpacity onPress={handleReloadPress}>
          <Text style={styles.link}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return isFetched === null ? (
    <View style={[styles.container, styles.center]}>
      <ActivityIndicator size="large" color={Colors.black} />
    </View>
  ) : (
    renderForm()
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginVertical: 10,
    textAlign: 'center',
  },
  link: {
    color: Colors.blue,
    textDecorationLine: 'underline',
  },
});

export default FormInput;
