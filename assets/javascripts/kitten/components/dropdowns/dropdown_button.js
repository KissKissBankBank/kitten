window.DropdownButton = function(props) {
  const buttonClassName = classNames('k-Dropdown__button', props.className)

  return(
    <button
      className={ buttonClassName }
      id={ props.id }
      aria-haspopup="true"
      aria-expanded={ props.isExpanded }
      onClick={ props.onClick }>
      { props.children }
    </button>
  );
}

DropdownButton.defaultProps = {
  children: 'Dropdown button',
  onClick: () => {}
}
