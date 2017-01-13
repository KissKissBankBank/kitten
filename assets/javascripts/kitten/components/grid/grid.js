import React from 'react'
import classNames from 'classnames'

const mediaQueries = ['xxs', 'xs', 's', 'm', 'l', 'xl']

export class Grid extends React.Component {
  render() {
    return (
      <div className="k-Grid">
        { this.props.children }
      </div>
    )
  }
}

export class GridCol extends React.Component {
  classByMediaQuery() {
    const props = this.props
    let classNamesByMediaQuery = {}

    mediaQueries.forEach(mediaQuery => {
      const col = props[`col-${mediaQuery}`]
      const offset = props[`offset-${mediaQuery}`]

      classNamesByMediaQuery = classNames(
        classNamesByMediaQuery,
        { [`k-Grid__col--${col}@${mediaQuery}`]: col },
        { [`k-Grid__col--offset-${offset}@${mediaQuery}`]: offset },
      )
    })

    return classNamesByMediaQuery
  }

  render() {
    const gridClassNames = classNames(
      { [`k-Grid__col--${this.props.col}`]: this.props.col },
      { [`k-Grid__col--offset-${this.props.offset}`]: this.props.offset },
      this.classByMediaQueries(),
    )

    return (
      <div className={ gridClassNames }>
        { this.props.children }
      </div>
    )
  }
}

GridCol.defaultProps = {
  col: '12',
}
