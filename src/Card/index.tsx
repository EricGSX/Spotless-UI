import React, { ReactNode, type FC } from 'react';
import './index.less';

interface CardPorps {
  title?: string;
  extra?: ReactNode;
  isSingle?: boolean;
  bordered?: boolean;
  children?: ReactNode;
}

const Card: FC<CardPorps> = (props) => {
  let divStyle: React.CSSProperties = {};

  if (props.bordered === false) {
    divStyle = {
      border: '0px',
    };
  }

  return (
    <div className="sptls-card" style={divStyle}>
      {/* Title */}
      {props.isSingle === true ? (
        <></>
      ) : (
        <div className="sptls-card-header">
          <div className="sptls-carrd-title">{props.title}</div>
          <div className="sptls-card-extra">{props.extra}</div>
        </div>
      )}
      {/* Children */}
      <div className="sptls-card-body">{props.children}</div>
    </div>
  );
};

export default Card;
