import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationDescriptionScreen from '../screen/StationDescriptionScreen';
import StationDescription from '../components/station/StationDescription';

const StationDescriptionNavigator = createNativeStackNavigator();

function StationDescriptionNavigation() {
  return (
    <StationDescriptionNavigator.Navigator>
      <StationDescriptionNavigator.Screen
        component={StationDescriptionScreen}
        name='StationDescriptionScreen'
        options={{ title: 'Описание станций' }}
      ></StationDescriptionNavigator.Screen>

      <StationDescriptionNavigator.Screen
        component={StationDescription}
        name='StationDescriptionComponent'
      ></StationDescriptionNavigator.Screen>
    </StationDescriptionNavigator.Navigator>
  );
}

export default StationDescriptionNavigation;
