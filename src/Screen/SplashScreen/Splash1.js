import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from '../../images/Splash1-bg1.png';

const StyledView = styled.View``;
const StyledSkipText = styled.Text`
  color: white;
  position: absolute;
  left: 17px;
  font-family: OpenSans-Regular;
  top: 600px;
`;
const StyledNextText = styled.Text`
  color: white;
  position: absolute;
  right: 17px;
  font-family: OpenSans-Regular;
  top: 600px;
`;
const StyledTitle = styled.Text`
  color: white;
  font-size: 36px;
  top: 450px;
  left: 28px;
  font-family: OpenSans-Regular;
  position: absolute;
`;
export default function Splash1({navigation}) {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, resizeMode: 'cover', backgroundColor: 'transparent'}}>
      <StyledView>
        <StyledTitle>Welcome To LandiFit</StyledTitle>
        <StyledSkipText onPress={() => navigation.navigate('Sign')}>Skip</StyledSkipText>
        <View style={styles.circlesView}>
          <View style={styles.filledCircle}></View>
          <View style={styles.emptyCircle}></View>
          <View style={styles.emptyCircle}></View>
        </View>
        <StyledNextText >Next</StyledNextText>
      </StyledView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  circlesView: {
    top: 600,
    left: 160,
    flex: 1,
    flexDirection: 'row',
  },
  emptyCircle: {
    marginStart: 10,
    width: 15,
    height: 15,
    borderRadius: 100 / 2,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  filledCircle: {
    marginStart: 10,
    width: 15,
    height: 15,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
