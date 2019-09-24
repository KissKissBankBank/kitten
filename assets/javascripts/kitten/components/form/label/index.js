import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { stepToRem } from '../../../helpers/utils/typography'

const StyledLabel = styled.label`
  display: block;
  cursor: pointer;
  ${TYPOGRAPHY.fontStyle.regular};

  ${({ tiny }) =>
    tiny &&
    css`
      font-size: ${stepToRem(0)};
    `}

  ${({ micro }) =>
    micro &&
    css`
      font-size: ${stepToRem(-1)};
    `}

  ${({ withoutPointerEvents }) =>
    withoutPointerEvents &&
    css`
      pointer-events: none;
    `}
`

export class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    focusId: PropTypes.string,
    size: PropTypes.string,
    withoutPointerEvents: PropTypes.bool,
  }

  static defaultProps = {
    children: 'label',
    focusId: null,
    size: '',
    withoutPointerEvents: false,
  }

  render() {
    const {
      children,
      focusId,
      size,
      withoutPointerEvents,
      ...other
    } = this.props

    return (
      <label htmlFor={htmlFor} withoutPointerEvents={withoutPointerEvents}>
        {children}
      </label>
    )
  }
}
