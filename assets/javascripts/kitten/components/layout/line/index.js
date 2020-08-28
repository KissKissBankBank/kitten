import React from 'react'
import classNames from 'classnames'

export const Line = props => {
  return <div {...props} className={classNames('k-Line', props.className)} />
}

Line.Item = props => {
  return (
    <div {...props} className={classNames('k-Line__item', props.className)} />
  )
}

Line.defaultProps = {
  className: null,
  children: null,
}

Line.Item.defaultProps = {
  className: null,
  children: null,
}
