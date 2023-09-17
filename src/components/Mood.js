import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MoodMap } from '../utils/componentMap';
import { TEXT_FONT_STYLE } from '../utils/constants';
const Moods = ["HappyFace","HappyFaceTwo","AngryFace","FlatFace","Sad","Awful"];

const Mood = props => {
    const [mood,setMood] =useState("");
    const onMoodPressChange = (prop)=>{

        switch(prop){
            case "HappyFace":
              setMood(mood==="HappyFace"?"":"HappyFace")
            break;
            case "HappyFaceTwo":
              setMood(mood==="HappyFaceTwo"?"":"HappyFaceTwo")
            break;
            case "AngryFace":
              setMood(mood==="AngryFace"?"":"AngryFace")
            break;
            case "FlatFace":
              setMood(mood==="FlatFace"?"":"FlatFace")
            break;
            case "Sad":
              setMood(mood==="Sad"?"":"Sad")
            break;
            case "Awful":
              setMood(mood==="Awful"?"":"Awful")
            break;
            default:
                setMood("")
                
        }


    }
 const renderMoods = () =>{
    let box = [];
    for(let i=0;i<Moods.length;i++){
        let x= Moods.at(i);
        const ComponentTwo = MoodMap[x];
        box.push(
            <TouchableOpacity  key={x} onPress={()=>onMoodPressChange(Moods.at(i))}>
                <ComponentTwo   height={35} width={35}  style={[styles.moodStyle, mood ===x ? {opacity:1}:{}]}  />
            </TouchableOpacity>
        )
    }
    return box;
 }
  return (
    <>
      <Text style={{fontStyle:TEXT_FONT_STYLE}}>{props.title}</Text>
      <View style={styles.container}>
        {renderMoods()}
      </View>
    </>
  );
};

export default Mood;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  moodStyle: {
    margin: 2.5,
    opacity:0.3
  },
});
