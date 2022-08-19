import React from 'react';

import { View, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post';

function HistoryScreen() {
  return (
    <View>
      <Post />
      {/* <FlatList
        refreshControl={
          <RefreshControl />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={({}) => {
              navigation.navigate('FullPost', {
                id: item?.id,
                title: item?.title,
              });
            }}
          >
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
}

export default HistoryScreen;
