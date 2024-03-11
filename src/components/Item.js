import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const Item = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(item.bitly_gif_url)}
      style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.gif}
          resizeMode={'contain'}
          source={{uri: item.images.preview_gif.url}}
        />
      </View>
      <View style={styles.user}>
        <Image
          source={{uri: item?.user?.avatar_url ?? ''}}
          style={styles.user_avatar}
        />
        <Text style={styles.username}>{item?.user?.username} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    margin: 5,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  gif: {
    width: 150,
    height: 150,
  },
  content: {
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  user_avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  username: {
    marginLeft: 5,
    fontWeight: '700',
  },
});
