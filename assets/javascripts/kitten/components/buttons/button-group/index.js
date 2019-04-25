import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../../components/buttons/button/button'
import { pxToRem } from '../../../helpers/utils/typography'

const borderRadius = pxToRem(4)
const borderSize = pxToRem(2)

const StyledButtonGroup = styled.div`
  display: flex;
`

const StyledButton = styled(Button)`
  flex: 1;
  z-index: 0;

  &:not(:last-child) {
    margin-right: -${borderSize};
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
  static Button = StyledButton

  render() {
    return <StyledButtonGroup role="group" {...this.props} />
  }
}
