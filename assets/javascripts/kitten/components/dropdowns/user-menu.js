import React from 'react'
import Dropdown from 'kitten/components/dropdowns/dropdown'
import ButtonImageWithTextAndBadge from
  'kitten/components/buttons/button-image-with-text-and-badge'
import SimpleList from 'kitten/components/lists/simple-list'
import domElementHelper from 'kitten/helpers/dom/element-helper'
import objectAssign from 'core-js/library/fn/object/assign'

class UserMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      contentPositionValue: { top: 0, left: 0 },
      arrowPositionValue: { top: 0, left: 0 },
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handlePositionUpdate =
      this.handlePositionUpdate.bind(this)
  }

  componentDidMount() {
    this.handlePositionUpdate()
  }

  // Component methods.

  getButtonId() {
    return 'k-UserMenu'
  }

  canComputeSize() {
    return typeof this.refs.dropdown != 'undefined'
  }

  getDropdownContainer() {
    return this.refs.dropdown.refs.dropdown.parentNode
  }

  getDropdownContainerWidth() {
    return domElementHelper.getComputedWidth(this.getDropdownContainer())
  }

  getButtonImageElement() {
    return this.refs.dropdownButton.refs.buttonImage
  }

  getButtonImageElementHalfWidth() {
    return domElementHelper.getComputedWidth(this.getButtonImageElement()) / 2
  }

  getDropdownContentElement() {
    return this.refs.dropdown.refs.dropdownContent
  }

  getDropdownContentElementHalfWidth() {
    return domElementHelper.getComputedWidth(this.getDropdownContentElement()) / 2
  }

  getContentHorizontalPosition() {
    // Compute dropdown position depending on the button image position.
    let space = this.getDropdownContainerWidth()
                + this.props.spaceAroundGrid
                - this.getButtonImageElementHalfWidth()
                - this.getDropdownContentElementHalfWidth()

    // If the interval is negative, just stick the dropdown to the reference
    // element border.
    space = space < 0 ? 0 : space

    return space + 'px'
  }

  getArrowHorizontalPosition() {
    const contentHorizontalPositionValue = parseInt(
      this.getContentHorizontalPosition(),
      10
    )

    // Compute arrow position depending on the button image position.
    const space = this.getDropdownContainerWidth()
                  + this.props.spaceAroundGrid
                  - this.getButtonImageElementHalfWidth()
                  - contentHorizontalPositionValue

    return space + 'px'
  }

  getDropdownContent() {
    return (
      <SimpleList className="k-UserMenu k-UserMenu--withoutBorderTop"
                  role="menubar"
                  list={ this.props.dropdownList } />
    )
  }

  getDropdownButton() {
    return (
      <ButtonImageWithTextAndBadge
        ref="dropdownButton"
        className={ this.props.buttonClassName }
        id={ this.getButtonId() }
        isExpanded={ this.state.isExpanded }
        onClick={ this.handleButtonClick }
        srcImg={ this.props.buttonImgSrc }
        widthImg={ this.props.buttonImgWidth }
        heightImg={ this.props.buttonImgHeight }
        altImg={ this.props.buttonImgAlt }
        text={ this.props.buttonText }
        title={ this.props.buttonTitle }
        notifications={ this.props.buttonNotifications }
        textClassName="k-Header__userMenuText--withEllipsis" />
    )
  }

  getDropdownArrow() {
    return (<span className="k-UserMenu__arrow" />)
  }

  updateDropdownContentPositionValue() {
    this.setState({
      contentHorizontalPositionValue: this.getContentHorizontalPosition()
    })
  }

  updateDropdownArrowPositionValue() {
    this.setState({
      arrowHorizontalPositionValue: this.getArrowHorizontalPosition()
    })
  }

  // Component listener callbacks.

  handlePositionUpdate() {
    if (this.canComputeSize()) {
      this.updateDropdownContentPositionValue()
      this.updateDropdownArrowPositionValue()
    }
  }

  handleButtonClick(event) {
    event.stopPropagation()
    event.preventDefault()

    this.setState({ isExpanded: !this.state.isExpanded })
  }

  // Rendering.

  render() {
    const { dropdownList, ...otherProps } = this.props

    return (
      <Dropdown ref="dropdown"
                button={ this.getDropdownButton() }
                dropdownContent={ this.getDropdownContent() }
                dropdownListArrow={ this.getDropdownArrow() }
                contentHorizontalPositionValue={
                  this.state.contentHorizontalPositionValue
                }
                arrowHorizontalPositionValue={
                  this.state.arrowHorizontalPositionValue
                }
                isExpanded={ this.state.isExpanded }
                buttonId={ this.getButtonId() }
                onPositionUpdate={
                  this.handlePositionUpdate
                }
                { ...otherProps } />
    )
  }
}

UserMenu.propTypes = {
  buttonClassName: React.PropTypes.string,
  buttonImgSrc: React.PropTypes.string,
  buttonImgWidth: React.PropTypes.number,
  buttonImgHeight: React.PropTypes.number,
  buttonImgAlt: React.PropTypes.string,
  buttonText: React.PropTypes.string,
  buttonTitle: React.PropTypes.string,
  dropdownList: React.PropTypes.array,
  positionedWith: React.PropTypes.func,
  positionedWithBorder: React.PropTypes.bool,
  positionedOn: React.PropTypes.string,
  notifications: React.PropTypes.number,
  refreshEvents: React.PropTypes.array,
  onPositionUpdate: React.PropTypes.func,
}

UserMenu.defaultProps = {
  // Add custom value to compute horizontal position
  spaceAroundGrid: 0,

  // Notifications count on badge.
  buttonNotifications: 0,
}

export default UserMenu
