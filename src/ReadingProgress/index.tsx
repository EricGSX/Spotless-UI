import React, { type FC, useEffect } from 'react';
import './index.less';

interface ReadingProgressProps {
  color?: string;
}

const ReadingProgress: FC<ReadingProgressProps> = (props) => {
  const handleScroll = () => {
    // 滚动距离（document.documentElement.scrollTop） + 浏览器窗口可视高度 (window.innerHeight) = 整个页面的高度（document.body.clientHeight）
    // 滚动位置
    let pageScrollHeight = document.documentElement.scrollTop;
    let pageHeight = window.innerHeight;
    let totalPageHeight = document.body.clientHeight;
    let progressWidth =
      ((pageScrollHeight + pageHeight) / totalPageHeight) * 100;
    let element = document.querySelector(
      '.sptls-reading-progress-container',
    ) as HTMLElement | null;
    if (element) {
      element.style.width = `${progressWidth}%`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let divStyle: React.CSSProperties = {
    backgroundColor: props.color || '#f80',
    height: '100%',
    width: '0%',
  };

  return (
    <div className="sptls-reading-progress">
      <div style={divStyle} className="sptls-reading-progress-container"></div>
    </div>
  );
};

export default ReadingProgress;
