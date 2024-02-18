import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Input from './Input';
import {BACKGROUND_COLOR, BORDER_COLOR} from '../utils/constants';

const InputContainer = prop => {
  return (
    <>
      <Input title="To Do List" type="inputBox" />
      <View style={styles.inputRow}>
        <Input title="Be Healthy" showPLus={false} />
        <Input title="Sleep Better" showPLus={false} type="sleep" />
      </View>
      <Input title="Shopping List" type="shopping" />
      <Input title="Priority" />
      <Input title="How's your day!!" type={'notes'} />

      <View style={styles.inputRow}>
        <Input title="Night Routin" showPLus={false} />
        <Input title="Habit Tracker" showPLus={false} type={'habit'} />
      </View>
      <Input title="Food" type="food" />

      <Input title="Stay Hydrated!" type="water" />
      <View style={styles.inputRow}>
        <Input title="How do you Feel?" type="mood" />

        <Input title="Personal" showPLus={false} />
      </View>
      <Input title="Remember This for Tommorow" type={'notes'} />
      <View
        style={{
          height: 30,
          backgroundColor: BACKGROUND_COLOR,
          alignItems: 'center',
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default InputContainer;
