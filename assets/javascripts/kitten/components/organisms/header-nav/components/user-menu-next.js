import React, { cloneElement, useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './context'
import { getReactElementsByType } from '../../../../helpers/react/react-elements'
import classNames from 'classnames'
import { DropdownButton } from './dropdown-button'
import { useDropdown } from '../hooks/use-dropdown'
import { ArrowIcon } from '../../../../components/graphics/icons/arrow-icon'

const namespace = 'kkbbAndCo'
const CLOSE_EVENT = `${namespace}:userMenu:close`

export const UserMenuNext = ({
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
    type: UserMenuNext.Button,
  })[0]

  const menuChild = getReactElementsByType({
    children,
    type: UserMenuNext.Navigation,
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
      className={classNames(className, dropdownProps.className)}
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
          {
            'k-HeaderNav__UserMenuButton--hasArrow': buttonChild.props.hasArrow,
            'k-HeaderNav__UserMenuButton--noPadding': !padding,
            'k-HeaderNav__UserMenuButton--noPaddingMobile': !mobilePadding,
          },
        )}
      >
        {cloneElement(buttonChild)}
        {buttonChild.props.hasArrow && (
          <ArrowIcon
            direction={isDropdownExpanded ? 'top' : 'bottom'}
            className="k-u-margin-left-single k-u-hidden@xs-down"
            color="currentColor"
          />
        )}
      </DropdownButton>

      <div {...menuProps}>{cloneElement(menuChild)}</div>
    </div>
  )
}

UserMenuNext.Button = ({ children }) => <>{children}</>
UserMenuNext.Navigation = ({ children }) => <>{children}</>

UserMenuNext.propTypes = {
  dropdownContentWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  padding: PropTypes.bool,
  mobilePadding: PropTypes.bool,
  closeEvents: PropTypes.arrayOf(PropTypes.string),
  dropdownAnchorSide: PropTypes.oneOf(['left', 'right']),
}
UserMenuNext.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
  mobilePadding: true,
  closeEvents: [],
  dropdownAnchorSide: 'left',
}

UserMenuNext.Button.propTypes = {
  hasArrow: PropTypes.bool,
}
UserMenuNext.Button.defaultProps = {
  hasArrow: false,
}

