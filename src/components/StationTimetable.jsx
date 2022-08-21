import React from 'react';

import { Text } from 'react-native';

function StationTimetable({ navigation, route }) {
  return <Text>This is {route.params.name}'s profile</Text>;
}

export default StationTimetable;
