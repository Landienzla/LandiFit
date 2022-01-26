import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
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
  top: 120px;
`;
const StyledGenderView = styled.TouchableOpacity``;
const StyledGenderBox = styled.ImageBackground`
  width: 150px;
  height: 150px;
  border: 1px solid grey;
  border-radius: 10px;
`;
const StyledButton = styled.TouchableOpacity`
  background-color: #c12323;
  width: 390px;
  height: 60px;
  position: absolute;
  top: 520px;
  border-radius: 5px;
  align-items: center;
`;
const StyledNextText = styled.Text`
  color: #f8f8f8;
  font-family: Faustina-SemiBold;
  font-size: 24px;
  top: 14px;
  letter-spacing: 2px;
`;
const StyledBetterExpText = styled.Text`
  font-family: Faustina-Regular;
  color: #777777;
  top: 600px;
  position: absolute;
  font-size: 18px;
  width: 245px;
  text-align: center;
`;
export default function Genders() {
  const [selectedGender, setSelectedGender] = useState();
  const genderHandler = e => {
    const {nativeID} = e._dispatchInstances.pendingProps;
    setSelectedGender(nativeID);
  };
  return (
    <StyledBackground>
      <StyledLandiFitText>
        <Landi>Landi</Landi>
        <Fit>Fit</Fit>
      </StyledLandiFitText>
      <Line />
      <StyledGenderText>Gender</StyledGenderText>
      <StyledGenderView
      style={{top: 190}}
        onPress={e => {
          genderHandler(e);
        }}
        nativeID="Male">
        <StyledGenderBox
          source={Male}
          style={{
            borderColor: selectedGender === 'Male' ? 'green' : 'grey',
          }}></StyledGenderBox>
      </StyledGenderView>
      <StyledGenderView
      style={{top: 210}}
        onPress={e => {
          genderHandler(e);
        }}
        key="Female"
        nativeID="Female">
        <StyledGenderBox
          source={Female}
          style={{
            borderColor: selectedGender === 'Female' ? 'green' : 'grey',
          }}
        />
      </StyledGenderView>
      <StyledButton>
        <StyledNextText>Next</StyledNextText>
      </StyledButton>
      <StyledBetterExpText>
        To give you a better experrince we need to know your Gender{' '}
      </StyledBetterExpText>
    </StyledBackground>
  );
}
