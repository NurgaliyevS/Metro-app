import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FavoriteScreen from '../screen/FavoriteScreen';
import CartScreen from '../screen/HistoryScreen';
import StationNavigator from './StationNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Bottom = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: '#4169E1' },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: '#fff',
        }}
      >
        <Bottom.Screen
          name='StationNavigator'
          component={StationNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='alarm-outline' color={color} size={size} />
            ),
          }}
        />
        <Bottom.Screen
          name='Favorite'
          component={FavoriteScreen}
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
