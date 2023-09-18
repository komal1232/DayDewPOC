import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextTime from "./TextTime";
import { TEXT_FONT_STYLE } from "../utils/constants";

const Sleep = (props) =>{

    return(
        <>
        <Text style={{fontStyle:TEXT_FONT_STYLE}}>
            {props.title}
        </Text>
        <View style={styles.textInput}>
            <TextTime  title = "slept" />
        
        </View>
        <View style={styles.textInput}>
        <TextTime  title = "Woke up" />
        </View>
        <View style={styles.textInput}>
            <TextTime title ="Total Time" type ="total Time"/>
        </View>
        </>
    )
}

const styles =StyleSheet.create({
    textInput :{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    }
})

export default Sleep;