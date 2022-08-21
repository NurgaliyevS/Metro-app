import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StationScreen from '../screen/StationScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import CartScreen from '../screen/HistoryScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { backgroundColor: '#4169E1' },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: '#fff',
        }}
      >
        <Tab.Screen
          name='StationScreen'
          component={StationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='alarm-outline' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Favorite'
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='subway-outline' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
