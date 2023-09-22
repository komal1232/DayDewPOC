import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Star(props) {
  return (
    <Svg
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 50.001 50.001"
      xmlSpace="preserve"
      {...props}
    >
      <Path fill = {props.color}d="M49.265 21.001c1.255-1.223.862-2.43-.872-2.683l-12.036-1.749c-1.734-.251-3.788-1.743-4.563-3.315L26.41 2.347c-.776-1.57-2.045-1.57-2.821 0l-5.382 10.908c-.776 1.572-2.83 3.064-4.564 3.315L1.606 18.319c-1.734.252-2.126 1.46-.871 2.682l8.71 8.49c1.254 1.224 2.04 3.638 1.743 5.365L9.132 46.842c-.296 1.729.73 2.475 2.282 1.658l10.767-5.659c1.55-.814 4.088-.814 5.639 0L38.585 48.5c1.553.816 2.578.07 2.283-1.658L38.81 34.857c-.295-1.729.489-4.142 1.745-5.365l8.71-8.491zM41.995 6.761c.248.241.401.718.344 1.06l-.406 2.366c-.059.34.144.488.451.327l2.125-1.118c.306-.161.808-.161 1.112 0l2.125 1.118c.306.161.509.014.45-.327l-.406-2.366c-.056-.342.099-.818.345-1.06l1.721-1.675c.249-.243.17-.481-.172-.531l-2.376-.345c-.343-.049-.746-.344-.9-.655l-1.062-2.153c-.153-.309-.403-.309-.558 0l-1.062 2.153c-.154.311-.56.605-.901.655l-2.377.345c-.342.05-.42.288-.172.531l1.719 1.675z" />
    </Svg>
  )
}

export default Star


/*

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

  const generateRandomPoints = (numPoints: number) =>{
    const points = [];
    for(let i=0;i<numPoints;i++){
      const x = Math.floor(Math.random()*width);
      const y = Math.floor(Math.random()*height);
      points.push({x,y});
    }

    return points;
  }

  const randomPoints = generateRandomPoints(50);

  const backIcons = (points: any) =>{
    const box: React.JSX.Element[] = [];
    points.map((point,index) =>{
      box.push(
        <Star 
        key = {index}
        height ={50}
        width ={50}
        color = {"#247CAC"}
        style ={{  position: 'absolute',
        top : point.y,
        left : point.x,
        opacity:Math.random()*0.5
      }}
        />
      )})
      return box;

  }


 */