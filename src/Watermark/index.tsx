import React, { ReactNode, type FC } from 'react';
import './index.less';

interface WatermarkProps {
  content: string;
  color: string;
  children: ReactNode;
}

const Watermark: FC<WatermarkProps> = (props) => {
  // let waterContent = 'Spotless UI'

  return (
    <div className="intel-watermark">
      {/* DOM */}
      {props.children}
      {/* 水印 */}
    </div>
  );
};

export default Watermark;
