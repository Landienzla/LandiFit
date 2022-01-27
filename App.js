import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash1 from './src/Screen/SplashScreen/Splash1';
import Sign from './src/Screen/SignScreen/Sign';
import SignIn from './src/Screen/SignInScreen/SignIn';
import SignUp from './src/Screen/SignUpScreen/SignUp';
import Genders from './src/Screen/GendersScreen/Genders';
import Focus from './src/Screen/FocusScreen/Focus';
import Home from './src/Screen/HomeScreen/Home';
import {Button, Text, View,ImageBackground,Image} from 'react-native';
import sideBarImage from './src/images/sideBar.png'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerShown: true,
        // }}
      >
        <Stack.Screen
          options={headerOptions.preventHeader}
          name="Splash1"
          component={Splash1}
        />
        <Stack.Screen
          options={headerOptions.preventHeader}
          name="Sign"
          component={Sign}
        />
        <Stack.Screen
          options={headerOptions.preventHeader}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={headerOptions.preventHeader}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={headerOptions.preventHeader}
          name="Genders"
          component={Genders}
        />
        <Stack.Screen
          options={headerOptions.preventHeader}
          name="Focus"
          component={Focus}
        />
        <Stack.Screen
          options={{
            headerTitle: () => (
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontFamily: 'Faustina-Regular',
                    fontSize: 24,
                    color: 'white',
                    height: 30,
                    textAlign: 'center',
                  }}>
                  Home
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#c12323',
              alignItems: "center"
            },
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const headerOptions = {
  allowHeader: {
    headerShown: true,
  },
  preventHeader: {
    headerShown: false,
  },
};
