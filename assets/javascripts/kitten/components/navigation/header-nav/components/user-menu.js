import React, { cloneElement, useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './context'
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements'
import classNames from 'classnames'
import { DropdownButton } from './dropdown-button'
import { useDropdown } from '../hooks/use-dropdown'
import { ArrowIcon } from '../../../graphics/icons/arrow-icon'

const namespace = 'kkbbAndCo'
const CLOSE_EVENT = `${namespace}:userMenu:close`

export const UserMenu = ({
  children,
  dropdownContentWidth,
  closeEvents,
  dropdownAnchorSide,
  className,
  padding,
  mobilePadding,
  ...props
}) => {
  const { id, callOnToggle } = useContext(Context)

  const buttonChild = getReactElementsByType({
    children,
    type: UserMenu.Button,
  })[0]

  const menuChild = getReactElementsByType({
    children,
    type: UserMenu.Navigation,
  })[0]

  const {
    dropdownProps,
    buttonProps,
    menuProps,
    isDropdownExpanded,
  } = useDropdown({
    dropdownContentWidth,
    callOnToggle,
    dropdownAnchorSide,
    closeEvents: [CLOSE_EVENT, ...closeEvents],
    buttonId: `${id}__UserMenu__Button`,
    menuId: `${id}__UserMenu__Menu`,
  })

  return (
    <div
      {...dropdownProps}
      {...props}
      className={classNames(
        'k-HeaderNav__UserMenu',
        className,
        dropdownProps.className,
      )}
    >
      <DropdownButton
        {...buttonProps}
        style={{
          '--UserMenu-Button-backgroundColor':
            buttonChild.props.backgroundColor || null,
          '--UserMenu-Button-backgroundColorHover':
            buttonChild.props.backgroundColorHover || null,
          '--UserMenu-Button-backgroundColorActive':
            buttonChild.props.backgroundColorActive || null,
          '--UserMenu-Button-color': buttonChild.props.color || null,
          '--UserMenu-Button-colorHover': buttonChild.props.colorHover || null,
          '--UserMenu-Button-colorActive':
            buttonChild.props.colorActive || null,
        }}
        className={classNames(
          'k-HeaderNav__UserMenuButton',
          buttonChild.props.className,
          buttonProps.className,
        )}
      >
        {cloneElement(buttonChild)}
        <ArrowIcon
          direction={isDropdownExpanded ? 'top' : 'bottom'}
          className="k-u-margin-left-single k-u-hidden@xs-down"
          color="currentColor"
        />
      </DropdownButton>

      <div {...menuProps}>{cloneElement(menuChild)}</div>
    </div>
  )
}

UserMenu.Button = ({ children }) => <>{children}</>
UserMenu.Navigation = ({ children }) => <>{children}</>

UserMenu.propTypes = {
  dropdownContentWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  padding: PropTypes.bool,
  mobilePadding: PropTypes.bool,
  closeEvents: PropTypes.arrayOf(PropTypes.string),
  dropdownAnchorSide: PropTypes.oneOf(['left', 'right']),
}
UserMenu.defaultProps = {
  dropdownContentWidth: null,
  closeEvents: [],
  dropdownAnchorSide: 'left',
}
