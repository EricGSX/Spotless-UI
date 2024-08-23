import React, { ReactNode, type FC } from 'react';
import './index.less';

interface FloatButtonProps {
  icon?: ReactNode;
  description?: string | ReactNode;
  type?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  shape?: 'circle' | 'square';
  onclick?: () => void;
  children?: ReactNode;
}

const FloatButton: FC<FloatButtonProps> = (props) => {
  return (
    <div className="sptls-float-button" onClick={props.onclick}>
      {props.icon}
      {props.description}
    </div>
  );
};

export default FloatButton;
