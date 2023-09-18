/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import DateComp from './src/components/DateComp';
import InputContainer from './src/components/InputContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BACKGROUND_COLOR, PLUS_ICON_COLOR } from './src/utils/constants';
import PlusIcon from './src/svgComp/PlusIcon';
import Star from './src/svgComp/Start';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <SafeAreaView /*style={{display:'flex'}} */ >
        <DateComp />
        <KeyboardAwareScrollView
          style={styles.keybord}
        >
          <InputContainer />
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={styles.plusIcon}
        >
          <PlusIcon height={20} width={20} />
        </TouchableOpacity>
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: APP_CONTAINER_MARGIN_TOP,
    //marginHorizontal: APP_CONTAINER_MARGIN_HORIZONTAL,
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
  },
  keybord: {
    borderRadius: 10,// for view to be little curvy check in this
    //flex:1
  },
  plusIcon: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PLUS_ICON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: { height: 10, width: 5 },
  }
});

export default App;
