import {pink, yellow} from '@mui/material/colors';
import React, {useState} from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
const screenWidth = Dimensions.get('window').width;

// const  DaysOptions = [
//   "mon",
//   "tue",
// "wed",
//  "thu",
//  "fri",
//  "sat",
//   "sun"
// ];

const DaysDate = () => {
  const [day, setDay] = useState(0);

  const [dateDay, setDateDay] = useState(23);
  const [dateMonth, setDateMonth] = useState(1);
  const [dateYear, setDateYear] = useState(23);
  const closeKeybord = () => {
    Keyboard.dismiss();
  };
  const DaysOptions = [
    {id: 1, lable: 'mon'},
    {id: 2, lable: 'tue'},
    {id: 3, lable: 'wed'},
    {id: 4, lable: 'thu'},
    {id: 5, lable: 'fri'},
    {id: 6, lable: 'sat'},
    {id: 7, lable: 'sun'},
  ];

  const newArray = Object.values(DaysOptions).map(({lable}) => lable);
  const function123 = prop => {
    setDay(prop);
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={closeKeybord}
        style={{backgroundColor: 'yellow', display: 'flex'}}>
        <>
          <TouchableOpacity
            onPress={closeKeybord}
            style={{marginTop: 20, flex: 20}}>
            <View style={styles.backgound}>
              <View style={styles.container}>
                {DaysOptions.map(item => (
                  <TouchableOpacity
                    style={{
                      ...styles.diCon,
                      backgroundColor: item.id === day ? '#ff9966' : '#ffcc99',
                    }}
                    onPress={() => {
                      function123(item.id);
                    }}
                    key={item.id}>
                    <View>
                      <Text> {item.lable}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
                {/* {
              newArray.map(({lablecode})=><Text>{"hii"}</Text>)
            } */}
                <TextInput
                  style={styles.dateinput}
                  placeholder="day"
                  onChangeText={console.log('komal')}
                  //value={"23"}
                  maxLength={2}
                  keyboardType="numeric"
                />
                <View style={styles.date}>
                  <Text> {'/'}</Text>
                </View>
                <TextInput
                  style={styles.dateinput}
                  placeholder="month"
                  onChangeText={console.log('komal')}
                  //value={"23"}
                  maxLength={2}
                  keyboardType="numeric"
                />
                <View style={styles.date}>
                  <Text>{'/'}</Text>
                </View>
                <TextInput
                  style={styles.dateinput}
                  placeholder="year"
                  onChangeText={console.log('komal')}
                  //67value={"23"}
                  maxLength={2}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </TouchableOpacity>
        </>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 34,
    marginHorizontal: 4,
  },
  diCon: {
    backgroundColor: '#F6E1DB',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: screenWidth / 20,
    height: screenWidth / 10,

    margin: 2,
  },
  date: {
    justifyContent: 'center',
  },
  dateinput: {
    flex: 0.5,
  },
  backgound: {
    //backgroundColor:'yellow',
    margin: 10,
    marginBottom: 20,
    flex: 1,
  },
});

export default DaysDate;
