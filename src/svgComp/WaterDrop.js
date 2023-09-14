import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WaterDrop(props) {
  return (
    <Svg
      width="200"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
       {...props}
    >
      <Path 
                d="M50 5 C40 30 15 70 50 95 C85 70 60 30 50 5"
                fill={props.color}
            />
      <Path 
                d="M50 5"
                fill={"black"}
            />
      
      {/* <Path fill={"none"} d="M0 0H24V24H0z" /> */}
              

    </Svg>
  )
}

export default WaterDrop
