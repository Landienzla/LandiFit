import {
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
const StyledBackground = styled.SafeAreaView`
  background-color: #f8f8f8;
  flex: 1;
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
const StyledWelcomeText = styled.Text`
  color: black;
  font-size: 36px;
  font-family: Faustina-Medium;
  top: 130px;
  left: 128px;
  position: absolute;
  letter-spacing: 2px;
`;
const StyledSignInText = styled.Text`
  color: #777777;
  font-size: 24px;
  font-family: Faustina-Medium;
  top: 180px;
  left: 80px;
  position: absolute;
  letter-spacing: 1px;
`;
const StyledTextInput = styled.TextInput`
  position: absolute;
  font-family: Faustina-Medium;
  border-bottom-width: 2px;
  width: 380px;
  height: 48px;
  border-color: #c6c6c6;
  font-size: 20px;
  left: 10px;
`;
const StyledForgotPasswordText = styled.Text`
  position: absolute;
  font-family: Faustina-Regular;
  font-size: 18px;
  top: 390px;
  left: 250px;
`;
const StyledButton = styled.TouchableOpacity`
  background-color: #c12323;
  width: 390px;
  height: 60px;
  position: absolute;
  top: 430px;
  left: 10px;
  border-radius: 5px;
  align-items: center;
`;
const StyledLoginText = styled.Text`
  color: #f8f8f8;
  font-family: Faustina-Regular;
  font-size: 24px;
  top: 14px;
  letter-spacing: 2px;
`;
const StyledOrText = styled.Text`
  position: absolute;
  font-family: Faustina-Medium;
  top: 500px;
  font-size: 23px;
  left: 190px;
`;
const StyledSocialMediaButton = styled.TouchableOpacity`
  width: 90px;
  height: 50px;
  position: absolute;
  top: 550px;
  border-radius: 5px;
  align-items: center;
`;
const StyledSignupText = styled.Text`
  font-family: Faustina-Regular;
  font-size: 18px;
  color: #777777;
  top: 620px;
  left: 80px;
`;
const StyledRedSignupText = styled.Text`
  color: #c12323;
  font-family: Faustina-Medium;
`;
export default function SignIn({navigation}) {
  return (
    <StyledBackground>
      <KeyboardAvoidingView style={{flex: 1}} behavior="position">
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
          style={{top: 280}}
        />
        <StyledTextInput
          secureTextEntry={true}
          clearButtonMode={'always'}
          textContentType={'password'}
          placeholderTextColor={'#777777'}
          placeholder="Password*"
          style={{top: 340}}
        />
        <StyledForgotPasswordText>Forgot Password?</StyledForgotPasswordText>
        <StyledButton>
          <StyledLoginText>LOGIN</StyledLoginText>
        </StyledButton>
        <StyledOrText>OR</StyledOrText>
        <StyledSocialMediaButton
          style={{left: 100, backgroundColor: '#dedede'}}
        />
        <StyledSocialMediaButton
          style={{left: 220, backgroundColor: '#00A4F9'}}
        />
        <StyledSignupText>
          Don't have an account?
          <StyledRedSignupText>Signup</StyledRedSignupText>
        </StyledSignupText>
      </KeyboardAvoidingView>
    </StyledBackground>
  );
}
