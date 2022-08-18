import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import CartScreen from '../screen/CartScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Favorite' component={FavoriteScreen} />
        <Tab.Screen name='Cart' component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
