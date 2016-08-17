window.Dropdown = React.createClass({
  // Lifecycle
  getDefaultProps: function() {
    return {
      // This prop is used to position the dropdown in absolute in relation with
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

      // Dropdown list settings
      handleResize: false,
      handleCustomEvents: [],
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

    if (this.props.handleResize) {
      window.addEventListener('resize', this.handleDropdownPosition);
    }

    if (this.props.handleCustomEvents.length) {
      this.props.handleCustomEvents.forEach((ev) => {
        window.addEventListener(ev, this.handleDropdownPosition);
      })
    }
  },
  componentWillUnmount: function() {
    if (this.props.handleResize) {
      window.removeEventListener('resize', this.handleDropdownPosition);
    }

    if (this.props.handleCustomEvents.length) {
      this.props.handleCustomEvents.forEach((ev) => {
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
  onButtonClicked: function(event) {
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
    let dropdownClass = {}

    if (this.state.isExpanded) dropdownClass['is-expanded'] = true
    if (this.props.positionnedWith == 'self') {
      dropdownClass['k-Dropdown--asReference'] = true
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
                        id={ this.props.label }
                        isExpanded={ this.state.isExpanded }
                        onClick={ this.onButtonClicked.bind(this) }>
          { this.renderButtonContentElement() }
        </DropdownButton>
        <nav className="k-Dropdown__content"
             style={ style }
             role="navigation"
             aria-hidden="true"
             aria-labelledby={ this.props.label }>
          { this.renderList() }
        </nav>
      </div>
    );
  }
});
