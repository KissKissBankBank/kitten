window.Dropdown = React.createClass({
  propTypes: {
    positionedWith: React.PropTypes.string,
    positionedWithBorder: React.PropTypes.bool,
    positionedOn: React.PropTypes.string,
    buttonTemplate: React.PropTypes.string,
    buttonContentOnExpanded: React.PropTypes.string,
    buttonContentOnCollapsed: React.PropTypes.string,
    refreshEvents: React.PropTypes.array,
    dropdownListArrow: React.PropTypes.bool,
    dropdownList: React.PropTypes.array,
  },
  // Lifecycle
  getDefaultProps: function() {
    return {
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
  },
  getInitialState: function() {
    return {
      isExpanded: false
    }
  },
  componentDidMount: function() {
    this.updateReferenceElementHeightState()

    if (this.props.refreshEvents.length) {
      this.props.refreshEvents.forEach((ev) => {
        window.addEventListener(ev, this.handleDropdownPosition);
      })
    }
  },
  componentWillUnmount: function() {
    if (this.props.refreshEvents.length) {
      this.props.refreshEvents.forEach((ev) => {
        window.removeEventListener(ev, this.handleDropdownPosition);
      })
    }
  },

  // Component methods
  getReferenceElement: function() {
    if (typeof(this.props.positionedWith) == 'object') {
      return this.props.positionedWith
    }

    if (this.props.positionedWith == 'parent') {
      return this.refs.dropdown.parentNode
    }

    return this.refs.dropdown
  },
  getReferenceElementHeight: function() {
    let referenceElement = this.getReferenceElement()

    return kitten.elements.getComputedHeight(
      referenceElement,
      this.props.positionedWithBorder
    )
  },
  updateReferenceElementHeightState: function() {
    let referenceElementHeight = this.getReferenceElementHeight()
    this.setState({ parentHeight: referenceElementHeight })
  },

  // Elements
  getDropdownParent: function() {
    return this.refs.dropdown ? this.refs.dropdown.parentNode : null
  },
  getDropdownContent: function() {
    return this.refs.dropdownContent ? this.refs.dropdownContent : null
  },
  getButtonImage: function() {
    if (!this.refs.buttonImageWithText) return
    return this.refs.buttonImageWithText.refs.buttonImage
  },

  // Size of elements
  getDropdownParentWidth: function() {
    return kitten.elements.getComputedWidth(this.getDropdownParent())
  },
  getButtonImageHalfWidth: function() {
    return kitten.elements.getComputedWidth(this.getButtonImage()) / 2
  },
  getDropdownContentHalfWidth: function() {
    return kitten.elements.getComputedWidth(this.getDropdownContent()) / 2
  },
  getDropdownParentPaddingLeft: function() {
    return parseInt(
      kitten.elements.getComputeStyle(this.getDropdownParent(), 'padding-left')
    )
  },

  // Component listener callbacks
  handleDropdownPosition: function(event) {
    this.updateReferenceElementHeightState()
  },
  handleButtonClick: function(event) {
    event.stopPropagation()
    event.preventDefault()

    this.updateReferenceElementHeightState()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  },

  getContentPosition: function() {
    const positionStyles = { top: this.state.parentHeight }
    let horizontalPosition = { left: 0 }

    if (this.props.positionedOn == 'right') {
      horizontalPosition = { right: 0 }
    }

    if (this.props.buttonTemplate == 'ButtonImageWithText') {
      let right = this.getDropdownParentWidth()
                  - this.getButtonImageHalfWidth()
                  - this.getDropdownContentHalfWidth()
                  - this.getDropdownParentPaddingLeft()
      right = right < 0 ? 0 : right

      horizontalPosition = { right: right + 'px' }
    }

    return Object.assign(positionStyles, horizontalPosition)
  },
  getArrowPosition: function() {
    const right = this.getDropdownParentWidth()
                  - this.getButtonImageHalfWidth()
                  - this.getDropdownParentPaddingLeft()

    return { right: right + 'px' }
  },

  // Rendering
  renderListItem: function(item) {
    return(
      <li role="menuitem">
        { item }
      </li>
    )
  },
  renderList: function() {
    const items = this.props.dropdownList.map((item) => this.renderListItem(item))
    const defaultItem = ('No choice')

    return(
      <ul className={ this.props.dropdownListClassName } role="menubar">
        { items.length ? items : defaultItem }
      </ul>
    )
  },
  renderButtonContentElement: function() {
    if (this.state.isExpanded) {
      return this.props.buttonContentOnExpanded
    }

    return this.props.buttonContentOnCollapsed
  },
  renderDropdownButton: function() {
    return (
      <DropdownButton ref="dropdownButton"
                      className={ this.props.buttonClassName }
                      id={ this.props.buttonId }
                      isExpanded={ this.state.isExpanded }
                      onClick={ this.handleButtonClick.bind(this) }>
        { this.renderButtonContentElement() }
      </DropdownButton>
    )
  },
  renderButtonImageWithText: function() {
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
  },
  renderArrow: function(positionArrow: false) {
    if (!this.props.dropdownListArrow)
      return

    let style = { right: "50%" }

    if (positionArrow) {
      style = this.getArrowPosition()
    }

    return (
      <span ref="arrow"
            className="k-UserMenu__arrow"
            style={ style }>
      </span>
    )
  },
  render: function() {
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
    const positionArrow = parseInt(style.right) == 0

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
          { this.renderArrow(positionArrow) }
        </nav>
      </div>
    );
  }
});
