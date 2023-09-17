import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropLet from '../svgComp/DropLet';
import Drop from './Drop';
import PlusIcon from '../svgComp/PlusIcon';
import Minus from '../svgComp/Minus';
import { TEXT_FONT_STYLE } from '../utils/constants';

const WaterBox = prop => {
  const renderDrops = () => {
    const box = [];
    for (let i = 0; i < 8; i++) {
      box.push(<Drop key={i} />);
    }
    return box;
    //)
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
  plusIcon: {
    // flex:1
    //justifyContent:''
  },
  title: {
    alignSelf: 'center',
    fontStyle:TEXT_FONT_STYLE
  },
});

export default WaterBox;
