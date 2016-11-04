import React from 'react'
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
  onClick: React.PropTypes.func,
  isExpanded: React.PropTypes.bool,
}

DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
  isExpanded: false,
}

export default DropdownButton
