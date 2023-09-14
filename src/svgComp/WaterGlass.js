import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WaterGlass(props) {
  return (
    <Svg
      fill="#000"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
      {...props}
    >
      <Path
        d="M5.5 9.5l1.17 10.61a1 1 0 001 .89h8.44a1 1 0 001-.89L18.39 8.5c-6.3.05-6.65.94-12.89 1z"
        fill={props.innerColor}
        strokeWidth={2}
      />
      {/* <Path
        d="M5.61 9.5c6.24-.06 6.59-.95 12.89-1"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      /> */}
      <Path
        data-name="primary"
        d="M18 3a1 1 0 011 1.11l-1.77 16a1 1 0 01-1 .89H7.78a1 1 0 01-1-.89L5 4.11A1 1 0 016 3z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </Svg>
  )
}

export default WaterGlass;
