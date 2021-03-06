import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import styled from 'styled-components';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledView = styled.View`
  height: 250px;
`;
const StyledUserImage = styled.Image`
  /* background-color: #777777; */
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 54px;
`;
const StyledUserName = styled.Text`
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  font-family: Faustina-Medium;
  font-size: 30px;
`;
const Line = styled.View`
  width: 250px;
  border: 1px solid #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;
const StyledLogoutButton = styled.TouchableOpacity`
  margin: auto;
  margin-top: 85px;
`;
const StyledLogoutText = styled.Text`
  color: white;
  font-family: Faustina-Medium;
  font-size: 20px;
`;
export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <StyledView>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginRight: 2}}
          onPress={() => props.navigation.navigate('Settings')}>
          <Icon
            // name="md-search-outline"
            // name="settings-outline"
            name="md-settings-outline"
            color={'#ffffff'}
            size={36}
          />
        </TouchableOpacity>
        <StyledUserImage
          source={{
            uri: 'https://cocukgelisimiok2020.digicon.ist/wp-content/themes/cera/assets/images/avatars/user-avatar.png',
          }}></StyledUserImage>
        <StyledUserName onPress={() => props.navigation.navigate('Profile')}>
          User Name
        </StyledUserName>
        <Line />
      </StyledView>
      <DrawerItemList {...props} />
      {/* 
      TODO Update Drawer Items according to figma design
      TODO Logout Button 
      */}
      <StyledLogoutButton
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('Logged Out'));
        }}>
        <StyledLogoutText>Logout</StyledLogoutText>
      </StyledLogoutButton>
    </DrawerContentScrollView>
  );
}
