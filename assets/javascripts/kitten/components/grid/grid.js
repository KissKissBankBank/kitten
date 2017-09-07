import React from 'react'
import classNames from 'classnames'

const mediaQueries = ['xxs', 'xs', 's', 'm', 'l', 'xl']

export class Grid extends React.Component {
  render() {
    const { className, ...others } = this.props
    const gridClassName = classNames('k-Grid', className)

    return (
      <div className={ gridClassName } { ...others } />
    )
  }
}

export class GridCol extends React.Component {
  classByMediaQuery() {
    const props = this.props

    const classNamesByMediaQuery = mediaQueries.map(mediaQuery => {
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
    mediaQueries.map(mediaQuery => {
      delete(others[`col-${mediaQuery}`])
      delete(others[`offset-${mediaQuery}`])
    })

    return (
      <div { ...others } className={ gridClassNames } />
    )
  }
}

Grid.defaultProps = {
  className: null,
}

GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null,
}
