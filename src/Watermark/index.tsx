import React, { ReactNode, type FC } from 'react';
import './index.less';

interface WatermarkProps {
  content: string;
  color: string;
  children: ReactNode;
}

const Watermark: FC<WatermarkProps> = (props) => {
  let waterContent = 'Spotless UI';

  const textToBase64 = (text: string): string => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    let defaultColor = '#ebebeb';
    if (props.color) {
      defaultColor = props.color;
    }

    if (ctx) {
      canvas.width = 200;
      canvas.height = 100;
      ctx.font = '16px Arial';
      // 逆时针旋转30度
      ctx.rotate((-30 * Math.PI) / 180);
      ctx.fillStyle = defaultColor;
      ctx.fillText(text, 0, 90, 100);

      return canvas.toDataURL();
    }

    return '';
  };

  let waterImg = textToBase64(waterContent);

  let waterStyle: React.CSSProperties = {
    backgroundImage: `url('${waterImg}')`,
  };

  return (
    <div className="sptls-watermark">
      {/* DOM */}
      {props.children}
      {/* 水印 */}
      <div className="sptls-watermark-content" style={waterStyle}></div>
    </div>
  );
};

export default Watermark;
