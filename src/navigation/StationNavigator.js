import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationScreen from '../screen/StationScreen';
import StationTimetable from '../components/station/StationTimetable';
import StationDescriptionScreen from '../screen/StationDescriptionScreen';
import StationDescription from '../components/station/StationDescription';

const Stack = createNativeStackNavigator();

function StationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='StationScreen'
        component={StationScreen}
        options={{ title: 'Расписание' }}
      />
      <Stack.Screen name='StationTimetable' component={StationTimetable} />

      <Stack.Screen
        name='StationDescriptionScreen'
        component={StationDescriptionScreen}
      />
      <Stack.Screen
        name='StationDescriptionComponent'
        component={StationDescription}
      />
    </Stack.Navigator>
  );
}

export default StationNavigator;
