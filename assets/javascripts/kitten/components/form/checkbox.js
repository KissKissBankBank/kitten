import React from 'react'
import classNames from 'classnames'
import { deprecated } from 'react-prop-types'

export class Checkbox extends React.Component {
  render() {
    const { id, children, text, ...others } = this.props

    return (
      <div className="k-Checkbox">
        <input id={ id }
               type="checkbox"
               className="k-Checkbox__input"
               { ...others } />

        <label htmlFor={ id } className="k-Checkbox__label">
          { children || text }
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  children: 'Filter 1',
}

Checkbox.propTypes = {
  text: deprecated(React.PropTypes.string, 'Use `children` prop instead')
}
