import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { BORDER_COLOR, TEXT_FONT_STYLE } from '../utils/constants';

const TextTime = props => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(false);

  return (
    <View style={styles.container}>
      <Text>
        {props.title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}
       
        >
        <Text style ={styles.timeText}>
          {dateSelected == true ? time.getHours() : '_ _ '}{' '}
          {dateSelected == true ? time.getMinutes() : ''}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={'time'}
        open={open}
        date={time}
        onConfirm={time => {
          setOpen(false);
          setTime(time);
          setDateSelected(true);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        androidVariant={'iosClone'}
        dateFormat="DD-MM-YYYY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText:{
    color: BORDER_COLOR,
    fontStyle:TEXT_FONT_STYLE
  }
});

export default TextTime;
