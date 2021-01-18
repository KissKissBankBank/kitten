import React from 'react'
import classNames from 'classnames'
import { Button } from '../../../components/buttons/button'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledButton = styled(({ tag, ...props }) => (
  <Button {...props} as={tag} />
))`
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

  .k-ButtonIcon--withoutHover {
    pointer-events: none;
  }
`

export const ButtonIcon = ({
  className,
  tag,
  withoutHover,
  verticalArrow,
  size,
  ...others
}) => (
  <StyledButton
    className={classNames('k-ButtonIcon', className, `k-ButtonIcon--${size}`, {
      'k-ButtonIcon--withoutHover': withoutHover,
      'k-ButtonIcon--verticalArrow': verticalArrow,
    })}
    {...others}
    icon
  />
)

ButtonIcon.defaultProps = {
  tag: 'button',
  size: 'normal',
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false,
}
