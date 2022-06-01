import React, { Fragment } from 'react'

const Image = ({src, className, altText}) => {
  return (
    <Fragment>
      <img src={src} alt={altText} className={className}/>
    </Fragment>
  )
}

export default Image