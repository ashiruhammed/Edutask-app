import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const ProfileIcon = (props: SvgProps) => (
  <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" {...props}>
    <Path
      d="M9.0018 13C5.83173 13 3.0126 14.5306 1.2178 16.906C0.831508 17.4172 0.638364 17.6728 0.644681 18.0183C0.649562 18.2852 0.817165 18.6219 1.02717 18.7867C1.29899 19 1.67567 19 2.42904 19H15.5746C16.3279 19 16.7046 19 16.9764 18.7867C17.1864 18.6219 17.354 18.2852 17.3589 18.0183C17.3652 17.6728 17.1721 17.4172 16.7858 16.906C14.991 14.5306 12.1719 13 9.0018 13Z"
      stroke={props.color || '#384250'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.0018 10C11.4871 10 13.5018 7.98528 13.5018 5.5C13.5018 3.01472 11.4871 1 9.0018 1C6.51652 1 4.5018 3.01472 4.5018 5.5C4.5018 7.98528 6.51652 10 9.0018 10Z"
      stroke={props.color || '#384250'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProfileIcon;
