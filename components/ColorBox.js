import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text, textStyle]}>
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
