import {Colors} from 'common/styles';
import {Formik} from 'formik';
import {initFields} from 'modules/FormStack/FormActions';
import {IFormFieldType} from 'modules/FormStack/FormTypes';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from 'ui/Button';
import RadioField from 'ui/RadioField';
import SelectField from 'ui/SelectField';
import TextField from 'ui/TextField';

interface IFormInputProps {
  isFetched: boolean | null;
  fields: IFormFieldType[];
}

const FormInput: React.FC<IFormInputProps> = ({isFetched, fields}) => {
  const dispatch = useDispatch();

  // Assume that this form will render fields DYNAMICALLY
  // instead of pre-defined fields
  const initialValues = fields.reduce(
    (accumulate, field) => ({
      ...accumulate,
      [field.label || 'Hidden']:
        field.default
        || (Array.isArray(field.value) ? field.value[0] : field.value),
    }),
    {},
  );

  const handleReloadPress = React.useCallback(() => {
    dispatch(initFields());
  }, []);

  const handleShowResult = (values: any) => {
    Alert.alert('Submission', JSON.stringify(values));
  };

  const renderForm = () => {
    if (fields.length) {
      return (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleShowResult}
        >
          {({handleChange, handleSubmit}) => (
            <>
              {/* Render different types of fields based on type attribute */}
              {/* Assume that each label is unique */}
              {/* Currently uses field label attribute as key */}
              {fields.map((field) => {
                switch (field.type) {
                  case 'email':
                  case 'telephone':
                  case 'hidden':
                    return (
                      <TextField
                        key={field.label || ''}
                        type={field.type}
                        onChangeText={handleChange(field.type)}
                        label={field.label}
                      />
                    );
                  case 'radio':
                    return (
                      <RadioField
                        key={field.label}
                        label={field.label}
                        value={field.value}
                        onValueChange={handleChange(field.type)}
                      />
                    );
                  case 'select':
                    return (
                      <SelectField
                        key={field.label}
                        label={field.label}
                        value={field.value}
                        defaultValue={field.default}
                        onValueChange={handleChange(field.type)}
                      />
                    );
                  default:
                    return <></>;
                }
              })}
              <View style={styles.button}>
                <Button onPress={handleSubmit} label="Submit" />
              </View>
            </>
          )}
        </Formik>
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
  button: {
    marginVertical: 20,
  },
});

export default FormInput;
