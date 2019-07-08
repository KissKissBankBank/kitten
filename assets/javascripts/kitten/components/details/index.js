import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

if (document && typeof document !== 'undefined') {
  require('details-element-polyfill')
}

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
  const [open, setOpen] = useState(false)

  const handleToggle = event => {
    setOpen(!open)
    onToggle(event)
  }

  return (
    <details onToggle={handleToggle} open={openDefault} {...props}>
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
