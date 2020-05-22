import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Masonry from 'react-masonry-component'
import { ORDERED_SCREEN_SIZES } from '../../../constants/screen-config'
import { NUM_COLUMNS } from '../../../constants/grid-config'

export const LegoGrid = ({ className, masonryProps, children, ...others }) => {
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    setVisibility(true)

    return () => {
      setVisibility(false)
    }
  }, [])

  const classByMediaQuery = () => {
    const classNamesByMediaQuery = ORDERED_SCREEN_SIZES.map(size => {
      const mediaQuery = size.toLowerCase()
      const items = others[`items-${mediaQuery}-up`]

      return classNames(classNamesByMediaQuery, {
        [`k-LegoGrid--${NUM_COLUMNS / items}col@${mediaQuery}`]: items,
      })
    })

    return classNamesByMediaQuery
  }

  const gridClassName = classNames(
    'k-LegoGrid',
    classByMediaQuery(),
    className,
    {
      'k-LegoGrid--isVisible': isVisible,
    },
  )

  return (
    <div {...others} className={gridClassName}>
      <Masonry {...masonryProps}>{children}</Masonry>
    </div>
  )
}

LegoGrid.defaultProps = {
  className: null,
  masonryProps: {},
}

LegoGrid.Item = ({ children, className, ...props }) => (
  <div {...props} className={classNames('k-LegoGrid__item', className)}>
    <div className="k-LegoGrid__item__content">{children}</div>
  </div>
)

LegoGrid.Item.defaultProps = {
  className: null,
}
