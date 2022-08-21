import React from 'react';

import { View, Text } from 'react-native';
import Station from '../components/Station';

function StationScreen({ navigation }) {
  return (
    <View>
      <Station navigation={navigation} />
    </View>
  );
}

export default StationScreen;
