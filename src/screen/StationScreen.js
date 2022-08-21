import React from 'react';

import { View, Text } from 'react-native';
import Station from '../components/station/Station';

function StationScreen({ navigation }) {
  return (
    <View>
      <Station navigation={navigation} />
    </View>
  );
}

export default StationScreen;
