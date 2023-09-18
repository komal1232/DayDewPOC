import React, {useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CalendarPicker from 'react-native-calendar-picker';
import {TEXT_FONT_STYLE} from '../utils/constants';
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DateComp = prop => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dayCon} onPress={() => setOpen(true)}>
        <Text style={styles.text}>{weekday.at(date.getDay())}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.dayCon}>
        <Text style={styles.text}>
          {' '}
          {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
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
      {/* <CalendarPicker /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontStyle: TEXT_FONT_STYLE,
    fontSize: 20,
  },

  container: {
    marginHorizontal: 20,
  },
  dayCon: {
    alignItems: 'flex-end',
    fontSize: 15,
  },
});

export default DateComp;
