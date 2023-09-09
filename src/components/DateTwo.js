import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DateTwo = prop => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{fontSize:15}}>{weekday.at(date.getDay())}</Text>
      </View>
     <TouchableOpacity onPress={()=>setOpen(true)} >
       <Text style={styles.subContainer}> {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
     </TouchableOpacity>
      <DatePicker
        modal
        style={styles.subContainer}
        mode={'date'}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        androidVariant={'iosClone'}
        dateFormat="DD-MM-YYYY"
        // selected= {date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //marginTop: 34,
    // marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'pink',
    flexDirection: 'row',
    //marginTop: 34,
    //marginHorizontal: 4,
    marginHorizontal: 20,
   
  },
  subContainer: {
    flex: 1,
    //flexDirection:''
    fontSize:15
  },
});

export default DateTwo;
