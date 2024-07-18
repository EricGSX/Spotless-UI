import React, { ReactNode, type FC } from 'react';
import './index.less';

interface StepItem {
  description: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
}

interface StepsProp {
  current?: number;
  direction?: 'horizontal' | 'vertical';
  items: StepItem[];
}

const Step: FC<StepsProp> = (props) => {
  let _current = 0;
  if (props.current) {
    _current = props.current;
  }

  let _direction = 'horizontal';
  let _style: React.CSSProperties = {};

  if (props.direction) {
    _direction = props.direction;
    _style = {
      flexDirection: 'column',
    };
  }

  return (
    <div className="sptls-step" style={_style}>
      {props.items.map((item, index) => (
        <div
          key={index}
          className={
            _current > index
              ? ['sptls-step-item', 'sptls-step-item-finished'].join(' ')
              : _current === index
              ? ['sptls-step-item', 'sptls-step-item-current'].join(' ')
              : 'sptls-step-item'
          }
        >
          <div className="sptls-step-item-container">
            {_direction === 'vertical' ? (
              <div
                className={
                  index === props.items.length - 1
                    ? ['sptls-step-item-tail', 'sptls-step-item-tail-end'].join(
                        ' ',
                      )
                    : 'sptls-step-item-tail'
                }
              ></div>
            ) : (
              <></>
            )}
            <div className="sptls-step-item-icon">
              <span className="sptls-step-icon">{item.icon || index + 1}</span>
            </div>
            <div className="sptls-step-item-content">
              <div
                className={
                  _direction === 'vertical' || index === props.items.length - 1
                    ? [
                        'sptls-step-item-title',
                        'sptls-step-item-title-hide-after',
                      ].join(' ')
                    : 'sptls-step-item-title'
                }
              >
                {item.title}
              </div>
              <div className="sptls-step-item-description">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
