import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.logo}>Gif App</Text>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 15,
    backgroundColor: '#3F51B5',
  },
  logo: {
    fontSize: 17,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
  },
});
export default Header;
