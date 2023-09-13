import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CheckBoxText from './CheckBoxText';
import constants from '../utils/constants';
import  PlusIcon from '../svgComp/PlusIcon'
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Input = props => {
  const [text, setText] = useState('hii ');
  const [check, setCheck] = useState(false);
  const [componentDimensions, setComponentDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [noOfCheckBox,setNoOfCheckBox] = useState(4);
  const getCheckBox = () =>{
    box = [];
    for( let i =0;i<noOfCheckBox ;i++){
      box.push(
      <CheckBoxText
      key ={i}
      height={componentDimensions.height}
      width={componentDimensions.width}
      />);

    }
    return box;
  }

  const onLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    setComponentDimensions({width, height});
  };
  const PlusIconClickc = ()=>{
    setNoOfCheckBox(noOfCheckBox+1);
  }
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style ={{fontSize:16, marginBottom:4 , color:"#1D3C03", textShadowColor: '#AEAFAC',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 0,}}>{props.title}</Text>
      {getCheckBox()}
      <TouchableOpacity onPress={PlusIconClickc}>
      <PlusIcon width={15} height={25} style= {styles.plusIcon}/>

      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //display: 'flex',
    //flex: 1,
    width:(screenWidth-2*constants.APP_CONTAINER_MARGIN_HORIZONTAL-4*constants.INPUT_CONTAINER_MARGIN)/2,
    height:200,
    backgroundColor: '#FEFFE1',
    borderRadius: 3,
    margin: constants.INPUT_CONTAINER_MARGIN,
    padding: constants.INPUT_CONTAINER_PADDING,
    borderWidth: 2,
    borderColor: '#797B4B',
  },
  plusIcon :{
    alignSelf:'flex-end'
    
  }
});

export default Input;
