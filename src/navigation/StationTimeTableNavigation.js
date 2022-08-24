import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationScreen from '../screen/StationScreen';
import StationTimetable from '../components/station/StationTimetable';

const StationTimetableNavigator = createNativeStackNavigator();

function StationTimeTableNavigation() {
  return (
    <StationTimetableNavigator.Navigator>
      <StationTimetableNavigator.Screen
        component={StationScreen}
        name='StationScreen'
        options={{ title: 'Расписание' }}
      ></StationTimetableNavigator.Screen>
      <StationTimetableNavigator.Screen
        component={StationTimetable}
        name='StationTimetable'
      ></StationTimetableNavigator.Screen>
    </StationTimetableNavigator.Navigator>
  );
}

export default StationTimeTableNavigation;
