import {View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styled from 'styled-components';
const StyledBackground = styled.SafeAreaView`
  background-color: #f8f8f8;
  flex: 1;
  align-items: center;
`;
const StyledLandiFitText = styled.Text`
  position: absolute;
  top: 10px;
  left: 80px;
`;
const Landi = styled.Text`
  font-family: Faustina-Regular;
  font-size: 60px;
  color: black;
  letter-spacing: 4px;
  position: absolute;
`;
const Fit = styled.Text`
  font-family: Faustina-Regular;
  font-size: 60px;
  color: red;
  letter-spacing: 4px;
  position: absolute;
`;
const Line = styled.View`
  background-color: black;
  width: 80px;
  height: 2px;
  position: absolute;
  top: 80px;
  left: 250px;
`;
const StyledTitle = styled.Text`
  position: absolute;
  font-family: Faustina-Medium;
  font-size: 36px;
  color: #000000;
  top: 120px;
  width: 267px;
  text-align: center;
`;
const StyledFocusView = styled.TouchableOpacity`
  width: 384px;
  height: 56px;
  background-color: #f3f3f3;
  position: absolute;
  align-items: flex-start;
  border: 1px solid #cecece;
  border-radius: 5px;
`;
const StyledFocusText = styled.Text`
  color: #777777;
  font-family: Faustina-Regular;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 10px;
`;
const FilledCircle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: red;
  border: 1px solid white;
  left: 360px;
  top: 20px;
  position: absolute;
`;
const EmptyCircle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: white;
  border: 1px solid #cecece;
  left: 360px;
  top: 20px;
  position: absolute;
`;
const StyledButton = styled.TouchableOpacity`
  background-color: #c12323;
  width: 390px;
  height: 60px;
  position: absolute;
  top: 560px;
  border-radius: 5px;
  align-items: center;
`;
const StyledGetStartedText = styled.Text`
  color: #f8f8f8;
  font-family: Faustina-SemiBold;
  font-size: 24px;
  top: 14px;
  letter-spacing: 2px;
`;
export default function Focus({navigation}) {
  const [selectedCategory, setCategory] = useState(0)
  const categoryHandler = e =>{
    const {nativeID} = e._dispatchInstances.pendingProps;
    setCategory(nativeID)
  }
  return (
    <StyledBackground>
      <StyledLandiFitText>
        <Landi>Landi</Landi>
        <Fit>Fit</Fit>
      </StyledLandiFitText>
      <Line />
      <StyledTitle>Let us know how we can help you</StyledTitle>
      <StyledFocusView  nativeID="0" style={{top: 280}}>
        <StyledFocusText>Weight Loss</StyledFocusText>
        <FilledCircle />
      </StyledFocusView>
      <StyledFocusView nativeID="1" style={{top: 350}}>
        <StyledFocusText>Better Sleeping Habit</StyledFocusText>
        <EmptyCircle />
      </StyledFocusView>
      <StyledFocusView nativeID="2" style={{top: 420}}>
        <StyledFocusText>Track My Nutrition</StyledFocusText>
        <EmptyCircle />
      </StyledFocusView>
      <StyledFocusView  nativeID="3" style={{top: 490}}>
        <StyledFocusText>Improve Overall Fitness</StyledFocusText>
        <EmptyCircle />
      </StyledFocusView>
      <StyledButton onPress={() => navigation.navigate('HomeStack')}>
        <StyledGetStartedText>Get Started</StyledGetStartedText>
      </StyledButton>
    </StyledBackground>
  );
}
