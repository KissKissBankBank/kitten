import React from 'react'
import classNames from 'classnames'

export class Progress extends React.Component {
  render() {
    const { className,
            name,
            children,
            value,
            max,
            text,
            ...others } = this.props

    const progressClassNames = classNames(
      'k-Progress',
      className,
    )

    return (
      <progress className={ progressClassNames } { ...others }>
        { children }
      </progress>
    )
  }
}

Progress.defaultProps = {
  text: '50%',
  value: "50",
  max: "100",
}
