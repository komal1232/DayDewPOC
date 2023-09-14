import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

function DropLet(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill={props.innerColor}
        d="M56 46.706c0 11.775-8.954 21.297-20 21.297s-20-9.546-20-21.32c0 0-.219-14.309 16.656-40.188 0 0 3.167-5.37 6.354-.353C55.885 32.022 56 46.706 56 46.706"
      />
      <Path
        fill="#61B2E4"
        d="M36 4c12.875 10.375 19.875 40.874 19.875 40.874 0 15.001-8.83 23.127-19.875 23.127 0 0 22-18.127 0-64.002"
      />
      <G>
        <Path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M56 46.706c0 11.775-8.954 21.297-20 21.297s-20-9.546-20-21.32c0 0-.219-14.309 16.656-40.188 0 0 3.167-5.37 6.354-.353C55.885 32.022 56 46.706 56 46.706"
        />
      </G>
    </Svg>
  )
}

export default DropLet


/**
 * 
 * #92D3F5
 */