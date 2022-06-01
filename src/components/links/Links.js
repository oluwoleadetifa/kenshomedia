import React from 'react';
import './links.style.scss';

const Links = ({name, className, dropdown, href}) => {
  return (
    <div className={className}>
      <a href={href}>{name}</a>
    </div>
  );
}

export default Links