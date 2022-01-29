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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import About from './src/Screen/AboutScreen/About';
import Exercises from './src/Screen/ExercisesScreen/Exercises';
import Contact from './src/Screen/ContactScreen/Contact';
import More from './src/Screen/MoreScreen/More';
import DrawerContent from './components/DrawerContent'
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createNativeStackNavigator();
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
      return '';
    case 'Messages':
      return 'Messages';
  }
}
function HomeTabs() {
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
function HomeStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName={'Splash1'}
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
        headerBackgroundContainerStyle: {
          display: 'flex',
        },
      }}>
      <Drawer.Screen
        options={({route}) => ({
           // TODO Update Title's styling => doesn't work well 
          headerTitle: props => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Faustina-Medium',
                  fontSize: 18,
                  letterSpacing: 0.5,
                  color: '#ffffff',
                  marginLeft: -25,
                  marginTop: -3,
                }}>
                {getHeaderTitle(route)}
              </Text>
              <Icon
                name="md-search-outline"
                style={{left: 270}}
                color={'#ffff'}
                size={36}
              />
            </View>
          ),
          swipeEnabled: true,
          headerShown: true,
          drawerLabel: 'Home',
        })}
        name="HomeTabs"
        component={HomeTabs}
      />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Exercises" component={Exercises} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="More" component={More} />
    </Drawer.Navigator>
  );
}
export default function App({route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeStack">
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Genders" component={Genders} />
        <Stack.Screen name="Focus" component={Focus} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
