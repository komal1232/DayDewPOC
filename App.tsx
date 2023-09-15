/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, Dimensions, View, ImageBackground } from 'react-native';
import DateComp from './src/components/DateComp';
import Input from './src/components/Input';
import InputContainer from './src/components/InputContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { APP_CONTAINER_MARGIN_HORIZONTAL, APP_CONTAINER_MARGIN_TOP } from './src/utils/constants';
function App(): JSX.Element {
  return (
    <View style ={{backgroundColor:"#f2e5d5"}}>
      <View style={styles.container} >
        <DateComp />
        <KeyboardAwareScrollView style={styles.keybord}>
          <InputContainer />
        </KeyboardAwareScrollView>
  
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    marginTop: APP_CONTAINER_MARGIN_TOP,
    marginHorizontal: APP_CONTAINER_MARGIN_HORIZONTAL,
  },
  keybord :{
    borderRadius:10 // for view to be little curvy check in this
    

  }
});

export default App;
