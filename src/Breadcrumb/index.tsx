import React, { ReactNode, type FC } from 'react';
import './index.less';

interface BreadcrumbItem {
  text: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator: ReactNode;
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  let separatorDom: ReactNode = '/';
  if (props.separator) {
    separatorDom = props.separator;
  }

  return (
    <nav className="sptls-breadcrumb">
      <ol>
        {props.items.map((item, index) => (
          <>
            <li key={index}>
              {item.link ? (
                <a href={item.link}>{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
            <li className="sptls-breadcrumb-separator">
              {index === props.items.length - 1 ? <></> : <>{separatorDom}</>}
            </li>
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
