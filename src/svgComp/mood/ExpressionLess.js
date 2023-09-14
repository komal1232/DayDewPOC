import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function ExpressionLess(props) {
  return (
    <Svg
      height="800px"
      width="800px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.003 512.003"
      xmlSpace="preserve"
      {...props}
    >
      <Circle cx={256.001} cy={256.001} r={256.001} fill="#fddf6d" />
      <Path
        d="M310.859 474.208c-141.385 0-256-114.615-256-256 0-75.537 32.722-143.422 84.757-190.281C56.738 70.303 0 156.525 0 256c0 141.385 114.615 256 256 256 65.849 0 125.883-24.87 171.243-65.718-34.918 17.853-74.473 27.926-116.384 27.926z"
        fill="#fcc56b"
      />
      <Path
        d="M446.854 204.611h-85.15c-5.753 0-10.414-4.663-10.414-10.414s4.662-10.414 10.414-10.414h85.15c5.753 0 10.414 4.663 10.414 10.414s-4.661 10.414-10.414 10.414zM251.818 204.611h-85.15c-5.753 0-10.414-4.663-10.414-10.414s4.662-10.414 10.414-10.414h85.15c5.753 0 10.414 4.663 10.414 10.414s-4.661 10.414-10.414 10.414zM404.28 359.206H216.335c-5.753 0-10.414-4.663-10.414-10.414s4.661-10.414 10.414-10.414H404.28c5.753 0 10.414 4.663 10.414 10.414s-4.661 10.414-10.414 10.414z"
        fill="#7f184c"
      />
      <Ellipse
        transform="rotate(-74.199 291.164 83.876)"
        cx={291.163}
        cy={83.873}
        rx={29.854}
        ry={53.46}
        fill="#fceb88"
      />
    </Svg>
  )
}

export default ExpressionLess