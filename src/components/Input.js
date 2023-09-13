import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CheckBoxText from './CheckBoxText';
import {
  INPUT_CONTAINER_MARGIN,
  INPUT_CONTAINER_PADDING,
  APP_CONTAINER_MARGIN_HORIZONTAL,
} from '../utils/constants';
import PlusIcon from '../svgComp/PlusIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputBox from './Inputbox';
const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const Input = props => {
  const [componentDimensions, setComponentDimensions] = useState({
    width: 0,
    height: 0,
  });

  const onLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    setComponentDimensions({width, height});
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <InputBox showPLus ={props.showPLus}     height={componentDimensions.height}
          width={componentDimensions.width} title ={props.title}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width:
    //   screenWidth -
    //   2 * APP_CONTAINER_MARGIN_HORIZONTAL -
    //   2 * INPUT_CONTAINER_MARGIN, 
    backgroundColor: '#FEFFE1',  //'#F8FEFF
    borderRadius: 3,
    margin: INPUT_CONTAINER_MARGIN,
    padding: INPUT_CONTAINER_PADDING,
    borderWidth: 2,
    borderColor: '#797B4B',  //#095561
    flex:1
  },
});

Input.defaultProps = {
  showPLus:true
}

export default Input;
