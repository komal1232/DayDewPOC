import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './Input';

const InputContainer = prop => {
  return (
    <>
       <Input title ="To Do List"/>
      <View style={styles.inputRow}>
        <Input title ="Exercise" showPLus ={false}/>
        <Input  title ="Food to eat" showPLus ={false}/>
      </View>
        <Input title ="Priority" />
      <View style={styles.inputRow}>
        <Input title ="Night Routin" showPLus ={false}/>
        <Input  title ="Habit" showPLus ={false}/>
      </View>
        <Input  title ="Health"/>
        <Input  title ="Call/Email"/>

        <Input  title ="Personal"/>
        <Input title ="To Do List" />
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
