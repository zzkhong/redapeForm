import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from 'ui/FormInput';
import {initFields} from './FormActions';
import {FormStateType} from './FormTypes';

interface FormProps {}

const FormScreen: React.FC<FormProps> = ({}) => {
  const dispatch = useDispatch();

  const isFetchSuccess = useSelector(
    (state: FormStateType) => state.isFetchSuccess,
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(initFields());
    }, []),
  );

  return (
    <SafeAreaView style={styles.flex}>
      <FormInput isFetched={isFetchSuccess} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default FormScreen;
