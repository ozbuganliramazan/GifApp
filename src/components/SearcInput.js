import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const SearcInput = ({value, setValue, onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setValue(text)}
        onEndEditing={() => onSearch()}
        style={styles.input}
        placeholder={'Gif ismi girin'}
      />
    </View>
  );
};

export default SearcInput;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
});
