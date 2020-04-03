import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import emitter from '../../helpers/utils/emitter'
import { DropdownButton } from '../../components/dropdowns/dropdown-button'
import domElementHelper from '../../helpers/dom/element-helper'

export class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      referenceElementHeight: 0,
    }

    this.handleDropdownPosition = this.handleDropdownPosition.bind(this)
    this.revertHandleClickOnLinks = this.revertHandleClickOnLinks.bind(this)
    this.close = this.close.bind(this)
  }

  componentDidMount() {
    if (domElementHelper.canUseDom()) {
      // Update dropdown content position after DOM is build.
      let referenceElementHeight = this.getReferenceElementHeight()

      this.setState({ referenceElementHeight: referenceElementHeight })
    }

    // Handle events.

    this.handleClickOnLinks()

    emitter.on('dropdown:opening:trigger', this.close)

    if (this.props.refreshEvents) {
      this.props.refreshEvents.forEach(ev => {
        window.addEventListener(ev, this.handleDropdownPosition)
      })
    }

    if (this.props.closeEvents) {
      this.props.closeEvents.forEach(ev => {
        window.addEventListener(ev, this.close)
      })
    }
  }

  componentWillUnmount() {
    this.revertHandleClickOnLinks()

    if (this.props.refreshEvents) {
      this.props.refreshEvents.forEach(ev => {
        window.removeEventListener(ev, this.handleDropdownPosition)
      })
    }

    if (this.props.closeEvents) {
      this.props.closeEvents.forEach(ev => {
        window.removeEventListener(ev, this.close)
      })
    }

    emitter.off('dropdown:opening:trigger', this.close)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Enable wrapper component to expand the dropdown.
    if (nextProps.isExpanded != this.state.isExpanded) {
      this.toggle(nextProps.isExpanded)
    }
  }

  // Component methods

  close() {
    this.setState({ isExpanded: false })
  }

  toggle(nextExpandedState) {
    if (nextExpandedState) {
      emitter.emit('dropdown:opening:trigger', this)
    }

    this.props.onToggle()

    this.setState({
      isExpanded: nextExpandedState,
    })
  }

  hasDefaultHorizontalPosition() {
    return this.props.positionedOn == 'left'
  }

  isSelfReference() {
    return typeof this.props.positionedWith == 'undefined'
  }

  getReferenceElement() {
    if (!this.isSelfReference()) return this.props.positionedWith()

    return this.refs.dropdown
  }

  getReferenceElementHeight() {
    let referenceElement = this.getReferenceElement()

    return domElementHelper.getComputedHeight(
      referenceElement,
      this.props.positionedWithBorder,
    )
  }

  getArrowPosition() {
    const defaultPosition = { position: 'absolute', top: 0 }
    const arrowHorizontalPosition = this.props.arrowHorizontalPosition

    return { ...defaultPosition, ...arrowHorizontalPosition }
  }

  getContentPosition() {
    const defaultPosition = { top: this.state.referenceElementHeight }
    const horizontalPosition = this.props.contentHorizontalPosition

    return { ...defaultPosition, ...horizontalPosition }
  }

  // Component listener callbacks

  revertHandleClickOnLinks() {
    const links = this.refs.dropdownContent.getElementsByTagName('a')

    Array.prototype.forEach.call(links, link => {
      link.removeEventListener('click', this.close)
    })
  }

  handleClickOnLinks() {
    const links = this.refs.dropdownContent.getElementsByTagName('a')

    Array.prototype.forEach.call(links, link => {
      link.removeEventListener('click', this.close)
    })
  }

  handleDropdownPosition() {
    if (domElementHelper.canUseDom()) {
      this.props.onPositionUpdate()
    }
  }

  handleButtonClick(event) {
    event.stopPropagation()
    event.preventDefault()

    this.toggle(!this.state.isExpanded)
  }

  // Rendering

  renderButtonContentElement() {
    if (this.state.isExpanded) {
      return this.props.buttonContentOnExpanded
    }

    return this.props.buttonContentOnCollapsed
  }

  renderButton() {
    if (this.props.button) return this.props.button

    return (
      <DropdownButton
        ref="dropdownButton"
        className={this.props.buttonClassName}
        id={this.props.buttonId}
        isExpanded={this.state.isExpanded}
        onClick={this.handleButtonClick.bind(this)}
      >
        {this.renderButtonContentElement()}
      </DropdownButton>
    )
  }

  renderArrow() {
    if (!this.props.dropdownListArrow) return

    const style = this.getArrowPosition()

    return (
      <span ref="arrow" style={style}>
        {this.props.dropdownListArrow}
      </span>
    )
  }

  render() {
    const button = this.renderButton()
    const dropdownClassName = classNames(
      'k-Dropdown',
      {
        'is-expanded': this.state.isExpanded,
        'k-Dropdown--asReference': this.isSelfReference(),
      },
      this.props.className,
    )

    return (
      <div ref="dropdown" className={dropdownClassName}>
        {button}
        <div
          ref="dropdownContent"
          className="k-Dropdown__content"
          style={this.getContentPosition()}
          aria-hidden="true"
          aria-labelledby={this.props.buttonId}
        >
          {this.props.dropdownContent}
          {this.renderArrow()}
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  isExpanded: PropTypes.bool,
  positionedWith: PropTypes.func,
  positionedWithBorder: PropTypes.bool,
  positionedOn: PropTypes.string,
  notifications: PropTypes.number,
  refreshEvents: PropTypes.array,
  closeEvents: PropTypes.array,
  onPositionUpdate: PropTypes.func,
}

Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,

  // Fix the dropdown on the left or on the right.
  positionedOn: 'left', // 'left' | 'right'

  // Custom horizontal position for content and content arrow.
  contentHorizontalPosition: { left: '0' },
  arrowHorizontalPosition: { left: '50%' },

  // Button settings
  buttonContentOnExpanded: 'Close me',
  buttonContentOnCollapsed: 'Expand me',

  // List of events that will trigger the update of the reference element
  // height.
  refreshEvents: [], // eg. ['resize']

  // List of events that will trigger the closure.
  closeEvents: [],

  // Called when one of the `refreshEvents` is triggered.
  onPositionUpdate: function() {},

  // Called when the dropdown is opened or closed
  onToggle: function() {},
}

// DEPRECATED: do not use default export.
export default Dropdown
