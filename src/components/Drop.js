import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import DropLet from "../svgComp/DropLet";
import WaterGlass from "../svgComp/WaterGlass";


const Drop = (props) =>{
    const [dropColor, setDropColor] = useState("transparent")

    const onchange = ()=>{
        setDropColor(dropColor==="#92D3F5"?"transparent":"#92D3F5");
    }


    return (
    <TouchableOpacity onPress={onchange}>
      {/* <DropLet height={30} width={30} innerColor={dropColor} /> */}
      <WaterGlass height={30} width={30} innerColor ={dropColor}/>
      </TouchableOpacity>
    )
}

export default Drop