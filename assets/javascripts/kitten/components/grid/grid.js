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
  classByMediaQueries() {
    let classNamesByMediaQueries = {}
    const props = this.props

    mediaQueries.forEach(mediaQuery => {
      const col = props[`col-${mediaQuery}`]
      const offset = props[`offset-${mediaQuery}`]

      classNamesByMediaQueries = classNames(
        classNamesByMediaQueries,
        { [`k-Grid__col--${col}@${mediaQuery}`]: col },
        { [`k-Grid__col--offset-${offset}@${mediaQuery}`]: offset },
      )
    })

    return classNamesByMediaQueries
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
