import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import styled from 'styled-components';
const Background = styled.ScrollView`
  background-color: #f8f8f8;
  /* flex: 1; */
`;
const HeaderBackground = styled.View`
  background-color: #c12323;
  flex: 1;
`;
const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
`;
const UserName = styled.Text`
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  font-family: Faustina-Medium;
  font-size: 30px;
`;
const SocialBackground = styled.View`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-bottom: 24px;
`;
const Line = styled.View`
  height: 20px;
  border: 0.6px solid #ffffff;
  margin-right: 21px;
  margin-left: 21px;
`;
const SocialText = styled.Text`
  font-size: 16px;
  font-family: Open-Sans;
  color: #ffffff;
`;
const BodyBackground = styled.View`
  background-color: transparent;
  flex: 1.9;
`;
const ExercisesBackground = styled.View``;
const ExercisesTitle = styled.Text`
  font-family: Faustina-Regular;
  color: #222222;
  font-size: 28px;
  margin-top: 20px;
  margin-left: 15px;
`;
const ExercisesList = styled.FlatList``;
const FollowersBackground = styled.View``;
const FollowersTitle = styled.Text`
  font-family: Faustina-Regular;
  color: #222222;
  font-size: 28px;
  margin-top: 20px;
  margin-left: 15px;
`;
const FollowersList = styled.FlatList``;

const StyledWorkoutView = styled.View`
  width: 130px;
  height: 160px;
  margin: 4px;
  background-color: grey;
  border-radius: 5px;
  flex: 1;
`;
const StyledWorkOutItemTitle = styled.Text`
  color: white;
  font-size: 22px;
  top: 100px;
  width: 113px;
  font-family: Faustina-Regular;
  flex: 1;
`;

const FollowerView = styled.View`
  width: 100px;
  height: 146px;
  margin: 10px;
`;
const FollowerImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const FollowerName = styled.Text`
margin:auto;
`
export default function Profile() {
  const workoutMockData = [
    {
      id: 1,
      title: 'Abs Perfection',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 2,
      title: 'Good Cardio',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 3,
      title: 'Arms  Stretching',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 4,
      title: 'Arms  Stretching',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 5,
      title: 'Arms  Stretching',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 6,
      title: 'Arms  Stretching',
      image: require('../../images/workoutMockImage.png'),
    },
  ];
  const mockFollowers = [
    {
      id: 1,
      username: 'User Name',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 2,
      username: 'User Name',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 3,
      username: 'User Name',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 4,
      username: 'User Name',
      image: require('../../images/workoutMockImage.png'),
    },
    {
      id: 5,
      username: 'User Name',
      image: require('../../images/workoutMockImage.png'),
    },
  ];
  return (
    <SafeAreaView>
    <Background>
      <HeaderBackground>
        <UserImage
          source={{
            uri: 'https://cocukgelisimiok2020.digicon.ist/wp-content/themes/cera/assets/images/avatars/user-avatar.png',
          }}
        />
        <UserName>User Name</UserName>
        <SocialBackground>
          <SocialText>5k Followers</SocialText>
          <Line />
          <SocialText>2k Following</SocialText>
        </SocialBackground>
      </HeaderBackground>
      <BodyBackground>
        <ExercisesBackground>
          <ExercisesTitle>My Exercises</ExercisesTitle>
          <ExercisesList
            horizontal
            data={workoutMockData}
            renderItem={({item}) => (
              <StyledWorkoutView>
                <ImageBackground
                  source={item.image}
                  resizeMode="cover"
                  style={{flex: 1}}>
                  <StyledWorkOutItemTitle>{item.title}</StyledWorkOutItemTitle>
                </ImageBackground>
              </StyledWorkoutView>
            )}
          />
        </ExercisesBackground>
        <FollowersBackground>
          <FollowersTitle>Followers</FollowersTitle>
          <FollowersList
            horizontal
            data={mockFollowers}
            renderItem={({item}) => (
              <FollowerView>
                <FollowerImage source={item.image} />
                <FollowerName>{item.username}</FollowerName>
              </FollowerView>
            )}
          />
        </FollowersBackground>
      </BodyBackground>
    </Background></SafeAreaView>
  );
}
