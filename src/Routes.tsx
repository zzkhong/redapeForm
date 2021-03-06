import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormRoutes from 'modules/FormStack';

interface IRouteProps {}

const Stack = createStackNavigator();

const Routes: React.FC<IRouteProps> = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="FormRoutes" component={FormRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
