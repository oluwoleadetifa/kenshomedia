import React from 'react';
import './links.style.scss';

const Links = ({name, className, dropdown, href}) => {
  return (
    <div className={className}>
      {dropdown ? (
        <select name="section" className="dropdown">
          <option value="section">Section</option>
          <option value="section2">Section2</option>
          <option value="section3">Section3</option>
          <option value="section4">Section4</option>
        </select>
      ) : (
        <a href={href}>{name}</a>
      )}
    </div>
  );
}

export default Links