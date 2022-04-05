import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'

export const VerticalStroke = styled(({ className, size, ...others }) => {
  checkDeprecatedSizes(size)

  const verticalStrokeClassName = classNames(
    'k-VerticalStroke',
    {
      'k-VerticalStroke--tiny': size === 'tiny', // Deprecated
      'k-VerticalStroke--small': size === 'small',
      'k-VerticalStroke--default': size === 'default', // Deprecated
      'k-VerticalStroke--medium': size === 'medium',
      'k-VerticalStroke--big': size === 'big', // Deprecated
      'k-VerticalStroke--large': size === 'large',
      'k-VerticalStroke--huge': size === 'huge',
    },
    className,
  )

  return <span className={verticalStrokeClassName} {...others} />
})`
  &.k-VerticalStroke {
    display: block;
    border: none;
    background: ${COLORS.font1};
  }

  &.k-VerticalStroke--tiny,
  &.k-VerticalStroke--small {
    height: ${pxToRem(20)};
    width: ${pxToRem(2)};
  }

  &.k-VerticalStroke--default,
  &.k-VerticalStroke--medium {
    height: ${pxToRem(30)};
    width: ${pxToRem(4)};
  }

  &.k-VerticalStroke--big,
  &.k-VerticalStroke--large {
    height: ${pxToRem(50)};
    width: ${pxToRem(4)};
  }

  &.k-VerticalStroke--huge {
    height: ${pxToRem(100)};
    width: ${pxToRem(6)};
  }
`

VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
}

VerticalStroke.defaultProps = {
  size: 'medium',
}
