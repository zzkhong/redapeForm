import React from 'react';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import {initFields} from 'modules/FormStack/FormActions';
import {IFormFieldAttribute} from 'modules/FormStack/FormTypes';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from 'common/styles';
import Button from 'ui/Button';
import RadioField from 'ui/RadioField';
import SelectField from 'ui/SelectField';
import TextField from 'ui/TextField';
import formValidationSchema from './validation';

interface IFormInputProps {
  isFetched: boolean | null;
  fields: IFormFieldAttribute[];
}

const FormInput: React.FC<IFormInputProps> = ({isFetched, fields}) => {
  const dispatch = useDispatch();

  // Assume that this form will render fields dynamically
  // instead of pre-defined fields
  const initialValues = fields.reduce(
    (accumulate, field) => ({
      ...accumulate,
      [field.label || field.type]:
        field.default
        || (Array.isArray(field.value) ? field.value[0] : field.value),
    }),
    {},
  );

  const handleReloadPress = React.useCallback(() => {
    dispatch(initFields());
  }, []);

  const handleShowResult = () => {
    // Submission
    formFormik.handleSubmit();

    const {values}: any = formFormik;
    const {errors}: any = formFormik;

    // Compile JSON result
    const result = Object.keys(formFormik.values).map((current) => {
      const isOptional = !!fields.find(
        (field) => field.label === current || field.type === current,
      )?.isOptional;

      const currentValue = values[current];

      return {
        label: current,
        value: currentValue || null,
        isValid:
          // check is field required with isOptional instead of formik
          ((isOptional && !currentValue) || !!currentValue)
          // check if formik errors include the field (Format Check)
          && !errors[current],
      };
    });

    // Pretty Print result on Alert Box
    Alert.alert('Submission', JSON.stringify(result, null, 2));
  };

  // Formik Hook
  const formFormik = useFormik({
    validationSchema: formValidationSchema,
    enableReinitialize: true,
    initialValues,
    onSubmit: () => {},
  });

  const renderForm = () => {
    if (fields.length) {
      return (
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
                    onChangeText={formFormik.handleChange(
                      field.label || field.type,
                    )}
                    label={field.label}
                    isHidden={field.isHidden}
                  />
                );
              case 'radio':
                return (
                  <RadioField
                    key={field.label}
                    label={field.label}
                    value={field.value}
                    onValueChange={formFormik.handleChange(field.label)}
                    isHidden={field.isHidden}
                  />
                );
              case 'select':
                return (
                  <SelectField
                    key={field.label}
                    label={field.label}
                    value={field.value}
                    defaultValue={field.default}
                    onValueChange={formFormik.handleChange(field.label)}
                    isHidden={field.isHidden}
                  />
                );
              default:
                return <></>;
            }
          })}
          <View style={styles.button}>
            <Button onPress={handleShowResult} label="Submit" />
          </View>
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
  button: {
    marginVertical: 20,
  },
});

export default FormInput;
