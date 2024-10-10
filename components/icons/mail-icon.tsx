import * as React from 'react';
import Svg, { G, Rect, Path, Defs, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MailIcon = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <G filter="url(#filter0_d_80_68375)">
      <Rect x={2} y={1} width={36} height={36} rx={8} fill="white" />
      <Rect x={2.5} y={1.5} width={35} height={35} rx={7.5} stroke="#D0D5DD" />
      <Path
        d="M16.6655 16.9167H19.9989M16.6655 19.8333H22.4989M20.4155 25.6667C24.3276 25.6667 27.4989 22.4953 27.4989 18.5833C27.4989 14.6713 24.3276 11.5 20.4155 11.5C16.5035 11.5 13.3322 14.6713 13.3322 18.5833C13.3322 19.375 13.4621 20.1363 13.7017 20.8472C13.7918 21.1147 13.8369 21.2484 13.8451 21.3512C13.8531 21.4527 13.847 21.5238 13.8219 21.6225C13.7965 21.7223 13.7404 21.8262 13.6281 22.034L12.2651 24.557C12.0706 24.9168 11.9734 25.0968 11.9952 25.2356C12.0141 25.3566 12.0853 25.4631 12.1899 25.5269C12.3099 25.6001 12.5133 25.579 12.9202 25.537L17.1877 25.0958C17.3169 25.0825 17.3815 25.0758 17.4404 25.0781C17.4984 25.0803 17.5392 25.0857 17.5957 25.0987C17.6532 25.112 17.7254 25.1398 17.8698 25.1954C18.6599 25.4998 19.5182 25.6667 20.4155 25.6667Z"
        stroke="#344054"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default MailIcon;
