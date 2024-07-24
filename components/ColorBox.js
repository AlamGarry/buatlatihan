import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  boxText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default ColorBox;
