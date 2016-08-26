const DropdownButton = (props) => {
  const { className, isExpanded, ...rest } = props
  const buttonClassName = classNames('k-Dropdown__button', className)

  return(
    <button className={ buttonClassName }
            aria-haspopup="true"
            aria-expanded={ isExpanded }
            { ...rest }>
    </button>
  )
}

DropdownButton.propTypes = {
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
  isExpanded: React.PropTypes.bool,
}

DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
  isExpanded: false,
}

export default DropdownButton
