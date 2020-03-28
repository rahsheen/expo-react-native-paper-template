import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from './Header';
import { Dashboard } from '../screens';
import { Title } from 'react-native-paper';

const Details = () => <Title>Details</Title>;

const Feed = () => <Title>Feed</Title>;

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerTitle: 'DashBoard' }}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerTitle: 'Twitter' }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  );
};
