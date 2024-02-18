import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import CheckBoxText from "./CheckBoxText";
import PlusIcon from "../svgComp/PlusIcon";

const Shopping = (props) =>{
    const [checkBox,setCheckBox] = useState(2);
    const [money, setMoney] = useState(0)
    const renderCheckBox = ()=>{
        let box = [];

        for(let i =0;i<checkBox;i++){

            box.push(
        <View style = {styles.container}>
            <CheckBoxText 
              key={i}
              height={props.height}
              width={props.width/2}
            />
            <View style ={styles.verticleLine}/>
            <CheckBoxText
              key={i*100+i+100}
              height={props.height/2}
              width={props.width/2}
            />

        </View>
            )
        }

        return box;
    }
    const PlusIconClickc = () => {
        setCheckBox(checkBox + 1);
      };

    return(
        <>
        <Text>{props.title}</Text>   
        {renderCheckBox()}
        <TouchableOpacity onPress={PlusIconClickc}>
        <PlusIcon width={15} height={25} style={styles.plusIcon} />
      </TouchableOpacity>
     <View style ={{display:'flex',flexDirection:'row'}}>
        <Text style ={{ flex:1}}>Money Spent</Text>
        <TextInput 
        placeholder="Amount"
        value={money}
        onChange={(e) =>{setMoney(e)}}
        keyboardType="numeric"
        style = {{  marginRight:0}}
        />
     </View>

        </>
    )

}

const styles = StyleSheet.create({
    container :{
        display:'flex',
        flexDirection:'row'
    },
    verticleLine:{
        width:1,
        height:'80%',
        backgroundColor: 'black',
        marginHorizontal: 10,
    },
    plusIcon: {
        alignSelf: 'flex-end',
    },
})

export default Shopping