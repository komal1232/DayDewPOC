import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BORDER_UNERLINE, TEXT_FONT_STYLE } from "../utils/constants";

const Notes = (props)=>{
    return(
        <>
    <View>
        <Text style={{fontStyle:TEXT_FONT_STYLE}}>{props.title}</Text>
    </View>
    <TextInput style ={{flexWrap:'wrap',textDecorationLine :'underline', textDecorationColor:BORDER_UNERLINE}}  multiline={true}/>
    </>
    )
}

const styles = StyleSheet.create({
    underline: {
        borderBottomWidth: 1,
        borderColor: 'black',
        margin: 10,
      },
})

export default Notes;