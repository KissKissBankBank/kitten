import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import domElementHelper from '../../../helpers/dom/element-helper'
import TYPOGRAPHY from '../../../constants/typography-config'
import { stepToRem } from '../../../helpers/utils/typography'

const StyledLabel = styled.label`
  display: block;
  ${TYPOGRAPHY.fontStyles.regular}
  cursor: pointer;

  &.k-Label--tiny {
    line-height: 1.3;
    font-size: ${stepToRem(0)};
  }

  &.k-Label--micro {
    line-height: 1.3;
    font-size: ${stepToRem(-1)};
  }

  &.k-Label--withoutPointerEvents {
    pointer-events: none;
  }
`

export const Label = ({
  tag,
  className,
  children,
  focusId,
  size,
  withoutPointerEvents,
  htmlFor,
  ...other
}) => {
  const handleClick = e => {
    if (domElementHelper.canUseDom() && focusId) {
      e.preventDefault()

      document.getElementById(focusId).focus()
    }
  }

  return (
    <StyledLabel
      className={classNames('k-Label', className, `k-Label--${size}`, {
        'k-Label--withoutPointerEvents': withoutPointerEvents,
      })}
      htmlFor={focusId || htmlFor}
      onClick={handleClick}
      as={tag}
      {...other}
    >
      {children}
    </StyledLabel>
  )
}

Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'normal',
  withoutPointerEvents: false,
}

Label.propTypes = {
  focusId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf([null, undefined, 'normal', 'tiny', 'micro']),
  withoutPointerEvents: PropTypes.bool,
}
