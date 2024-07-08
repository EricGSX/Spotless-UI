import React, { type FC } from 'react';
import './index.less';

// 定义按钮的Props类型
interface TagProps {
  text: string;
  color: string;
  closeIcon: boolean;
  onClick: () => void;
}

// 定义按钮组件
const Tag: FC<TagProps> = (props) => {
  let tagStyle = 'intel-tag';
  let colorStyle = '';
  const sysColor: string[] = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];

  const found: string | undefined = sysColor.find(
    (item) => item === props.color,
  );

  let divStyle: React.CSSProperties;

  if (found) {
    divStyle = {};
    colorStyle = `intel-tag-${props.color}`;
  } else {
    divStyle = {
      backgroundColor: props.color,
      borderColor: props.color,
    };
    if (props.color.includes('#')) {
      divStyle.color = 'white';
    }
  }

  return (
    <span
      onClick={props.onClick}
      className={[tagStyle, colorStyle].join(' ')}
      style={divStyle}
    >
      {props.text}
    </span>
  );
};

export default Tag;
