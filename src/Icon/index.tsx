import React, { type FC } from 'react';
import Icons from './icons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  viewBox?: string;
}

const Icon: FC<IconProps> = (props) => {
  let svgSize = 24;
  if (props.size) {
    svgSize = props.size;
  }
  let viewBox = '64 64 896 896';
  if (props.viewBox) {
    viewBox = props.viewBox;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill={props.color}
      viewBox={viewBox}
    >
      {Icons[props.name].map((item: any) => (
        <>
          <path d={item} />
        </>
      ))}
    </svg>
  );
};

export default Icon;
