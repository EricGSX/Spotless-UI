import React, { type FC } from 'react';

interface CircleLineProps {
  text?: string;
}

// 四个圆点闪烁Loading
const CircleLine: FC<CircleLineProps> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="#007bff"
    >
      <text
        x="50%"
        y="80%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="16"
        fill="#007bff"
      >
        {props.text}
      </text>
      <circle cx="10" cy="50" r="6">
        <animate
          attributeName="fill"
          values="#007bff;#007bff;#007bff;transparent"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="36" cy="50" r="6">
        <animate
          attributeName="fill"
          values="#007bff;#007bff;#007bff;transparent"
          begin="0.25s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="62" cy="50" r="6">
        <animate
          attributeName="fill"
          values="#007bff;#007bff;#007bff;transparent"
          begin="0.5s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="90" cy="50" r="6">
        <animate
          attributeName="fill"
          values="#007bff;#007bff;#007bff;transparent"
          begin="0.75s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default CircleLine;
