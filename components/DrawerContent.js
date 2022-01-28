import {View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
// import Splash1 from '.././src/Screen/SplashScreen/Splash1';
import {createDrawerNavigator} from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
export default function DrawerContent(props, {navigation}) {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Splash1')}>
        <Text>Splash1</Text>
      </TouchableOpacity>
      <DrawerItemList {...props} />
      {/* <Drawer.Screen name="Splash1" component={Splash1} /> */}
    </DrawerContentScrollView>
  );
}
