import {
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
const StyledBackground = styled.SafeAreaView`
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
`;
const StyledSignInText = styled.Text`
  color: #777777;
  font-size: 24px;
  font-family: Faustina-Medium;
  top: 300px;
  left: 80px;
  position: absolute;
  letter-spacing: 1px;
`;
const StyledTextInput = styled.TextInput`
position: absolute;
font-family: Faustina-Medium;
borderBottomWidth: 2px
width: 380px;
height: 48px;
borderColor: #C6C6C6;
font-size: 20px;
left: 10px;
`;
export default function SignIn({navigation}) {
  const [isKeyboardOn,setKeyboardStatus] = useState(false)

  
  return (
      <StyledBackground>
        <KeyboardAvoidingView style={{flex:1}} behavior='position'>
        <StyledLandiFitText>
          <Landi>Landi</Landi> <Fit>Fit</Fit>
        </StyledLandiFitText>
        <Line />
        <StyledWelcomeText>Welcome!</StyledWelcomeText>
        <StyledSignInText>Sign into Your Account</StyledSignInText>
        <StyledTextInput
          keyboardType={'email-address'}
          clearButtonMode={'always'}
          textContentType={'emailAddress'}
          placeholderTextColor={'#777777'}
          placeholder="Email Id*"
          style={{top: 400}}
        />
        <StyledTextInput
        onPressIn={()=>{
        setKeyboardStatus(true)
        }}
        onPressOut={()=>{
          setKeyboardStatus(false)
        }}
          secureTextEntry={true}
          clearButtonMode={'always'}
          textContentType={'password'}
          placeholderTextColor={'#777777'}
          placeholder="Password*"
          style={{top: 460}}
        /></KeyboardAvoidingView>
      </StyledBackground>
  );
}
