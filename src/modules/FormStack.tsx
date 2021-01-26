import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './FormStack/FormScreen';

interface IFormRouteProps {}

const Stack = createStackNavigator();

const FormRoutes: React.FC<IFormRouteProps> = () => (
  <Stack.Navigator initialRouteName="Form">
    <Stack.Screen name="Form" component={FormScreen} />
  </Stack.Navigator>
);

export default FormRoutes;
