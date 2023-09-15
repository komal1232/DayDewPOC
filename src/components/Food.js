import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const Food = prop => {
  return (
    <>
      <View height={20} style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.headingTestView}>
        <Text style={styles.headingTest}>LUNCH</Text>

        </View>
        <View style={styles.line}></View>
        <View style={styles.headingTestView}>
        <Text style={styles.headingTest}>LUNCH</Text>

        </View>
        <View style={styles.line}></View>
        <View style={styles.headingTestView}>
        <Text style={styles.headingTest}>LUNCH</Text>

        </View>
      </View>
      <View height={100} style={{display: 'flex', flexDirection: 'row'}}>
      <TextInput style={styles.headingTest} />
      <View style={styles.line}></View>
      <TextInput style={styles.headingTest} />
      <View style={styles.line}></View>
      <TextInput style={styles.headingTest} />

      </View>



      <View style={styles.verticalLine}></View>
      <Text style={styles.snackHeading}>SNACKS</Text>
      <TextInput
        style={[
          styles.textInput,
          {width: '80%', alignSelf: 'center', marginTop: 0},
        ]}
      />




      {/* <View style={styles.container}>
        <View style={[styles.box, {alignItems: 'center'}]}>
          <Text style={styles.headding}>BREAKFAST</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.line}></View>

        <View style={styles.box}>
          <Text style={styles.headding}>LUNCH</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.line}></View>

        <View style={styles.box}>
          <Text style={styles.headding}>DINNER</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
      <View style={styles.verticalLine}></View>
      <Text style={{marginTop: 1, alignSelf: 'center'}}>SNACKS</Text>
      <TextInput
        style={[
          styles.textInput,
          {width: '80%', alignSelf: 'center', marginTop: 0},
        ]}
      /> */}
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
    height: '100%', // or specify a fixed height like 100 or 200
    width: 1,
    backgroundColor: 'black',
  },
  verticalLine: {
    width: '100%', // or specify a fixed height like 100 or 200
    height: 1,
    backgroundColor: 'black',
  },
  box: {
    display: 'flex',
    flex: 1,
  },
  textInput: {
    width: Dimensions.get('screen').width / 3 - 30,
    borderColor: '#3c372e',
    marginTop: 20,
    padding: 10,
  },
  headding: {
    alignSelf: 'center',
    // marginHorizontal:10
  },
  headingTest:{
    flex:1,
    alignItems:"center",
},
  headingTestView:{
    alignItems:'center',
    flex:1,
    backgroundColor:"yellow"
  },
  snackHeading:{marginTop: -10, alignSelf: 'center',backgroundColor:"yellow"}
});

export default Food;
