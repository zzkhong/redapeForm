import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './FormStack/FormScreen';

interface FormRouteProps {}

const Stack = createStackNavigator();

const FormRoutes: React.FC<FormRouteProps> = () => (
  <Stack.Navigator initialRouteName="Form">
    <Stack.Screen name="Form" component={FormScreen} />
  </Stack.Navigator>
);

export default FormRoutes;
