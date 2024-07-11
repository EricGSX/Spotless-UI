import React, { ReactNode, type FC } from 'react';
import './index.less';

interface BadgeProps {
  count: number;
  showZero: boolean;
  color: string;
  dot: boolean;
  offset: number;
  overflowCount: number;
  status: string;
  text: string;
  title: string;
  children: ReactNode;
}

const Badge: FC<BadgeProps> = (props) => {
  const subStyle = 'sptls-badge-sup';

  let overflowCountLimit = 99;

  let divStyle: React.CSSProperties = {};

  if (props.color) {
    divStyle.backgroundColor = props.color;
  }

  if (props.overflowCount) {
    overflowCountLimit = props.overflowCount;
  }

  return (
    <span className="sptls-badge">
      {/* DOM */}
      {props.children}
      {/* 徽标 */}
      <sup className={subStyle} style={divStyle}>
        {props.count > overflowCountLimit
          ? `${overflowCountLimit}+`
          : props.count}
      </sup>
    </span>
  );
};

export default Badge;
