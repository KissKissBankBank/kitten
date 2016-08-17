window.Dropdown = React.createClass({
  // Lifecycle
  getDefaultProps: function() {
    return {
      // This prop is used to position the dropdown absolutely in relation with
      // a reference element (self or its parent).
      // If you use "parent" or <DOMNode>, make sure that this element has the
      // "position" property set in its css.
      // As using DOMNode is anti-pattern, you should avoid it when it is
      // possible.
      positionnedWith: 'self', // 'self' | 'parent' | <DOMNode>

      // This prop is used to fetch the correct height of the reference element
      // for the dropdown position.
      positionnedWithBorder: true,

      // Button settings
      buttonContentOnExpanded: 'Close me',
      buttonContentOnCollapsed: 'Expand me',

      // This prop is used to update the reference element height when a
      // javascript event is triggered on the window object.
      refreshEvents: [], // eg. ['resize']

      // Dropdown list settings
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
    if (typeof(this.props.positionnedWith) == 'object') {
      return this.props.positionnedWith
    }

    if (this.props.positionnedWith == 'parent') {
      return this.refs.dropdown.parentNode
    }

    return this.refs.dropdown
  },
  getReferenceElementHeight: function() {
    let referenceElement = this.getReferenceElement()

    return kitten.elements.getComputedHeight(
      referenceElement,
      this.props.positionnedWithBorder
    )
  },
  updateReferenceElementHeightState: function() {
    let referenceElementHeight = this.getReferenceElementHeight()
    this.setState({ parentHeight: referenceElementHeight })
  },

  // Component listener callbacks
  handleDropdownPosition: function(event) {
    this.updateReferenceElementHeightState()
  },
  handleButtonClick: function(event) {
    event.stopPropagation()
    event.preventDefault()

    this.setState({
      isExpanded: !this.state.isExpanded
    })
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
  render: function() {
    const dropdownClass = {
      'is-expanded': this.state.isExpanded,
      'k-Dropdown--asReference': this.props.positionnedWith == 'self',
    }

    const dropdownClassName = classNames(
      'k-Dropdown',
      dropdownClass,
      this.props.className
    )

    let style = { top: this.state.parentHeight }

    return(
      <div ref="dropdown" className={ dropdownClassName }>
        <DropdownButton className={ this.props.buttonClassName }
                        id={ this.props.buttonId }
                        isExpanded={ this.state.isExpanded }
                        onClick={ this.handleButtonClick.bind(this) }>
          { this.renderButtonContentElement() }
        </DropdownButton>
        <nav className="k-Dropdown__content"
             style={ style }
             role="navigation"
             aria-hidden="true"
             aria-labelledby={ this.props.buttonId }>
          { this.renderList() }
        </nav>
      </div>
    );
  }
});
