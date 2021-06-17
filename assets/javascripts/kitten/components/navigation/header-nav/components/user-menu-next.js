import React, {
  cloneElement,
  useContext,
} from 'react'
import PropTypes from 'prop-types'
import { Context } from './context'
import { getReactElementsByType } from '../../../../helpers/react/react-elements'
import classNames from 'classnames'
import { DropdownButton } from './dropdown-button'
import { useDropdown } from '../hooks/use-dropdown'
import { ArrowIcon } from '../../../../components/icons/arrow-icon'

const namespace = 'kkbbAndCo'
const DROPDOWN_CLASS = `${namespace}-UserMenuNext k-HeaderNav__UserMenuNext`
const CLOSE_EVENT = `${namespace}:userMenu:close`

export const UserMenuNext = ({
  children,
  dropdownContentWidth,
  closeEvents,
  dropdownAnchorSide,
  ...props
}) => {
  const getElementById = id => () => document.getElementById(id)

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
    <div {...dropdownProps}>
      <DropdownButton
        {...buttonProps}
        style={{
          '--UserMenu-Button-backgroundColor': buttonChild.props.backgroundColor,
          '--UserMenu-Button-backgroundColorHover': buttonChild.props.backgroundColorHover,
          '--UserMenu-Button-backgroundColorActive': buttonChild.props.backgroundColorActive,
          '--UserMenu-Button-color': buttonChild.props.color,
          '--UserMenu-Button-colorHover': buttonChild.props.colorHover,
          '--UserMenu-Button-colorActive': buttonChild.props.colorActive,
        }}
        className={classNames(
          'k-HeaderNav__UserMenuButton',
          buttonChild.props.className,
          buttonProps.className,
          {
            'k-HeaderNav__UserMenuButton--hasArrow': buttonChild.props.hasArrow,
          }
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

      <div {...menuProps}>
        {cloneElement(menuChild)}
      </div>
    </div>
  )
}

UserMenuNext.propTypes = {
  dropdownContentWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  padding: PropTypes.bool,
  closeEvents: PropTypes.arrayOf(PropTypes.string),
  hasArrow: PropTypes.bool,
  dropdownAnchorSide: PropTypes.oneOf(['left', 'right']),
}

UserMenuNext.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
  closeEvents: [],
  hasArrow: false,
  dropdownAnchorSide: 'left',
}

UserMenuNext.Button = ({ children }) => <>{children}</>

UserMenuNext.Navigation = ({ children }) => <>{children}</>
