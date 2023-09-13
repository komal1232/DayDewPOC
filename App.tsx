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
import { APP_CONTAINER_MARGIN_HORIZONTAL, APP_CONTAINER_MARGIN_TOP } from './src/utils/constants';
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
    display:'flex',
    flexDirection:'row'
  },
  container: {
    marginTop: APP_CONTAINER_MARGIN_TOP,
    marginHorizontal: APP_CONTAINER_MARGIN_HORIZONTAL,
  }
});

export default App;
