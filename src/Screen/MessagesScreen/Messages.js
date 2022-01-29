import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native-gesture-handler';
const StyledBackground = styled.SafeAreaView`
  background-color: #e5e5e5;
  align-items: center;
  /* margin-top: 15px; */
  flex: 1;
`;
const StyledMessageBox = styled.View`
  width: 384px;
  height: 70px;
  background-color: #cecece;
  border-radius: 5px;
  display: flex;
  align-items: space-around;
  justify-content: center;
  margin-top: 15px;
`;
const StyledUserImage = styled.Image`
  /* border: 1px solid #cecece; */
  border-radius: 30px; 
  width: 50px;
  height: 50px;
  background-color: #fefefe;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
`;
const StyledUserName = styled.Text`
  width: 248px;
  height: 65px;
  position: absolute;
  font-family: Faustina-Medium;
  color: #222222;
  text-align: left;
  left: 70px;
  top: 15px;
`;
const StyledNotificationText = styled.Text`
  width: 215px;
  height: 16px;
  position: absolute;
  font-family: Faustina-Regular;
  font-size: 14px;
  color: #777777;
  text-align: left;
  left: 70px;
  top: 30px;
`;
const StyledNotificationTime = styled.Text`
  position: absolute;
  color: #777777;
  left: 330px;
  /* top: 25px; */
`;
export default function Messages({route, navigation}) {
  const mockData = [
    {
      id: 1,
      name: 'User Name',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 2,
      name: 'User Name',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 3,
      name: 'User Name',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 4,
      name: 'User Name',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 5,
      name: 'User Name',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
  ];
  return (
    <StyledBackground>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <StyledMessageBox>
            <StyledUserImage />
            <StyledUserName>{item.name}</StyledUserName>
            <StyledNotificationText>{item.text}</StyledNotificationText>
            <StyledNotificationTime>{item.time}</StyledNotificationTime>
          </StyledMessageBox>
        )}
        numColumns={1}
        keyExtractor={item => item.id}
      />
    </StyledBackground>
  );
}
