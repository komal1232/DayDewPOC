import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import { BORDER_COLOR, FOOD_TEXT_BACKGROUND, FOOD_TEXT_COLOR, TEXT_COLOR, TEXT_FONT_STYLE } from '../utils/constants';

const Food = prop => {
  const renderText = () => {
    return <TextInput style={[styles.textInput, {marginTop:20}]} multiline={true} />;
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
    color: FOOD_TEXT_COLOR,
    fontStyle:TEXT_FONT_STYLE
  },
  headingTestView: {
   // justifyContent:'center',
    alignItems: 'center',
    flex: 1,
    padding:3,
    //backgroundColor: 'black',
   backgroundColor: FOOD_TEXT_BACKGROUND,
  },
  snackHeading: {
    marginTop: -10,
    alignSelf: 'center',
    // height:20,
    // width:70,
    // borderRadius:10,
    // borderWidth:1,
    // backgroundColor: 'black',
    backgroundColor: FOOD_TEXT_BACKGROUND,
    color: FOOD_TEXT_COLOR,
    padding:4,
    fontStyle:TEXT_FONT_STYLE
  },
});

export default Food;
