import React, { Fragment } from 'react'

const Image = ({src, className, altText, onClick}) => {
  return (
    <Fragment>
      <img src={src} alt={altText} className={className} onClick={onClick}/>
    </Fragment>
  )
}

export default Image