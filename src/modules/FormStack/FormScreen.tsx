import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from 'ui/FormInput';
import {RootState} from 'common/reducers';
import {Colors} from 'common/styles';
import {initFields} from './FormActions';

interface IFormProps {}

const FormScreen: React.FC<IFormProps> = ({}) => {
  const dispatch = useDispatch();

  const {isFetchSuccess, fields} = useSelector(
    (state: RootState) => state.form,
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(initFields());
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={[styles.contentContainer]}>
        <FormInput isFetched={isFetchSuccess} fields={fields} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default FormScreen;
