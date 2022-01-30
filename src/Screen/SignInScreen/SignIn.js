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
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '1042897422571-lkv2h9s23nnpvcfuvijk6vk3ahj4tasb.apps.googleusercontent.com',
});
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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function FirebaseSignIn() {
    auth().signInWithEmailAndPassword(email, password);
  }
  async function SingUpwithGoogle() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }
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
          onChangeText={text => setEmail(text)}
        />
        <StyledTextInput
          secureTextEntry={true}
          clearButtonMode={'always'}
          textContentType={'password'}
          placeholderTextColor={'#777777'}
          placeholder="Password*"
          style={{top: 340}}
          onChangeText={text => setPassword(text)}
        />
        <StyledForgotPasswordText>Forgot Password?</StyledForgotPasswordText>
        <StyledButton onPress={() => FirebaseSignIn()}>
          <StyledLoginText>LOGIN</StyledLoginText>
        </StyledButton>
        <StyledOrText>OR</StyledOrText>
        <StyledSocialMediaButton
          onPress={() => {
            SingUpwithGoogle()
              .then(() => alert('31'))
              .catch(err => console.error(err));
          }}
          style={{left: 100, backgroundColor: '#dedede'}}>
          <Icon
            name="google"
            color={'#ffffff'}
            size={36}
            style={{marginTop: 5}}
          />
        </StyledSocialMediaButton>
        <StyledSocialMediaButton
          style={{left: 220, backgroundColor: '#00A4F9'}}>
          <Icon
            name="twitter"
            color={'white'}
            size={36}
            style={{marginTop: 5}}
          />
        </StyledSocialMediaButton>
        <StyledSignupText onPress={() => navigation.navigate('SignUp')}>
          Don't have an account?
          <StyledRedSignupText>Signup</StyledRedSignupText>
        </StyledSignupText>
      </KeyboardAvoidingView>
    </StyledBackground>
  );
}
