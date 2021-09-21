import React from 'react'
import PropTypes from 'prop-types'
import { Button, ArrowContainer } from '../../../../'
import styled from 'styled-components'
import classNames from 'classnames'

const StyledToggleButton = styled(Button)`

`

export const ToggleButton = ({
  className,
  ...props
}) => {
  return (
    <StyledToggleButton
      className={classNames(
        'k-ToggleButton',
        className,
        {...props}
      )}
    >

    </StyledToggleButton>
  )
}
