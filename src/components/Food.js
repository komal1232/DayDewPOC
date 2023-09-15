import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import { BORDER_COLOR, FOOD_TEXT_COLOR, TEXT_COLOR } from '../utils/constants';

const Food = prop => {
  const renderText = () => {
    return <TextInput style={styles.textInput} multiline={true} />;
  };

  const renderVerticleLine = () => {
    return <View style={styles.line}></View>;
  };
  const headingView = title => {
    return (
      <View style={styles.headingTestView}>
        <Text style={styles.headingTest}>{title}</Text>
      </View>
    );
  };

  const horizontaLine = () => {
    return <View style={styles.horizontaLine}></View>;
  };
  const renderHeading = () => {
    return (
      <View height={20} style={{display: 'flex', flexDirection: 'row', margin:-10}}>
        {headingView('BREAKFAST')}
        {/* {renderVerticleLine()} */}
        {headingView('LUNCH')}
        {/* {renderVerticleLine()} */}
        {headingView('DINNER')}
      </View>
    );
  };

  const renderTextInput = () => {
    return (
      <View height={100} style={{display: 'flex', flexDirection: 'row'}}>
        {renderText()}
        {renderVerticleLine()}
        {renderText()}
        {renderVerticleLine()}
        {renderText()}
      </View>
    );
  };
  return (
    <>
      {renderHeading()}
      {renderTextInput()}

      {horizontaLine()}
      <Text style={styles.snackHeading}>SNACKS</Text>
      <TextInput
        style={[
          styles.textInput,
          {width: '50%', alignSelf: 'center', marginTop: 0,height:25},
        ]}
        multiline={true}
        // numberOfLines={3}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
  },
  line: {
    width: 1,
    backgroundColor: TEXT_COLOR,
    marginTop:10
   
  },
  horizontaLine: {
   // width: '105%', // or specify a fixed height like 100 or 200
    height: 1,
    backgroundColor: TEXT_COLOR,
    marginHorizontal:-10
  },
  box: {
    display: 'flex',
    flex: 1,
  },
  textInput: {
    textDecorationLine:'underline',
    textDecorationColor:'#DADAD5',// @todo check this
    margin:5,
    padding: 10,
    flex: 1,
  },
  headding: {
    alignSelf: 'center',
    // marginHorizontal:10
  },
  headingTest: {
    alignItems: 'center',
    // width:"50%"
    //color:"black",
    color: FOOD_TEXT_COLOR
  },
  headingTestView: {
    alignItems: 'center',
    flex: 1,
    //backgroundColor: 'black',
   backgroundColor: BORDER_COLOR,
  },
  snackHeading: {
    marginTop: -10,
    alignSelf: 'center',
    // backgroundColor: 'black',
    backgroundColor: BORDER_COLOR,
    color: FOOD_TEXT_COLOR,
    padding:2,
  },
});

export default Food;
