import React from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot } from 'radium'
import { ScreenConfig } from 'kitten/constants/screen-config'

class GridBase extends React.Component {
  render() {
    const { className, ...others } = this.props
    const gridClassName = classNames('k-Grid', className)

    return (
      <div className={ gridClassName } { ...others } />
    )
  }
}

class GridColBase extends React.Component {
  classByMediaQuery() {
    const props = this.props

    const classNamesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase()
      const col = props[`col-${mediaQuery}`]
      const offset = props[`offset-${mediaQuery}`]

      return classNames(
        classNamesByMediaQuery,
        {
          [`k-Grid__col--${col}@${mediaQuery}`]: col,
          [`k-Grid__col--offset-${offset}@${mediaQuery}`]: offset,
        },
      )
    })

    return classNamesByMediaQuery
  }

  render() {
    const { col, offset, className, ...others } = this.props

    const gridClassNames = classNames(
      {
        [`k-Grid__col--${col}`]: col,
        [`k-Grid__col--offset-${offset}`]: offset,
      },
      this.classByMediaQuery(),
      className,
    )

    // Remove unknown props in others.
    Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase()
      delete(others[`col-${mediaQuery}`])
      delete(others[`offset-${mediaQuery}`])
    })

    return (
      <div { ...others } className={ gridClassNames } />
    )
  }
}

GridBase.defaultProps = {
  className: null,
}

GridColBase.defaultProps = {
  col: '12',
  offset: null,
  className: null,
}

export const Grid = Radium(GridBase)
export const GridCol = Radium(GridColBase)
