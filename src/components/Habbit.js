import React,{useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert,
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CheckBoxText from './CheckBoxText';
import {
  INPUT_CONTAINER_MARGIN,
  INPUT_CONTAINER_PADDING,
  APP_CONTAINER_MARGIN_HORIZONTAL,
  BORDER_COLOR,
  INPUT_BACKGROUND_COLOR,
  TEXT_COLOR,
  BACKGROUND_COLOR,
  TEXT_FONT_STYLE,
} from '../utils/constants';
import PlusIcon from '../svgComp/PlusIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Edit from "../svgComp/Edit";
import Close from "../svgComp/Close";
const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const Habbit = (props) =>{
    const [noOfCheckBox, setNoOfCheckBox] = useState(4);
    const [HabbitModal,setHabbitModal] = useState(false)


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
        <View style ={styles.headdingView}>
        <Text
        style={{
          fontSize: 16,
          marginBottom: 4,
          color: TEXT_COLOR,
          flex:1,
          fontStyle:TEXT_FONT_STYLE
         // textShadowColor: '#AEAFAC',
        //   textShadowOffset: {width: 1, height: 1},
        //   textShadowRadius: 0,
        }}>
        {props.title}
      </Text>
      <TouchableOpacity onPress={e =>{setHabbitModal(true)}}>
      <Edit  width={15} height={25} style={styles.edit} color ={BORDER_COLOR}/>
      </TouchableOpacity>
      </View>
      {getCheckBox()}
      {props.showPLus ?
      <TouchableOpacity onPress={PlusIconClickc}>
        <PlusIcon width={15} height={25} style={styles.plusIcon} />
      </TouchableOpacity>
      : null}
        {/* <View style={styles.centeredView}>
        <Modal
        animationType="slide"
      transparent={true}
      visible={HabbitModal}
      onRequestClose={()=>{
        Alert.alert("Habbit is modified");
        setHabbitModal(false)
      }}
      style={{alignContent:'center',justifyContent:'center',marginTop:200}}
      >
         <View style={styles.modalView}>
          <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>{setHabbitModal(false)}}>
          <Close height={25} width={25} />
          </TouchableOpacity>
        <Text>Edit your Habbit Tracker..</Text>
        </View>
      </Modal>
       

        </View> */}
        </>
     

    );

}

const styles = StyleSheet.create({
    container: {
      width:
        screenWidth -
        2 * APP_CONTAINER_MARGIN_HORIZONTAL -
        2 * INPUT_CONTAINER_MARGIN,
      backgroundColor: INPUT_BACKGROUND_COLOR,
      borderRadius: 3,
      margin: INPUT_CONTAINER_MARGIN,
      padding: INPUT_CONTAINER_PADDING,
      borderWidth: 2,
      borderColor: BORDER_COLOR,
      flex:1
    },
    plusIcon: {
      alignSelf: 'flex-end',
    },
    headdingView:{
        display:'flex',
        flexDirection:'row',
        //justifyContent:'center'
        alignItems:'center'

    },
    edit:{
       // alignSelf:'flex-end'
    },
    centeredView: {
        // height:Dimensions.get('screen').height/3,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 100,
      },
      modalView: {
        marginTop:300,
       // margin: 100,
       height: 300,
       width:300,
       display:'flex',
         //flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 5
        },
        alignSelf:'center',
       // justifyContent:'center',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        opacity:1
      },
});

Habbit.defaultProps = {
    showPLus:true

}


export default Habbit;