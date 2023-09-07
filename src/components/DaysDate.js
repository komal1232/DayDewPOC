import {pink, yellow} from '@mui/material/colors';
import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const DaysDate = () => {
  return (
    <View style={styles.backgound}>
    <View style={styles.container}>
      <View style={styles.diCon}>
        <Text> mon</Text>
      </View>
      <View style={styles.diCon}>
      
        <Text> tue</Text>
      </View>
      <View style={styles.diCon}>
        <Text> wed</Text>
      </View>
      <View style={styles.diCon}>
        <Text>thu</Text>
      </View>
      <View style={styles.diCon}>
      
        <Text> fri</Text>
      </View>
      <View style={styles.diCon}>
        <Text>sat</Text>
      </View>
      <View style={styles.diCon}>
        <Text>sun</Text>
      </View>
      <TextInput 
        style={styles.dateinput}
        placeholder="day"
        onChangeText={console.log("komal")}
        //value={"23"}
        maxLength={2}
        keyboardType='numeric'
      />
      <View style={styles.date}>
        <Text> { "/"}</Text>
      </View>
      <TextInput 
        style={styles.dateinput}
        placeholder="month"
        onChangeText={console.log("komal")}
        //value={"23"}
        maxLength={2}
        keyboardType='numeric'
      />
      <View style={styles.date}>
        <Text>{ "/"}</Text>
      </View>
      <TextInput 
        style={styles.dateinput}
        placeholder="year"
        onChangeText={console.log("komal")}
        //67value={"23"}
        maxLength={2}
        keyboardType='numeric'
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:34,
    marginHorizontal:4,

  },
  diCon: {
    backgroundColor: '#F6E1DB',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    borderRadius:screenWidth/20,
    height:screenWidth/(10),

    margin:2
    //padding:10,
    //marginHorizontal:4

  },
  date:{
    //flex:1,
    //alignItems:'flex-end',
    //backgroundColor: 'pink',
    //margin:2
    //alignItems:'center',
    justifyContent:'center'

  },
  dateinput:{
    flex:0.5

  },
  backgound:{
    //backgroundColor:'yellow',
    margin:10
  }
});

export default DaysDate;
