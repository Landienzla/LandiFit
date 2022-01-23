import {View, Text,SafeAreaView,ImageBackground} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import styled from 'styled-components';
import Male from '../../images/male.png'
import Female from '../../images/female.png'
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
const StyledGenderText = styled.Text`
position: absolute;
font-family: Faustina-Regular;
font-size: 36px;
color: #000000;
top: 180px;
`
const StyledGenderBox = styled.ImageBackground`
width: 150px;
height: 150px;
border: 1px solid grey;
border-radius: 10px;
`
export default function Genders() {
  return (
    <StyledBackground>
      <StyledLandiFitText>
        <Landi>Landi</Landi>
        <Fit>Fit</Fit>
      </StyledLandiFitText>
      <Line/>
      <StyledGenderText>Gender</StyledGenderText>  
      <StyledGenderBox source={Male} style={{top: 250}}><CheckBox></CheckBox></StyledGenderBox>
      <StyledGenderBox source={Female} style={{top: 270}}/>
    </StyledBackground>
  );
}
