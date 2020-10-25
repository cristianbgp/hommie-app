import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function CheckIcon(props) {
  return (
    <Svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 2}
        d="M5 13l4 4L19 7"
      />
    </Svg>
  );
}
