import React, { ReactNode, type FC } from 'react';
import './index.less';

interface DividerProps {
  orientation?: 'left' | 'right' | 'center';
  children?: ReactNode;
}

const Divider: FC<DividerProps> = (props) => {
  let _orientationClass = '';
  if (props.orientation) {
    _orientationClass = `sptls-divider-${props.orientation}`;
  }

  return (
    <div className={['sptls-divider', _orientationClass].join(' ')}>
      <span className="sptls-divider-inner-text">{props.children}</span>
    </div>
  );
};

export default Divider;
