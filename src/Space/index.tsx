import React, { ReactNode, type FC } from 'react';
import './index.less';

interface SpaceProps {
  align?: 'start' | 'end' | 'center' | 'baseline';
  size?: number;
  direction?: 'horizontal' | 'vertical';
  children?: ReactNode;
}

const Space: FC<SpaceProps> = (props) => {
  const spaceStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: props.direction === 'vertical' ? 'column' : 'row',
    gap: props.size ? `${props.size}px` : '8px',
    alignItems: props.align || 'center',
  };

  return (
    <div className="sptls-space" style={spaceStyle}>
      {React.Children.map(props.children, (child, index) => (
        <div key={index} className="sptls-space-item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Space;
