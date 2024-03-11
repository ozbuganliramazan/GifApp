import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Pagination = ({currentPage, setCurrentPage}) => {
  return (
    <View style={styles.container}>
      {currentPage !== 1 && (
        <View style={styles.leftButton}>
          <TouchableOpacity
            onPress={() => setCurrentPage(currentPage - 1)}
            style={styles.button}>
            <Text style={{textAlign: 'center'}}>Geri</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.rightButton}>
        <TouchableOpacity
          onPress={() => setCurrentPage(currentPage + 1)}
          style={styles.button}>
          <Text style={{textAlign: 'center'}}>İleri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ddd',
    width: 80,
    borderRadius: 10,
    padding: 10,
  },
  rightButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftButton: {},
});
