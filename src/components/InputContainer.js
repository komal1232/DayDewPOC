import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './Input';

const InputContainer = prop => {
  return (
    <>
      <View style={styles.inputRow}>
        <Input title ="To Do List"/>
        <Input title ="Priority" />
      </View>
      <View style={styles.inputRow}>
        <Input  title ="Health"/>
        <Input  title ="Call/Email"/>
      </View>
      <View style={styles.inputRow}>
        <Input  title ="Personal"/>
        <Input title ="To Do List" />
      </View>
      <View style={styles.inputRow}>
        <Input title ="To Do List" />
        <Input  title ="To Do List"/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    // paddingHorizontal: 24,
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
    // alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default InputContainer;
