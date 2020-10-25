import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function PlusIcon(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <Path
        fill={props.fill}
        d="M0 12a1.5 1.5 0 001.5 1.5h8.75a.25.25 0 01.25.25v8.75a1.5 1.5 0 003 0v-8.75a.25.25 0 01.25-.25h8.75a1.5 1.5 0 000-3h-8.75a.25.25 0 01-.25-.25V1.5a1.5 1.5 0 00-3 0v8.75a.25.25 0 01-.25.25H1.5A1.5 1.5 0 000 12z"
      />
    </Svg>
  );
}
