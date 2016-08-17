window.Dropdown = React.createClass({
  getDefaultProps: function() {
    return {
      // This prop is used to position the dropdown in absolute in relation with
      // a reference element (self or its parent).
      positionnedWith: 'self', // 'self' | 'parent'

      // This prop is used to fetch the right height of the reference element
      // for the dropdown position.
      positionnedWithBorder: true,

      // Button settings
      buttonContentOnExpanded: 'Close me',
      buttonContentOnCollapsed: 'Expand me',

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
    let referenceElement = this.getReferenceElement()
    let referenceElementHeight = kitten.elements.getComputedHeight(
      referenceElement,
      this.props.positionnedWithBorder
    )

    this.setState({ parentHeight: referenceElementHeight })
  },
  getReferenceElement: function() {
    if (this.props.positionnedWith == 'parent') {
      return ReactDOM.findDOMNode(this).parentNode
    }

    return ReactDOM.findDOMNode(this)
  },
  onButtonClicked: function(event) {
    event.stopPropagation()
    event.preventDefault()

    this.setState({
      isExpanded: !this.state.isExpanded
    })
  },
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
      <div className={ dropdownClassName }>
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
