import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Item } from './components/item'
import { Badge } from './components/badge'
import { StyledList } from './styles'

export const HeaderMenu = ({
  backgroundColors,
  borderSide,
  borderSideOnHover,
  largeItem,
  noBorder,
  className,
  style,
  ...props
}) => {
  return (
    <StyledList
      className={classNames('k-HeaderMenu', className, {
        'k-HeaderMenu--hasBorders': !noBorder,
        'k-HeaderMenu--hasBorderOnSide': !!borderSide,
        'k-HeaderMenu--hasBorderOnSide-left': borderSide === 'left',
        'k-HeaderMenu--hasBorderOnSide-right': borderSide === 'right',
        'k-HeaderMenu--hasBorderOnSideOnHover': borderSideOnHover,
        'k-HeaderMenu--hasBigItems': largeItem,
      })}
      style={{
        ...style,
        '--headerMenu-background-colors-hover': backgroundColors?.hover,
      }}
      {...props}
    />
  )
}

HeaderMenu.Item = Item
HeaderMenu.Badge = Badge

HeaderMenu.propTypes = {
  backgroundColors: PropTypes.object,
  borderSide: PropTypes.oneOf(['left', 'right', false]),
  borderSideOnHover: PropTypes.bool,
  largeItem: PropTypes.bool,
  noBorder: PropTypes.bool,
}

HeaderMenu.defaultProps = {
  backgroundColors: {},
  borderSide: 'left',
  borderSideOnHover: true,
  largeItem: false,
  noBorder: false,
}
