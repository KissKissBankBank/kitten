import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isExpanded: false }
  }

  // Lifecycle

  componentDidMount() {
    this.updateReferenceElementHeightState()

    if (this.props.refreshEvents.length) {
      this.props.refreshEvents.forEach((ev) => {
        window.addEventListener(ev, this.handleDropdownPosition);
      })
    }
  }

  componentWillUnmount() {
    if (this.props.refreshEvents.length) {
      this.props.refreshEvents.forEach((ev) => {
        window.removeEventListener(ev, this.handleDropdownPosition);
      })
    }
  }

  // Component methods

  getReferenceElement() {
    if (typeof(this.props.positionedWith) == 'object') {
      return this.props.positionedWith
    }

    if (this.props.positionedWith == 'parent') {
      return this.refs.dropdown.parentNode
    }

    return this.refs.dropdown
  }

  getReferenceElementHeight() {
    let referenceElement = this.getReferenceElement()

    return kitten.elements.getComputedHeight(
      referenceElement,
      this.props.positionedWithBorder
    )
  }

  updateReferenceElementHeightState() {
    let referenceElementHeight = this.getReferenceElementHeight()
    this.setState({ parentHeight: referenceElementHeight })
  }

  // Elements

  getDropdownParent() {
    return this.refs.dropdown ? this.refs.dropdown.parentNode : null
  }
  getDropdownContent() {
    return this.refs.dropdownContent ? this.refs.dropdownContent : null
  }
  getButtonImage() {
    if (!this.refs.buttonImageWithText) return
    return this.refs.buttonImageWithText.refs.buttonImage
  }

  // Elements size

  getDropdownParentWidth() {
    return kitten.elements.getComputedWidth(this.getDropdownParent())
  }
  getButtonImageHalfWidth() {
    return kitten.elements.getComputedWidth(this.getButtonImage()) / 2
  }
  getDropdownContentHalfWidth() {
    return kitten.elements.getComputedWidth(this.getDropdownContent()) / 2
  }
  getDropdownParentPadding(alignment: 'left') {
    return parseInt(
      kitten.elements.getComputedStyle(
        this.getDropdownParent(),
        'padding-' + alignment
      )
    )
  }

  // Component listener callbacks

  handleDropdownPosition() {
    this.updateReferenceElementHeightState()
  }

  handleButtonClick(event) {
    event.stopPropagation()
    event.preventDefault()

    this.updateReferenceElementHeightState()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  getContentPosition() {
    const positionStyles = { top: this.state.parentHeight }
    let horizontalPosition = { left: 0 }

    if (this.props.positionedOn == 'right') {
      horizontalPosition = { right: 0 }
    }

    if (this.props.buttonTemplate == 'ButtonImageWithText') {
      let space = this.getDropdownParentWidth()
                  - this.getButtonImageHalfWidth()
                  - this.getDropdownContentHalfWidth()
                  - this.getDropdownParentPadding(this.props.positionedOn)
      space = space < 0 ? 0 : space

      if (this.props.positionedOn == 'right') {
        horizontalPosition = { right: space + 'px' }
      } else {
        horizontalPosition = { left: space + 'px' }
      }

    }

    return Object.assign(positionStyles, horizontalPosition)
  }

  getArrowPosition() {
    const space = this.getDropdownParentWidth()
                  - this.getButtonImageHalfWidth()
                  - this.getDropdownParentPadding(this.props.positionedOn)

    if (this.props.positionedOn == 'right') {
      return { right: space + 'px' }
    }

    return { left: space + 'px' }
  }

  // Rendering

  renderListItem(item) {
    return(
      <li role="menuitem">
        { item }
      </li>
    )
  }

  renderList() {
    const items = this.props.dropdownList.map((item) => this.renderListItem(item))
    const defaultItem = ('No choice')

    return(
      <ul className={ this.props.dropdownListClassName } role="menubar">
        { items.length ? items : defaultItem }
      </ul>
    )
  }

  renderButtonContentElement() {
    if (this.state.isExpanded) {
      return this.props.buttonContentOnExpanded
    }

    return this.props.buttonContentOnCollapsed
  }

  renderDropdownButton() {
    return (
      <DropdownButton ref="dropdownButton"
                      className={ this.props.buttonClassName }
                      id={ this.props.buttonId }
                      isExpanded={ this.state.isExpanded }
                      onClick={ this.handleButtonClick.bind(this) }>
        { this.renderButtonContentElement() }
      </DropdownButton>
    )
  }

  renderButtonImageWithText() {
    return (
      <ButtonImageWithText ref="buttonImageWithText"
                           className={ this.props.buttonClassName }
                           id={ this.props.buttonId }
                           isExpanded={ this.state.isExpanded }
                           onClick={ this.handleButtonClick.bind(this) }
                           srcImg={ this.props.srcImg }
                           widthImg={ this.props.widthImg }
                           heightImg={ this.props.heightImg }
                           altImg={ this.props.altImg }
                           text={ this.props.text }
                           title={ this.props.title } />
    )
  }

  renderArrow(arrowPosition: false) {
    if (!this.props.dropdownListArrow) return

    const positionDefault = { position: 'absolute', top: 0 }
    const position = arrowPosition ? this.getArrowPosition() : { right: '50%' }
    const style = Object.assign(positionDefault, position)

    return (
      <span ref="arrow"
            style={ style }>
        { this.props.dropdownListArrow }
      </span>
    )
  }

  render() {
    const dropdownClass = {
      'is-expanded': this.state.isExpanded,
      'k-Dropdown--asReference': this.props.positionedWith == 'self',
    }

    const dropdownClassName = classNames(
      'k-Dropdown',
      dropdownClass,
      this.props.className
    )

    const style = this.getContentPosition()
    const arrowPosition = parseInt(style.right) == 0 ||
                          parseInt(style.left) == 0

    let renderButton = this.renderDropdownButton()

    if (this.props.buttonTemplate == 'ButtonImageWithText') {
      renderButton = this.renderButtonImageWithText()
    }

    return(
      <div ref="dropdown" className={ dropdownClassName }>
        { renderButton }
        <nav ref="dropdownContent"
             className="k-Dropdown__content"
             style={ style }
             role="navigation"
             aria-hidden="true"
             aria-labelledby={ this.props.buttonId }>
          { this.renderList() }
          { this.renderArrow(arrowPosition) }
        </nav>
      </div>
    );
  }
}

Dropdown.propTypes {
  positionedWith: React.PropTypes.string,
  positionedWithBorder: React.PropTypes.bool,
  positionedOn: React.PropTypes.string,
  buttonTemplate: React.PropTypes.string,
  buttonContentOnExpanded: React.PropTypes.string,
  buttonContentOnCollapsed: React.PropTypes.string,
  refreshEvents: React.PropTypes.array,
  dropdownListArrow: React.PropTypes.bool,
  dropdownList: React.PropTypes.array,
}

Dropdown.defaultProps = {
  // This prop is used to position the dropdown absolutely in relation with
  // a reference element (self or its parent).
  // If you use "parent" or <DOMNode>, make sure that this element has the
  // "position" property set in its css.
  // As using DOMNode is anti-pattern, you should avoid it when it is
  // possible.
  positionedWith: 'self', // 'self' | 'parent' | <DOMNode>

  // This prop is used to fetch the correct height of the reference element
  // for the dropdown position.
  positionedWithBorder: true,

  // This prop is used to fix the dropdown on left or right.
  positionedOn: 'left', // 'left' | 'right'

  // This prop is used to render with component 'ButtonImageWithText'
  // or 'DropdownButton'
  buttonTemplate: 'DropdownButton',

  // Button settings
  buttonContentOnExpanded: 'Close me',
  buttonContentOnCollapsed: 'Expand me',

  // This prop is used to update the reference element height when a
  // javascript event is triggered on the window object.
  refreshEvents: [], // eg. ['resize']

  // Dropdown list settings
  dropdownListArrow: false,
  dropdownList: []
}

export default Dropdown
