import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash1 from './src/Screen/SplashScreen/Splash1';
import Sign from './src/Screen/SignScreen/Sign';
import SignIn from './src/Screen/SignInScreen/SignIn';
import SignUp from './src/Screen/SignUpScreen/SignUp';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
