import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BackgroundImage from '../../images/Sign-bg.png';
import styled from 'styled-components';
const StyledTitle = styled.Text`
  font-family: Faustina-Regular;
  font-size: 60px;
  color: white;
  letter-spacing: 4px;
  top: 300px;
  left: 80px;
  position: absolute;
`;
const StyledText = styled.Text`
  font-family: OpenSans-Regular;
  position: absolute;
  letter-spacing: 0.2px;
  color: white;
  top: 450px;
  left: 60px;
  width: 280px;
  height: 50px;
  text-align: center;
`;
const StyledBoldText = styled.Text`
font-family: Faustina-SemiBold;
font-size: 17px;
`
const StyledButton = styled.TouchableOpacity`
  background-color: #c12323;
  width: 390px;
  height: 60px;
  position: absolute;
  top: 520px;
  left: 10px;
  border-radius: 5px;
  align-items: center;
`;
const StyledSignText = styled.Text`
  font-family: Faustina-SemiBold;
  color: white;
  font-size: 24px;
  top: 13px;
  position: absolute;
`;
const StyledLoginText = styled.Text`
  font-family: OpenSans-Regular;
  position: absolute;
  letter-spacing: 0.2px;
  color: white;
  top: 600px;
  left: 138px;
`;
const Line = styled.View`
  background-color: white;
  width: 120px;
  height: 2px;
  position: absolute;
  top: 370px;
  left: 200px;
`;
export default function Sign({navigation}) {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, resizeMode: 'cover', backgroundColor: 'transparent'}}>
      <View>
        <StyledTitle>LandiFit</StyledTitle>
        {/* <View style={styles.line}></View> */}
        <Line/>
        <StyledText>
          Lorem Ipsum is simply dummy text of the printing and <StyledBoldText>typesetting</StyledBoldText>
        </StyledText>
        <StyledButton onPress={()=>navigation.navigate("SignUp")}>
          <StyledSignText>SIGN UP</StyledSignText>
        </StyledButton>
        <StyledLoginText onPress={()=>{
          navigation.navigate('SignIn')
        }}>Log In With Account</StyledLoginText>
      </View>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   line: {
//     backgroundColor: 'white',
//     width: 120,
//     height: 2,
//     position: 'absolute',
//     top: 370,
//     left: 200,
//   },
// });
