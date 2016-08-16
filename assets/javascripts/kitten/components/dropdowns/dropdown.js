window.Dropdown = React.createClass({
  getDefaultProps: function() {
    return {
      triggerButton: {
        contentElement: {
          expanded: 'Close me',
          collapsed: 'Expand me'
        }
      },
      dropdownList: {
        items: []
      }
    }
  },
  getInitialState: function() {
    return {
      isExpanded: false
    }
  },
  componentDidMount: function() {
    // TODO: manage onResize.
    const parentSize = ReactDOM.findDOMNode(this).parentNode.getBoundingClientRect()
    this.setState({ parentHeight: parentSize.height });
  },
  renderListItem: function(item) {
    return(
      <li role="menuitem">
        { item }
      </li>
    )
  },
  renderList: function() {
    const items = this.props.dropdownList.items.map((item) => this.renderListItem(item))
    const defaultItem = ('No choice')

    return(
      <ul className={ this.props.dropdownList.className } role="menubar">
        { items.length ? items : defaultItem }
      </ul>
    )
  },
  renderButtonContentElement: function() {
    if (this.state.isExpanded) {
      return this.props.triggerButton.contentElement.expanded
    }

    return this.props.triggerButton.contentElement.collapsed
  },
  onButtonClicked: function(event) {
    event.stopPropagation()
    event.preventDefault()

    this.setState({
      isExpanded: !this.state.isExpanded
    });
  },
  render: function() {
    const dropdownStyle = this.state.isExpanded ? 'is-expanded' : ''
    const dropdownClassName = classNames(
      'k-Dropdown',
      dropdownStyle,
      this.props.className
    );

    let style = { top: this.state.parentHeight }

    return(
      <div className={ dropdownClassName }>
        <DropdownButton className={ this.props.triggerButton.className }
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
