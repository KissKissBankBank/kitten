import React from 'react'
import classNames from 'classnames'

export default class Button extends React.Component {
  render() {
    let buttonClassNames = classNames(
      'k-Button',
      { 'K-Button--icon': this.props.svg },
    )

    let buttonSizeClassNames = classNames(
      'k-Button',
      { 'K-Button--size': this.props.size },
    )

    return (
      <button className='k-Button' { this.props.class }
              disabled={ this.props.disabled }
              size={ buttonSizeClassNames } >
        <svg className={ buttonClassNames } </svg>
          { this.props.text }
      </button>
    )
  }
}
