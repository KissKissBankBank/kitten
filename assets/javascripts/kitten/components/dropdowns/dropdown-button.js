import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class DropdownButton extends React.Component {
  render() {
    const { className, isExpanded, ...rest } = this.props
    const buttonClassName = classNames('k-Dropdown__button', className)

    return (
      <button
        ref="dropdownButton"
        type="button"
        className={buttonClassName}
        aria-haspopup="true"
        aria-expanded={isExpanded}
        {...rest}
      />
    )
  }
}

DropdownButton.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
}

DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
  isExpanded: false,
}

// DEPRECATED: do not use default export.
export default DropdownButton
