import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './Input';

const InputContainer = prop => {
  return (
    <>
        <Input title ="To Do List"/>
        <Input title ="Priority" />
        <Input  title ="Health"/>
        <Input  title ="Call/Email"/>
        <Input  title ="Personal"/>
        <Input title ="To Do List" />
        <Input title ="To Do List" />
        <Input  title ="To Do List"/> 
    </>
  );
};

const styles = StyleSheet.create({
});

export default InputContainer;
