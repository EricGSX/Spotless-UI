import React, { ReactNode, useState, type FC } from 'react';
import './index.less';

interface Panel {
  title?: string;
  content?: ReactNode;
}

interface PanelsProp {
  panels: Panel[];
}

const Collapse: FC<PanelsProp> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const svgStyle: React.CSSProperties = {
    transform: 'rotate(90deg)',
  };

  return (
    <div className="sptls-collapse">
      {props.panels.map((item, index) => (
        <div key={index} className="sptls-collapse-item">
          <div
            className="sptls-collapse-item-title"
            onClick={() => togglePanel(index)}
          >
            <svg
              style={activeIndex === index ? svgStyle : {}}
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="right"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
            {item.title}
          </div>
          {activeIndex === index ? (
            <div className="sptls-collapse-item-content open">
              {item.content}
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
