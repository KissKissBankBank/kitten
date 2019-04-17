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

export const Details = ({ children, summaryRender, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details onToggle={() => setIsOpen(!isOpen)} {...props}>
      <Summary>{summaryRender({ isOpen })}</Summary>

      {children}
    </details>
  )
}

Details.propTypes = {
  summaryRender: PropTypes.func.isRequired,
}
