import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const Separator = styled(({ darker, className, ...props }) => {
  const separatorClassName = classNames(
    'k-Separator',
    { 'k-Separator--darker': darker },
    className,
  )

  return <hr className={separatorClassName} {...props} />
})`
  &.k-Separator {
    margin: 0;
    border: none;
    background: ${COLORS.line1};
    height: ${pxToRem(1)};
  }

  &.k-Separator--darker {
    background: ${COLORS.line2};
  }
`

Separator.propTypes = {
  darker: PropTypes.bool,
}

Separator.defaultProps = {
  className: null,
  darker: false,
}
