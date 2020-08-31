import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '../../../components/dropdowns/dropdown'
import { DropdownButton } from '../../../components/dropdowns/dropdown-button'
import domElementHelper from '../../../helpers/dom/element-helper'
import emitter from '../../../helpers/utils/emitter'
import classNames from 'classnames'
import { TOGGLE_DROPDOWN_EVENT } from '../../../helpers/dom/events'

export class PhoneDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      contentPosition: { top: 0, left: 0 },
      arrowPosition: { top: 0, left: 0 },
      positionOn: 'right',
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handlePositionUpdate = this.handlePositionUpdate.bind(this)
    this.handleOtherDropdownsOpening = this.handleOtherDropdownsOpening.bind(
      this,
    )
  }

  componentDidMount() {
    this.handlePositionUpdate()

    emitter.on(TOGGLE_DROPDOWN_EVENT, this.handleOtherDropdownsOpening)
    emitter.on('element:update', this.handlePositionUpdate)

    if (this.props.closeEvents) {
      this.props.closeEvents.forEach(ev => {
        window.addEventListener(ev, this.handleOtherDropdownsOpening)
      })
    }
  }

  componentWillUnmount() {
    if (this.props.closeEvents) {
      this.props.closeEvents.forEach(ev => {
        window.removeEventListener(ev, this.handleOtherDropdownsOpening)
      })
    }

    emitter.off(TOGGLE_DROPDOWN_EVENT, this.handleOtherDropdownsOpening)
    emitter.off('element:update', this.handlePositionUpdate)
  }

  // Component methods.

  getButtonId() {
    return 'k-PhoneDropdown'
  }

  canComputeSize() {
    return typeof this.refs.dropdown != 'undefined'
  }

  getDropdownContentElement() {
    if (!this.refs.dropdown) return
    return this.refs.dropdown.refs.dropdownContent
  }

  getDropdownButtonElement() {
    if (!this.refs.dropdownButton) return
    return this.refs.dropdownButton.refs.dropdownButton
  }

  getDropdownButtonHalfWidth() {
    return (
      domElementHelper.getComputedWidth(this.getDropdownButtonElement()) / 2
    )
  }

  getDropdownButtonPositionLeft() {
    return (
      this.getDropdownButtonElement().offsetLeft +
      this.getDropdownButtonHalfWidth()
    )
  }

  getDropdownContentElementWidth() {
    return domElementHelper.getComputedWidth(this.getDropdownContentElement())
  }

  getDropdownContentElementHalfWidth() {
    return this.getDropdownContentElementWidth() / 2
  }

  getContentHorizontalPosition() {
    // Compute dropdown position.
    let space =
      this.getDropdownButtonPositionLeft() -
      this.getDropdownContentElementHalfWidth()

    // If the interval is negative, just stick the dropdown to the reference
    // element border.

    if (window.innerWidth < space + this.getDropdownContentElementWidth()) {
      return {
        left: window.innerWidth - this.getDropdownContentElementWidth() + 'px',
      }
    } else {
      return { left: space + 'px' }
    }
  }

  getArrowHorizontalPosition() {
    const contentHorizontalPositionValue = parseInt(
      this.getContentHorizontalPosition().left,
      10,
    )

    const space =
      this.getDropdownButtonPositionLeft() - contentHorizontalPositionValue

    return { left: space + 'px' }
  }

  getDropdownButton() {
    const buttonClassName = classNames(
      'k-ButtonIcon',
      'k-ButtonIcon--hydrogen',
      'k-ButtonIcon--phone',
      this.props.buttonClassName,
    )

    return (
      <DropdownButton
        ref="dropdownButton"
        className={buttonClassName}
        id={this.props.buttonId}
        isExpanded={this.state.isExpanded}
        onClick={this.handleButtonClick}
      >
        <svg
          className="k-ButtonIcon__svg"
          viewBox="0 0 16 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.354 0C2.238 0 .496.498.207 2.268-.2 4.764 1.533 9.09
            4.047 12.202c2.49 3.084 6.305 5.63 8.86
            5.792.06.004.12.006.177.006 2.39 0 3.002-3.158
            2.694-3.548l-4.335-1.94c-.26-.15-.532-.225-.79-.225-.263
            0-.51.08-.713.24l-.866.63c-.093.034-.194.05-.302.05-1.807
            0-5.535-4.758-4.636-6.166.006-.008.79-.724.79-.724.387-.313.534-.882.347-1.444L4.275.206C4.18.088
            3.823 0 3.355 0"
          />
        </svg>
      </DropdownButton>
    )
  }

  getDropdownArrow() {
    return <span className="k-PhoneDropdown__arrow" />
  }

  updateDropdownContentPosition() {
    this.setState({
      contentHorizontalPosition: this.getContentHorizontalPosition(),
    })
  }

  updateDropdownArrowPosition() {
    this.setState({
      arrowHorizontalPosition: this.getArrowHorizontalPosition(),
    })
  }

  // Component listener callbacks.

  handlePositionUpdate() {
    if (this.canComputeSize()) {
      this.updateDropdownContentPosition()
      this.updateDropdownArrowPosition()
    }
  }

  handleButtonClick(event) {
    event.stopPropagation()
    event.preventDefault()

    this.setState({ isExpanded: !this.state.isExpanded })
  }

  handleOtherDropdownsOpening(openedDropdown) {
    if (openedDropdown != this.refs.dropdown) {
      this.setState({ isExpanded: false })
    }
  }

  // Rendering.

  render() {
    const { dropdownList, ...otherProps } = this.props

    return (
      <Dropdown
        ref="dropdown"
        button={this.getDropdownButton()}
        dropdownContent={this.props.dropdownContent}
        dropdownListArrow={this.getDropdownArrow()}
        contentHorizontalPosition={this.state.contentHorizontalPosition}
        arrowHorizontalPosition={this.state.arrowHorizontalPosition}
        isExpanded={this.state.isExpanded}
        buttonId={this.getButtonId()}
        onPositionUpdate={this.handlePositionUpdate}
        {...otherProps}
      />
    )
  }
}

PhoneDropdown.propTypes = {
  buttonClassName: PropTypes.string,
  positionedWith: PropTypes.func,
  positionedWithBorder: PropTypes.bool,
  refreshEvents: PropTypes.array,
  closeEvents: PropTypes.array,
  onPositionUpdate: PropTypes.func,
}

PhoneDropdown.defaultProps = {
  // Position.
  positionedWithBorder: false,

  // Button classes.
  buttonClassName: '',

  // Add custom value to compute horizontal position.
  spaceAroundGrid: 0,

  // Notifications count on badge.
  buttonNotifications: 0,
}

// DEPRECATED: do not use default export.
export default PhoneDropdown
