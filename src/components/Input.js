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
  BORDER_COLOR,
  INPUT_BACKGROUND_COLOR,
} from '../utils/constants';
import PlusIcon from '../svgComp/PlusIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputBox from './Inputbox';
import WaterDrop from '../svgComp/WaterDrop';
import DropLet from '../svgComp/DropLet';
import WaterBox from './WaterBox';
const screenWidth = Dimensions.get('screen').width;

import Mood from '../components/Mood'
import Food from './Food';
import Notes from './Notes';
import Habbit from './Habbit';
import Sleep from './Sleep';
import { Path, Svg } from 'react-native-svg';
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

  const getComp = () =>{

     switch(props.type){
      case "inputBox" :
         return <InputBox showPLus ={props.showPLus}  height={componentDimensions.height}
          width={componentDimensions.width} title ={props.title}/>
       break;

       case "water" :
        //#92D3F5 , #FFFFFF
        return (
         <WaterBox  height={componentDimensions.height}
         width={componentDimensions.width} title ={props.title} />
        )

      case "mood" :
        return (
          <Mood title ={props.title}/>
        )
      case "food" :
        return (
          <Food title ={props.title}/>
        )
      case "notes":
        return (
          <Notes title={props.title}/>
        )
      case "edit":
        return (
          <Habbit showPLus ={props.showPLus}  height={componentDimensions.height}
          width={componentDimensions.width} title ={props.title}/>
        )
      case "sleep" :
        return (
          <Sleep title = {props.title} />
        )
      default: return <Text>{"hii komal"}</Text>

    }
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
          {getComp()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width:
    //   screenWidth -
    //   2 * APP_CONTAINER_MARGIN_HORIZONTAL -
    //   2 * INPUT_CONTAINER_MARGIN, 
    backgroundColor: INPUT_BACKGROUND_COLOR,  //'#F8FEFF
    borderRadius: 3,
    margin: INPUT_CONTAINER_MARGIN,
    padding: INPUT_CONTAINER_PADDING,
    borderWidth: 2,
    borderColor: BORDER_COLOR,  //#095561
    flex:1,

    //ROUGHT BORDER
    // borderWidth: 1,
    // borderColor: BORDER_COLOR,
    //transform: [{ rotate: '0.5deg' }],
   // shadowColor: '#000',
    //shadowOffset: { width: -2, height: -2 },
    //shadowOpacity: 0.8,
    //shadowRadius: 3,
    //ROUGHT BORDER
  },
});

Input.defaultProps = {
  showPLus:true,
  type :"inputBox"
}

export default Input;
