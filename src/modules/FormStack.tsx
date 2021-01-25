import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './FormStack/FormScreen';
import FormResultScreen from './FormStack/FormResultScreen';

interface FormRouteProps {}

const Stack = createStackNavigator();

const FormRoutes: React.FC<FormRouteProps> = () => (
  <Stack.Navigator initialRouteName="Form">
    <Stack.Screen name="Form" component={FormScreen} />
    <Stack.Screen name="FormResult" component={FormResultScreen} />
  </Stack.Navigator>
);

export default FormRoutes;
