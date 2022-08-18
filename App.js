import * as React from 'react';
import { View } from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigator />
    </View>
  );
}
