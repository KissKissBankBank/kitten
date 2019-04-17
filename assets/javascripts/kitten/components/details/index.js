require('details-element-polyfill')

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

export const Details = ({
  children,
  summaryRender,
  open: openDefault,
  onToggle,
  ...props
}) => {
  const [open, setOpen] = useState(openDefault)

  const handleToggle = event => {
    setOpen(!open)
    onToggle(event)
  }

  return (
    <details onToggle={handleToggle} {...props}>
      <Summary>{summaryRender({ open })}</Summary>

      {children}
    </details>
  )
}

Details.propTypes = {
  summaryRender: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
}

Details.defaultProps = {
  onToggle: () => {},
  open: false,
}
