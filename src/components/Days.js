import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { APP_CONTAINER_MARGIN_HORIZONTAL } from "../utils/constants";

const Day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

const renderDays = () =>{
     const box = [];
     for(let i = 0;i<Day.length ;i++){
       box.push( <Text key = {i}>
            {Day.at(i)}
        </Text>)
     }

     return box;
}
const Days = (props) =>{
    return(
    <View style ={styles.container}>
        {renderDays()}
    </View>
    )

};

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10

    }
})

export default Days;