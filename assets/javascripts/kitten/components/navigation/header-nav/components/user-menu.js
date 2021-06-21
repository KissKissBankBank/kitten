import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from './dropdown'
import { Context } from './context'
import { getReactElementsByType } from '../../../../helpers/react/react-elements'
import classNames from 'classnames'

const namespace = 'kkbbAndCo'
const CLOSE_EVENT = `${namespace}:userMenu:close`

export const UserMenu = ({
  children,
  dropdownContentWidth,
  padding,
  closeEvents,
  buttonProps,
  className,
  ...props
}) => {
  const userDropdownRef = useRef(null)
  const getElementById = id => () => document.getElementById(id)
  const getButtonId = id => `${id}UserMenu`
  const button = getReactElementsByType({ children, type: UserMenu.Button })[0]
  const navigation = getReactElementsByType({
    children,
    type: UserMenu.Navigation,
  })[0]

  const {
    hasArrow,
    backgroundColor,
    backgroundColorHover,
    backgroundColorActive,
    color,
    colorHover,
    colorActive,
  } = button.props

  const dropdownClassName = classNames(
    'k-HeaderNav__UserMenu',
    `${namespace}-UserMenu`,
    className,
  )

  const buttonStyles = {
    '--UserMenu-Button-backgroundColor': backgroundColor,
    '--UserMenu-Button-backgroundColorHover': backgroundColorHover,
    '--UserMenu-Button-backgroundColorActive': backgroundColorActive,
    '--UserMenu-Button-color': color,
    '--UserMenu-Button-colorHover': colorHover,
    '--UserMenu-Button-colorActive': colorActive,
  }

  const buttonClassName = classNames(
    'k-HeaderNav__UserMenuButton',
    {
      'k-HeaderNav__UserMenuButton--hasArrow': hasArrow,
      'k-HeaderNav__UserMenuButton--nopadding': !padding,
    },
  )

  return (
    <Context.Consumer>
      {({ id, callOnToggle }) => (
        <Dropdown
          {...props}
          button={button}
          buttonClassName={buttonClassName}
          buttonStyles={buttonStyles}
          buttonId={getButtonId(id)}
          className={dropdownClassName}
          closeEvents={[CLOSE_EVENT, ...closeEvents]}
          closeOnOuterClick
          dropdownContent={navigation}
          dropdownContentWidth={dropdownContentWidth}
          hasArrow={hasArrow}
          keepInitialButtonAction
          onToggle={callOnToggle}
          positionedHorizontallyWith={getElementById(getButtonId(id))}
          positionedVerticallyWith={getElementById(id)}
          ref={userDropdownRef}
          refreshEvents={['resize']}
        />
      )}
    </Context.Consumer>
  )
}

UserMenu.propTypes = {
  dropdownContentWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  padding: PropTypes.bool,
  closeEvents: PropTypes.arrayOf(PropTypes.string),
  hasArrow: PropTypes.bool,
}

UserMenu.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
  closeEvents: [],
  hasArrow: false,
}

UserMenu.Button = ({ children }) => <>{children}</>

UserMenu.Navigation = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
