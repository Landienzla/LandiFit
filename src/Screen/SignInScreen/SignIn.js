import {View, Text, ImageBackground,TextInput } from 'react-native';
import React from 'react';
import styled from 'styled-components';
const StyledBackground = styled.View`
  background-color: #f8f8f8;
  flex: 1;
`;
const StyledLandiFitText = styled.Text`
  top: 100px;
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
  top: 170px;
  left: 250px;
`;
const StyledWelcomeText = styled.Text`
color: black;
font-size: 36px;
font-family: Faustina-Medium;
top: 250px;
left: 128px;
position: absolute;
letter-spacing: 2px;
`
const StyledSignInText = styled.Text`
color: #777777;
font-size: 24px;
font-family: Faustina-Medium;
top: 300px;
left: 80px;
position: absolute;
letter-spacing: 1px;
`
const StyledTextInput = styled.TextInput`
position: absolute;
font-family: Faustina-Medium;
borderBottomWidth: 2px
width: 380px;
height: 48px;
borderColor: #C6C6C6;
color: #777777;
font-size: 20px;
left: 10px;
`
export default function SignIn({navigation}) {
  return (
    <StyledBackground>
      <StyledLandiFitText>
        <Landi>Landi</Landi> <Fit>Fit</Fit>
      </StyledLandiFitText>
      <Line />
      <StyledWelcomeText>Welcome!</StyledWelcomeText>
      <StyledSignInText>Sign into Your Account</StyledSignInText>
      <StyledTextInput placeholder="Email Id*" style={{top: 400}}/>
      <StyledTextInput placeholder="Password*" style={{top: 460}}/>
    </StyledBackground>
  );
}
