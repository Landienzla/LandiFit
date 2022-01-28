import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import Splash1 from './src/Screen/SplashScreen/Splash1';
import Sign from './src/Screen/SignScreen/Sign';
import SignIn from './src/Screen/SignInScreen/SignIn';
import SignUp from './src/Screen/SignUpScreen/SignUp';
import Genders from './src/Screen/GendersScreen/Genders';
import Focus from './src/Screen/FocusScreen/Focus';
import Home from './src/Screen/HomeScreen/Home';
import Notification from './src/Screen/NotificationsScreen/Notification';
import Profile from './src/Screen/ProfileScreen/Profile';
import Messages from './src/Screen/MessagesScreen/Messages';
import {Button, Text, View, ImageBackground, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Notification':
      return 'Notifications';
    case 'Profile':
      return 'Profile';
    case 'Messages':
      return "Messages"
  }
}
export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#c12323',
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications-outline" color={color} size={size} />
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="chatbubble-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Messages"
        component={Messages}
      />
    </Tab.Navigator>
  );
}
export default function App({route}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // drawerContent={props => <DrawerContent {...props} />}
        initialRouteName={'Home'}
        screenOptions={{
          drawerInactiveBackgroundColor: '#FFFFFF',
          drawerActiveTintColor: '#000',
          drawerLabelStyle: {
            fontFamily: 'Faustina-Medium',
            fontSize: 18,
            marginLeft: 10,
          },
          drawerActiveBackgroundColor: '#FFFFFF',
          drawerStyle: {
            backgroundColor: '#c12323',
          },
          headerStyle: {
            backgroundColor: '#c12323',
          },
          headerTitleStyle: {
            color: '#FFFFFF',
            fontFamily: 'Faustina-Medium',
            textAlign: 'center',
          },
        }}>
        <Drawer.Screen
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            swipeEnabled: true,
            headerShown: true,
          })}
          name="HomeTabs"
          component={HomeTabs}
        />
        <Drawer.Screen
          options={screenOptions.prevent}
          name="Splash1"
          component={Splash1}
        />
        <Drawer.Screen
          options={screenOptions.prevent}
          name="Sign"
          component={Sign}
        />
        <Drawer.Screen
          options={screenOptions.prevent}
          name="SignIn"
          component={SignIn}
        />
        <Drawer.Screen
          options={screenOptions.prevent}
          name="SignUp"
          component={SignUp}
        />
        <Drawer.Screen
          options={screenOptions.prevent}
          name="Genders"
          component={Genders}
        />
        <Drawer.Screen
          options={screenOptions.prevent}
          name="Focus"
          component={Focus}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const screenOptions = {
  prevent: {
    swipeEnabled: false,
    headerShown: false,
  },
  allow: {
    swipeEnabled: true,
    headerShown: true,
  },
};
