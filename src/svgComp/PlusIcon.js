import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusIcon(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4 12h16m-8-8v16"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlusIcon;
