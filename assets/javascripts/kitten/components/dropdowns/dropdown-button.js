window.DropdownButton = function(props) {
  const { className, isExpanded, ...rest } = props
  const buttonClassName = classNames('k-Dropdown__button', props.className)

  return(
    <button
      className={ buttonClassName }
      aria-haspopup="true"
      aria-expanded={ props.isExpanded }
      { ...rest }>
    </button>
  );
}

DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: () => {}
}
