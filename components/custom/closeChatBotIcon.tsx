import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';
const CloseChatBotIcon = (props: SvgProps) => (
  <Svg width={51} height={51} viewBox="0 0 51 51" fill="none" {...props}>
    <Rect width={50.8065} height={50.8065} rx={25.4032} fill="#00BF63" />
    <Path
      d="M30.9323 19.8945L19.2656 31.5612M19.2656 19.8945L30.9323 31.5612"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CloseChatBotIcon;
