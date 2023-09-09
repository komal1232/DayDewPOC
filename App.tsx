/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import DateTwo from './src/components/DateTwo';
function App(): JSX.Element {
  return (
    <View style={styles.container} >
      <DateTwo />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignContent: 'center',
  },
  container: {
    marginTop: 45,
    marginHorizontal: 4,
    //alignItems: 'center',
    // justifyContent:'center',
    // backgroundColor:'pink',
    // borderColor:'pink',
    //borderWidth:1
  }
});

export default App;
