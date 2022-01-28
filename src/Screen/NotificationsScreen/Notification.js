import { View, Text } from 'react-native';
import React from 'react';

export default function Notification({route,navigation}) {

  return (
    <View>
      <Text>{console.log(route.name)}</Text>
    </View>
  );
}
