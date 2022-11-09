import React from 'react'
import PropTypes from 'prop-types'

export const FlashIllustration = ({ title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="286"
      height="388"
      fill="none"
      viewBox="0 0 286 388"
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M231.043 178.662c.017 0 .025.017.008.033L31.361 386.291c-.018.017-.043 0-.034-.017L94.09 231.622c.008-.017 0-.034-.017-.034L3 232.157 128.456 2h154.177L161.471 178.629a.02.02 0 0 0-.003.01c0 .004.001.007.003.011a.018.018 0 0 0 .007.008.03.03 0 0 0 .01.004h69.555Z" fill="#08A777" stroke="#000" strokeWidth="3"/>
    </svg>
  )
}

FlashIllustration.propTypes = {
  title: PropTypes.string,
}

FlashIllustration.defaultProps = {
  title: null,
}
