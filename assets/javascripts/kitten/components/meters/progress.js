import React from 'react'
import classNames from 'classnames'

export class Progress extends React.Component {
  render() {
    const { className,
            children,
            value,
            ...others } = this.props

    return (
      <div className={ className } { ...others }>
        { children }
      </div>
    )
  }
}

// Progress.defaultProps = {

// }
