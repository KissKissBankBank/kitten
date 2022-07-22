import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
export const useDropdown = _ref => {
  let {
    dropdownContentWidth,
    dropdownAnchorSide,
    callOnToggle,
    closeEvents,
    isExpanded,
    buttonId = 'button',
    inputId = 'input',
    menuId = 'menu',
    dropdownClass = 'k-HeaderNavDropdown'
  } = _ref;
  const dropdownRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdownInputRef = useRef(null);
  const [isDropdownExpanded, setDropdownExpandedState] = useState(!!isExpanded);

  const handleButtonClick = () => {
    setDropdownExpandedState(currentValue => !currentValue);
  };

  const handleInputChange = changeEvent => {
    setDropdownExpandedState(changeEvent.target.value.length > 0);
  };

  const closeDropdown = () => {
    setDropdownExpandedState(false);
  };

  const handleKeydown = e => {
    if (e.key === 'Escape') {
      closeDropdown();
    }

    if (e.key === 'Tab') {
      // Wait 5ms for the activeElement to change
      setTimeout(() => {
        if (dropdownRef.current && !dropdownRef.current.contains(document.activeElement)) {
          closeDropdown();
        }
      }, 5);
    }
  };

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    callOnToggle({
      isExpanded: isDropdownExpanded,
      expandBy: isDropdownExpanded ? buttonId : null
    });
    if (!isDropdownExpanded) return;
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);

    if (closeEvents) {
      closeEvents.forEach(ev => {
        window.addEventListener(ev, closeDropdown);
      });
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);

      if (closeEvents) {
        closeEvents.forEach(ev => {
          window.removeEventListener(ev, closeDropdown);
        });
      }
    };
  }, [isDropdownExpanded]);
  const dropdownProps = {
    ref: dropdownRef,
    'aria-live': 'polite',
    className: classNames(dropdownClass, {
      [dropdownClass + "--isExpanded"]: isDropdownExpanded
    })
  };
  const buttonProps = {
    ref: dropdownButtonRef,
    id: buttonId,
    'aria-controls': menuId,
    isExpanded: isDropdownExpanded,
    onClick: handleButtonClick,
    className: dropdownClass + "__button"
  };
  const inputProps = {
    ref: dropdownInputRef,
    id: inputId,
    isExpanded: isDropdownExpanded,
    onChange: handleInputChange,
    className: dropdownClass + "__input"
  };
  const returnedWidth = dropdownContentWidth === NaN ? null : dropdownContentWidth;
  const menuProps = {
    ref: dropdownContentRef,
    id: menuId,
    className: classNames(dropdownClass + "__menu", dropdownClass + "__menu--is-" + (dropdownAnchorSide || 'left')),
    style: {
      width: returnedWidth
    },
    'aria-hidden': !isDropdownExpanded
  };
  return {
    dropdownProps,
    buttonProps,
    menuProps,
    isDropdownExpanded,
    inputProps,
    openDropdown: () => setDropdownExpandedState(true),
    closeDropdown: () => setDropdownExpandedState(false)
  };
};