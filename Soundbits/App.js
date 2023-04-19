import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RadarMap from './app/screens/RadarMap';
import Home from './app/screens/Home';
import Accounts from './app/screens/Accounts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Accounts" component={Accounts} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HTMLTest />
  );
}
