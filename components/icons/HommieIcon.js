import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HommieIcon(props) {
  return (
    <Svg viewBox="0 0 131 131" {...props}>
      <Path
        d="M3 67.5L65.5 5 128 67.5"
        stroke={props.stroke}
        strokeWidth={6}
        fill="none"
      />
      <Path
        d="M20 67v61h91V67"
        stroke={props.stroke}
        strokeWidth={6}
        fill="none"
      />
    </Svg>
  );
}
