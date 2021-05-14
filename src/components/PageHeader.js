import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative herotext">
        <h1 className="PageHeader--Title">{title}<br></br>{subtitle}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
      <p>TEST</p>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
