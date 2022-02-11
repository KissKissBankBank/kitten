import React from 'react'
import classNames from 'classnames'
import { Button } from '../../action/button'
import { pxToRem } from '../../../helpers/utils/typography'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  svg,
  .k-ButtonIcon__svg {
    display: block;
    margin: 0;
    padding: 0;
    width: ${pxToRem(12)};
    height: ${pxToRem(14)};
    transition: fill 0.2s;

    pointer-events: none;

    .k-ButtonIcon__svg__stroke {
      transition: stroke 0.2s;
    }
  }

  &.k-ButtonIcon--nano svg,
  &.k-ButtonIcon--nano .k-ButtonIcon__svg {
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
  }

  &.k-ButtonIcon--withoutHover {
    pointer-events: none;
  }
`

export const ButtonIcon = ({ className, withoutHover, size, ...others }) => (
  <StyledButton
    className={classNames('k-ButtonIcon', className, `k-ButtonIcon--${size}`, {
      'k-ButtonIcon--withoutHover': withoutHover,
    })}
    size={size}
    {...others}
    fit="icon"
  />
)

ButtonIcon.defaultProps = {
  size: 'regular',
  withoutHover: false,
}
