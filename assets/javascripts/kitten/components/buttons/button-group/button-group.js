import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../../components/buttons/button/button'
import { pxToRem } from '../../../helpers/utils/typography'

const borderRadius = pxToRem(4)

const StyledButtonGroup = styled.div`
  display: flex;
`

const StyledButton = styled(Button)`
  flex: 1;
  z-index: 0;

  &:not(:last-child) {
    margin-right: -${pxToRem(2)};
  }

  &:first-child {
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  }

  &:last-child {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }

  :active,
  :hover,
  :focus {
    border-radius: ${borderRadius};
    z-index: 1;
  }
`

export class ButtonGroup extends Component {
  render() {
    const { buttons, buttonLabel } = this.props

    return (
      <StyledButtonGroup role="group" aria-label={buttonLabel}>
        {buttons.map(button => (
          <StyledButton key={button.key}>{button.name}</StyledButton>
        ))}
      </StyledButtonGroup>
    )
  }

  static propTypes = {
    buttonLabel: PropTypes.string,
    key: PropTypes.string,
  }

  static defaultProps = {
    buttonLabel: 'Button',
  }
}
