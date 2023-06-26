import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RadarMap from './app/screens/RadarMap';
import Home from './app/screens/Home';
import Accounts from './app/screens/Accounts';
import Search from './app/screens/Search';
// import Upload from './app/screens/Upload';
import Friends from './app/screens/Friends';
import SignIn from './app/screens/SignIn';
import SignUp from './app/screens/SignUp';

const Stack = createNativeStackNavigator();

// Function to render all the screens and pages to the actual page

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
        {/* <Stack.Screen name="Upload" component={Upload} options={{headerShown: false}} /> */}
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
        <Stack.Screen name="Friends" component={Friends} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HTMLTest />
  );
}
