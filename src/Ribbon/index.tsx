import React, { ReactNode, type FC } from 'react';
import './index.less';

interface RibbonProps {
  text: string;
  color: string;
  placement: 'start' | 'end';
  children: ReactNode;
}

const Ribbon: FC<RibbonProps> = (props) => {
  let ribbonStyle = 'intel-ribbon-end';
  if (props.placement === 'start') {
    ribbonStyle = 'intel-ribbon-start';
  }
  ribbonStyle += ' item-ribbon-box';

  let divStyle: React.CSSProperties = {};
  if (props.color) {
    divStyle = {
      color: props.color,
      backgroundColor: props.color,
    };
  }

  return (
    <div className="intel-ribbon">
      {/* Dom */}
      {props.children}
      {/* 丝带 */}
      <div style={divStyle} className={ribbonStyle}>
        <span className="intel-ribbon-text">{props.text}</span>
        <div className="intel-ribbon-corner"></div>
      </div>
    </div>
  );
};

export default Ribbon;
