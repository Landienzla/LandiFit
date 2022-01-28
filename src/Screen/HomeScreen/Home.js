import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {LogBox} from 'react-native';
const StyledBackground = styled.SafeAreaView`
  background-color: #f8f8f8;
  flex: 1;
`;
const StyledWorkoutTitle = styled.Text`
  font-size: 28px;
  font-family: Faustina-Regular;
  color: black;
  position: absolute;
  left: 20px;
  margin-top: 10px;
`;
const StyledWorkoutFlatList = styled.FlatList`
  top: 60px;
  position: absolute;
`;
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
const StyledTrainingTitle = styled.Text`
  font-size: 28px;
  font-family: Faustina-Regular;
  color: black;
  position: absolute;
  left: 20px;
  margin-top: 10px;
  top: 230px;
`;
const StyledTrainingFlatList = styled.FlatList`
  top: 290px;
  position: relative;
`;
const StyledTrainingView = styled.View`
  width: 182px;
  height: 200px;
  background-color: #cecece;
  margin: 10px;
  border-radius: 5px;
`;
const StyledTrainingImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
const StyledTrainingItemTitle = styled.Text`
  font-family: Faustina-Medium;
  color: black;
  font-size: 18px;
  margin-left: 10px;
`;
const StyledTrainingItemDescription = styled.Text`
  color: #777777;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 15px;
`;
LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
export default function Home({navigation}) {
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
  const trainingMockData = [
    {
      id: 1,
      title: 'Shoulder Press',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 2,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 3,
      title: 'Shoulder Press',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 4,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 5,
      title: 'Shoulder Press',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 6,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 7,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 8,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 9,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
    {
      id: 10,
      title: 'Jogging',
      description: 'Walking is simple, yet powerful exercise for your body',
      image: require('../../images/trainingMockImage.png'),
    },
  ];
  return (
    <ScrollView>
      <StyledBackground>
        <StyledWorkoutTitle>Workout Exercises</StyledWorkoutTitle>
        <StyledWorkoutFlatList
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
        <StyledTrainingTitle>Training Plan</StyledTrainingTitle>
        <StyledTrainingFlatList
          data={trainingMockData}
          scrollEnabled={false}
          renderItem={({item}) => (
            <StyledTrainingView>
              <StyledTrainingImage source={item.image} />
              <StyledTrainingItemTitle>{item.title}</StyledTrainingItemTitle>
              <StyledTrainingItemDescription>
                {item.description}
              </StyledTrainingItemDescription>
            </StyledTrainingView>
          )}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </StyledBackground>
    </ScrollView>
  );
}
