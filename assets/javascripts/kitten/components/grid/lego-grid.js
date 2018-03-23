import React from 'react'
import classNames from 'classnames'
import Masonry from 'react-masonry-component'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { NUM_COLUMNS } from 'kitten/constants/grid-config'

export const LegoGrid = props => {
  const { className, masonryProps, children, ...others } = props
  const gridClassName = classNames('k-LegoGrid', className)

  return (
    <div className={ gridClassName } { ...others }>
      <Masonry { ...masonryProps }>
        { children }
      </Masonry>
    </div>
  )
}

LegoGrid.Item = ({ children, ...props }) => {
  const classByMediaQuery = () => {
    const classNamesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase()
      const col = props[`col-${mediaQuery}-up`]

      return classNames(
        classNamesByMediaQuery,
        {
          [`k-LegoGrid__item--${NUM_COLUMNS/col}col@${mediaQuery}`]: col,
        },
      )
    })

    return classNamesByMediaQuery
  }

  const itemClassName = classNames(
    'k-LegoGrid__item',
    classByMediaQuery(),
    props.className,
  )

  return (
    <div { ...props } className={ itemClassName }>
      <div className="k-LegoGrid__item__content">
        { children }
      </div>
    </div>
  )
}

LegoGrid.defaultProps = {
  className: null,
  masonryProps: {},
}

LegoGrid.Item.defaultProps = {
  className: null,
}
