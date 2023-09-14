import React,{useState} from "react";
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
const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const InputBox = (props) =>{
    const [text, setText] = useState('hii ');
    const [check, setCheck] = useState(false);
    const [noOfCheckBox, setNoOfCheckBox] = useState(4);


    const getCheckBox = () => {
        box = [];
        for (let i = 0; i < noOfCheckBox; i++) {
          box.push(
            <CheckBoxText
              key={i}
              height={props.height}
              width={props.width}
            />,
          );
        }
        return box;
    };
    const PlusIconClickc = () => {
        setNoOfCheckBox(noOfCheckBox + 1);
      };

    return(
        <>
        <Text
        style={{
          fontSize: 16,
          marginBottom: 4,
          color: '#1D3C03',
          textShadowColor: '#AEAFAC',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0,
        }}>
        {props.title}
      </Text>
      {getCheckBox()}
      {props.showPLus ?
      <TouchableOpacity onPress={PlusIconClickc}>
        <PlusIcon width={15} height={25} style={styles.plusIcon} />
      </TouchableOpacity>
      : null}
        </>

    );

}

const styles = StyleSheet.create({
    container: {
      width:
        screenWidth -
        2 * APP_CONTAINER_MARGIN_HORIZONTAL -
        2 * INPUT_CONTAINER_MARGIN,
      backgroundColor: '#FEFFE1',
      borderRadius: 3,
      margin: INPUT_CONTAINER_MARGIN,
      padding: INPUT_CONTAINER_PADDING,
      borderWidth: 2,
      borderColor: '#797B4B',
      flex:1
    },
    plusIcon: {
      alignSelf: 'flex-end',
    },
});

InputBox.defaultProps = {
    showPLus:true

}


export default InputBox;