import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from '../components/DrawerContent';
import { useDarkTheme } from '../context/theme-context';
// TODO: Typescript setup https://reactnavigation.org/docs/typescript
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens';
import { MainStack } from './MainStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthenticatedRoutes = () => {
  const { theme } = useDarkTheme();

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Home" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function UnauthenticatedRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AuthenticatedRoutes, UnauthenticatedRoutes };
