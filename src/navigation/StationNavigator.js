import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationScreen from '../screen/StationScreen';
import StationTimetable from '../components/station/StationTimetable';

const Stack = createNativeStackNavigator();

function StationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='StationScreen'
        component={StationScreen}
        options={{ title: 'Станции' }}
      />
      <Stack.Screen name='StationTimetable' component={StationTimetable} />
    </Stack.Navigator>
  );
}

export default StationNavigator;
