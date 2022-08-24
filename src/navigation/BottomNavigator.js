import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screen/HistoryScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import StationTimeTableNavigation from './StationTimeTableNavigation';
import StationDescriptionNavigation from './StationDescriptionNavigator';

const Bottom = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: '#3d86cb' },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: '#fff',
        }}
      >
        <Bottom.Screen
          name='StationTimeTableNavigation'
          component={StationTimeTableNavigation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='alarm-outline' color={color} size={size} />
            ),
          }}
        />
        <Bottom.Screen
          name='StationDescriptionNavigation'
          component={StationDescriptionNavigation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='subway-outline' color={color} size={size} />
            ),
          }}
        />
        <Bottom.Screen
          name='Cart'
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name='document-text-outline'
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigator;
