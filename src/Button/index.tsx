import React, { type FC } from 'react';
import './index.less';

// 定义按钮的Props类型
interface ButtonProps {
  text: string;
  isSubmit: boolean;
  type: 'primary' | 'info' | 'warning' | 'success' | 'danger' | 'button'; // 自定义按钮类型
  onClick: () => void;
}

// 定义按钮组件
const Button: FC<ButtonProps> = (props) => {
  let buttonStyle = '';

  // 根据不同的类型设置不同的样式
  switch (props.type) {
    case 'primary':
      buttonStyle = 'sptls-btn-blue sptls-btn';
      break;
    case 'info':
      buttonStyle = 'sptls-btn-gray sptls-btn';
      break;
    case 'success':
      buttonStyle = 'sptls-btn-green sptls-btn';
      break;
    case 'warning':
      buttonStyle = 'sptls-btn-warning sptls-btn';
      break;
    case 'danger':
      buttonStyle = 'sptls-btn-red sptls-btn';
      break;
    default:
      buttonStyle = 'sptls-btn-gray sptls-btn';
  }

  return (
    <button
      type={props.isSubmit === true ? 'submit' : 'button'}
      className={`${buttonStyle}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
