import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {FlatList} from 'react-native-gesture-handler';
const StyledBackground = styled.SafeAreaView`
  background-color: #e5e5e5;
  align-items: center;
  /* margin-top: 15px; */
  flex: 1;
`;
const StyledNotificationBox = styled.View`
  width: 384px;
  height: 70px;
  background-color: #cecece;
  border-radius: 5px;
  display: flex;
  align-items: space-around;
  justify-content: center;
  margin-top: 15px;
`;
const StyledNotificatonImage = styled.View`
  border: 1px solid #cecece;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  background-color: #fefefe;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
`;
const StyledNotificationText = styled.Text`
  width: 248px;
  height: 65px;
  position: absolute;
  font-family: Faustina-Regular;
  color: #222222;
  text-align: left;
  left: 70px;
  top: 15px;
`;
const StyledNotificationTime = styled.Text`
  position: absolute;
  color: #777777;
  left: 330px;
  /* top: 25px; */
`;
export default function Notification({route, navigation}) {
  const mockData = [
    {
      id: 1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 2,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 3,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 4,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 5,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 6,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 7,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 8,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
    {
      id: 9,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.',
      time: '2 Min',
    },
  ];
  return (
    <StyledBackground>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <StyledNotificationBox>
            <StyledNotificatonImage />
            <StyledNotificationText>{item.text}</StyledNotificationText>
            <StyledNotificationTime>{item.time}</StyledNotificationTime>
          </StyledNotificationBox>
        )}
        numColumns={1}
        keyExtractor={item => item.id}
      />
    </StyledBackground>
  );
}
