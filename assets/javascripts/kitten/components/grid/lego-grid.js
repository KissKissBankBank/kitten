import React from 'react'
import classNames from 'classnames'
import Masonry from 'react-masonry-component'

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

LegoGrid.Item = props => {
  const itemClassName = classNames('k-LegoGrid__item', props.className)

  return (
    <div { ...props } className={ itemClassName } />
  )
}

LegoGrid.ItemContent = props => {
  const itemClassName = classNames('k-LegoGrid__item__content', props.className)

  return (
    <div { ...props } className={ itemClassName } />
  )
}

LegoGrid.defaultProps = {
  className: null,
  masonryProps: {},
}

LegoGrid.Item.defaultProps = {
  className: null,
}

LegoGrid.ItemContent.defaultProps = {
  className: null,
}
