import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HappyFace from "../svgComp/mood/HappyFace";
import AngryFace from "../svgComp/mood/AngryFace";
import ExpressionLess from "../svgComp/mood/ExpressionLess";
import FlatFace from "../svgComp/mood/FlatFace";
import Sad from "../svgComp/mood/Sad";
import HappyFaceTwo from "../svgComp/mood/HapyFaceTwo";
import Awful from "../svgComp/mood/Awful";
import SadTwo from "../svgComp/mood/SadTwo";


const Mood = (props) =>{

    return (
        <>
            <Text>
                {props.title}
            </Text>
        <View style = {styles.container}>
            <View style ={{opacity: 0.3}}>
           
            </View>

            <View style ={{opacity: 0.3}}>
            <HappyFace  height={30} width={30} style={styles.moodStyle}  />
            </View>
            <AngryFace  height={30} width={30} style={styles.moodStyle} />
            <View style ={{opacity: 0.3}}>
            <FlatFace  height={30} width={30} style={styles.moodStyle}  />
            </View>
            <View style ={{opacity: 0.3}}>
            <Sad   height={30} width={30} style={styles.moodStyle} />
            </View>
           
            <View style ={{opacity: 0.3}}>
            <HappyFaceTwo   height={30} width={30} style={styles.moodStyle} />
            </View>
            <Awful  height={30} width={30} style={styles.moodStyle} />
            <SadTwo   height={30} width={30} style={styles.moodStyle}/>
            
           
        </View>
        </>
    )
}

export default Mood;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
        alignItems:"center"
      },
      moodStyle :{
        margin:2
      }

})


