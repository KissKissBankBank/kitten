import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const VerticalStroke = styled(({ className, size, ...others }) => {
  const verticalStrokeClassName = classNames(
    'k-VerticalStroke',
    {
      'k-VerticalStroke--tiny': size === 'tiny',
      'k-VerticalStroke--default': size === 'default',
      'k-VerticalStroke--big': size === 'big',
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

  &.k-VerticalStroke--tiny {
    height: ${pxToRem(20)};
    width: ${pxToRem(2)};
  }

  &.k-VerticalStroke--default {
    height: ${pxToRem(30)};
    width: ${pxToRem(4)};
  }

  &.k-VerticalStroke--big {
    height: ${pxToRem(50)};
    width: ${pxToRem(4)};
  }

  &.k-VerticalStroke--huge {
    height: ${pxToRem(100)};
    width: ${pxToRem(6)};
  }
`

VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge']),
}

VerticalStroke.defaultProps = {
  size: 'default',
}
