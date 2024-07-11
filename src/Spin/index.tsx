import React, { ReactNode, type FC } from 'react';
import CircleLine from './circleLine';
import './index.less';

interface SpinProps {
  text: string;
  spinning: boolean;
  children: ReactNode;
}

const Spin: FC<SpinProps> = (props) => {
  return (
    <div className="sptls-spin">
      {props.children}
      {/* Loading */}
      <div className={props.spinning === false ? '' : 'sptls-spin-container'}>
        {props.spinning === false ? (
          <></>
        ) : (
          <div>
            <CircleLine text={props.text}></CircleLine>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spin;
