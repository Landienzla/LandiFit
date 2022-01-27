import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash1 from './src/Screen/SplashScreen/Splash1';
import Sign from './src/Screen/SignScreen/Sign';
import SignIn from './src/Screen/SignInScreen/SignIn';
import SignUp from './src/Screen/SignUpScreen/SignUp';
import Genders from './src/Screen/GendersScreen/Genders';
import Focus from './src/Screen/FocusScreen/Focus';
import Home from './src/Screen/HomeScreen/Home';
import {Button, Text, View, ImageBackground, Image} from 'react-native';
import sideBarImage from './src/images/sideBar.png';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function DrawNav() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerInactiveBackgroundColor:"#FFFFFF",
      drawerActiveTintColor: "#000",
      drawerActiveBackgroundColor: "#FFFFFF",
      drawerStyle:{
        backgroundColor: "#c12323"
      },
      headerStyle:{
        backgroundColor: "#c12323",
      },
      headerTitleStyle:{
        color:"#FFFFFF",
        fontFamily: "Faustina-Medium",
        textAlign: "center"
      },

    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={Splash1}/>
      <Drawer.Screen name="Exercises" component={Sign}/>
      <Drawer.Screen name="Contact" component={SignIn}/>
      <Drawer.Screen name="More" component={SignUp}/>
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawNav"
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
        options={headerOptions.preventHeader}
          name="DrawNav"
          component={DrawNav}
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
