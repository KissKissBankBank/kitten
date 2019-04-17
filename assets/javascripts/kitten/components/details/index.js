import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DetailsElement from 'details-element-polyfill'

const Summary = styled.summary`
  display: inline-flex;
  list-style: none;
  touch-callout: none;
  user-select: none;
  cursor: pointer;

  ::-webkit-details-marker,
  ::before {
    display: none;
  }
`

export const Details = ({ children, summaryRender, onToggle, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    onToggle()
  }

  return (
    <details onToggle={handleToggle} {...props}>
      <Summary>{summaryRender({ isOpen })}</Summary>

      {children}
    </details>
  )
}

Details.propTypes = {
  summaryRender: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
}

Details.defaultProps = {
  onToggle: () => {},
}
