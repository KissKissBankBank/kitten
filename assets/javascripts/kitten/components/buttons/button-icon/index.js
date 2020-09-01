import React from 'react'
import classNames from 'classnames'
import { Button } from '../../../components/buttons/button/button'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledButton = styled(({ tag, ...props }) => (
  <Button {...props} as={tag} />
))`
  svg,
  .k-ButtonIconNext__svg {
    display: block;
    margin: 0;
    padding: 0;
    width: ${pxToRem(12)};
    height: ${pxToRem(14)};
    transition: fill 0.2s;

    pointer-events: none;

    .k-ButtonIconNext__svg__stroke {
      transition: stroke 0.2s;
    }
  }

  &.k-ButtonIconNext--nano svg,
  &.k-ButtonIconNext--nano .k-ButtonIconNext__svg {
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
  }

  .k-ButtonIconNext--withoutHover {
    pointer-events: none;
  }
`

export const ButtonIcon = ({
  className,
  tag,
  size,
  withoutHover,
  verticalArrow,
  ...others
}) => (
  <StyledButton
    className={classNames('k-ButtonIconNext', className, {
      [`k-ButtonIconNext--${size}`]: size,
      'k-ButtonIconNext--withoutHover': withoutHover,
      'k-ButtonIconNext--verticalArrow': verticalArrow,
    })}
    nano={size === 'nano'}
    micro={size === 'micro'}
    tiny={size === 'tiny'}
    big={size === 'big'}
    {...others}
    icon
  />
)

ButtonIcon.defaultProps = {
  tag: 'button',
  size: null,
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false,
}
