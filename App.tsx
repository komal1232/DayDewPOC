/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import LinearGradPage from './src/components/LinearGradPage';
import DaysDate from './src/components/DaysDate';
function App(): JSX.Element {
  return (
    <>
      {/* <LinearGradPage>
        <Text style={styles.sectionContainer}>hi komal</Text>
      </LinearGradPage> */}
     <DaysDate/>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignContent: 'center',
  },
});

export default App;
