import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Drop from './Drop';
import {TEXT_FONT_STYLE} from '../utils/constants';

const WaterBox = prop => {
  const renderDrops = () => {
    const box = [];
    for (let i = 0; i < 8; i++) {
      box.push(<Drop key={i} />);
    }
    return box;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{prop.title}</Text>
      <View style={styles.line}></View>
      {renderDrops()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: '100%', // or specify a fixed height like 100 or 200
    width: 1,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  title: {
    alignSelf: 'center',
    fontStyle: TEXT_FONT_STYLE,
  },
});

export default WaterBox;
