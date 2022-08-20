import React from 'react';

import { View, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post';

function HistoryScreen() {
  return (
    <View>
      <Post />
    </View>
  );
}

export default HistoryScreen;
