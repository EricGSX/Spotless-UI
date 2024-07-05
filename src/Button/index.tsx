import React, { type FC } from 'react';
import './index.less';

// 定义按钮的Props类型
interface ButtonProps {
  text: string;
  isSubmit?: boolean; // 指定按钮的类型
  type: 'primary' | 'info' | 'warning' | 'success' | 'danger' | undefined; // 自定义按钮类型
  onClick: () => void;
}

// 定义按钮组件
const Button: FC<ButtonProps> = (props) => {
  let buttonStyle = '';
  let buttonAction = 'button';

  // 根据不同的类型设置不同的样式
  switch (props.type) {
    case 'primary':
      buttonStyle = 'intel-btn-blue intel-btn';
      break;
    case 'info':
      buttonStyle = 'intel-btn-gray intel-btn';
      break;
    case 'success':
      buttonStyle = 'intel-btn-green intel-btn';
      break;
    case 'warning':
      buttonStyle = 'intel-btn-warning intel-btn';
      break;
    case 'danger':
      buttonStyle = 'intel-btn-red intel-btn';
      break;
    default:
      buttonStyle = 'intel-btn-gray intel-btn';
  }

  if (props.isSubmit) {
    buttonAction = 'submit';
  }

  // eslint-disable-next-line
  return (
    <button
      type={`${buttonAction}`}
      className={`${buttonStyle}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
