import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { BORDER_COLOR, BORDER_UNERLINE } from '../utils/constants';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const CheckBoxText = props => {
  const [text, setText] = useState('');
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.textCheck}>
      <CheckBox
        value={check}
        onValueChange={e => setCheck(e)}
        // onCheckColor="black"
        // onTintColor="black"
        onCheckColor={BORDER_COLOR}
        onTintColor={BORDER_COLOR}
        boxType="square"
        style={styles.checkBox}
      />
      <View
        style={{
          width: props.width - 60,
          borderBottomWidth: 1,
           borderColor: BORDER_UNERLINE,
          //borderColor: 'black',
          borderStyle: 'solid',
        }}>
        <TextInput value={text} onChangeText={e => setText(e)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: screenWidth / 2 - 60,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  checkBox: {
    height: 20,
    width: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCheck: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
export default CheckBoxText;
