import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DropdownButton extends React.Component {
  render() {
    const { className, isExpanded, ...rest } = this.props
    const buttonClassName = classNames('k-Dropdown__button', className)

    return(
      <button ref="dropdownButton"
              className={ buttonClassName }
              aria-haspopup="true"
              aria-expanded={ isExpanded }
              { ...rest }>
      </button>
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

export default DropdownButton
