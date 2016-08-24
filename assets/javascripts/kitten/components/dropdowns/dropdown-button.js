window.DropdownButton = React.createClass({
  propTypes: {
    children: React.PropTypes.string,
    onClick: React.PropTypes.func,
    isExpanded: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      children: 'Toggle button',
      onClick: () => {},
      isExpanded: false
    }
  },

  render: function() {
    const { className, isExpanded, ...rest } = this.props
    const buttonClassName = classNames('k-Dropdown__button', this.props.className)

    return(
      <button ref="dropdownButton"
              className={ buttonClassName }
              aria-haspopup="true"
              aria-expanded={ this.props.isExpanded }
              { ...rest }>
      </button>
    )
  }
})
