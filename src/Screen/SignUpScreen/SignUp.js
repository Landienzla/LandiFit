import {
  View,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
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
const StyledCreateAccountText = styled.Text`
  color: #777777;
  font-size: 24px;
  font-family: Faustina-Medium;
  top: 160px;
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
const StyledCheckBoxView = styled.View`
  top: 388px;
`;
const StyledReadAgreeText = styled.Text`
  position: absolute;
  font-family: Faustina-Regular;
  font-size: 18px;
  top: 392px;
  left: 30px;
`;
const StyledTermsText = styled.Text`
  color: #2264af;
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
  position: absolute;
`;
const StyledRedSignupText = styled.Text`
  color: #c12323;
  font-family: Faustina-Medium;
`;
function CreateUser(userName, mail, photoURL) {
  firestore()
    .collection('Users')
    .where('email', 'in', [mail])
    .get()
    .then(resp => {
      if (resp.exists) {
        alert('user exists');
      } else {
        firestore()
          .collection('Users')
          .add({
            userName: userName,
            email: mail,
            photoURL: photoURL,
          })
          .then(() => {
            navigation.navigate('Genders');
          });
      }
    })
    .catch(err => console.log(err));
}
export default function SignUp({navigation}) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function FirebaseSignUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        CreateUser(userName, email, password);
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (err.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(err);
      });
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
        <StyledCreateAccountText>Create Your Account</StyledCreateAccountText>
        <StyledTextInput
          keyboardType={'email-address'}
          clearButtonMode={'always'}
          textContentType={'emailAddress'}
          placeholderTextColor={'#777777'}
          placeholder="Username*"
          style={{top: 220}}
          onChangeText={text => setUserName(text)}
        />
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
        <StyledCheckBoxView>
          {/* TODO add functionality to checkbox */}
          <CheckBox />
        </StyledCheckBoxView>

        <StyledReadAgreeText>
          I Read and agree to{' '}
          <StyledTermsText>Terms & Conditions</StyledTermsText>
        </StyledReadAgreeText>
        {/* <StyledButton onPress={() => navigation.navigate('Genders')}> */}
        <StyledButton onPress={() => FirebaseSignUp()}>
          <StyledLoginText>SIGNUP</StyledLoginText>
        </StyledButton>
        <StyledOrText>OR</StyledOrText>
        <StyledSocialMediaButton
          onPress={() => {
            SingUpwithGoogle()
              .then(() => {
                GoogleSignin.getCurrentUser().then(resp => {
                  CreateUser(
                    resp.user.name,
                    resp.user.email,
                    resp.user.photoURL,
                  );
                });
              })
              .catch(err => console.error(err));
          }}
          style={{
            left: 100,
            backgroundColor: '#dedede',
          }}>
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
        <StyledSignupText onPress={() => navigation.navigate('SignIn')}>
          Already have an account?
          <StyledRedSignupText>Login</StyledRedSignupText>
        </StyledSignupText>
      </KeyboardAvoidingView>
    </StyledBackground>
  );
}
