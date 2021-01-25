import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from 'modules/FormStack/FormScreen';

interface RouteProps {}

const Stack = createStackNavigator();

const Routes: React.FC<RouteProps> = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Form" component={FormScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
