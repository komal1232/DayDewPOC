/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import DateTwo from './src/components/DateTwo';
import Input from './src/components/Input';
import InputContainer from './src/components/InputContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import constants from './src/utils/constants';
function App(): JSX.Element {
  return (
    <View style={styles.container} >
      <DateTwo />
      <KeyboardAwareScrollView>
      <InputContainer/>

      </KeyboardAwareScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    // paddingHorizontal: 24,
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
    // alignContent: 'center',
    display:'flex',
    flexDirection:'row'
  },
  container: {
    marginTop: constants.APP_CONTAINER_MARGIN_TOP,
    marginHorizontal: constants.APP_CONTAINER_MARGIN_HORIZONTAL,
    //alignItems: 'center',
    // justifyContent:'center',
    // backgroundColor:'pink',
    // borderColor:'pink',
    //borderWidth:1
  }
});

export default App;
