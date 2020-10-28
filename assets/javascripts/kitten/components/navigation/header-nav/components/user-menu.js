import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../../../../components/dropdowns/v2/dropdown'
import { Context } from './context'
import { getReactElementsByType } from '../../../../helpers/react/react-elements'
import classNames from 'classnames'

const namespace = 'kkbbAndCo'
const DROPDOWN_CLASS = `${namespace}-UserMenu k-HeaderNav__UserMenu`
const CLOSE_EVENT = `${namespace}:userMenu:close`

export const UserMenu = ({
  children,
  dropdownContentWidth,
  padding,
  closeEvents,
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

  const buttonClassName = classNames(
    'k-HeaderNav__UserMenuButton',
    { 'k-HeaderNav__UserMenuButton--nopadding': !padding },
    props.className,
  )

  return (
    <Context.Consumer>
      {({ id, callOnToggle }) => (
        <Dropdown
          {...props}
          button={button}
          buttonClassName={buttonClassName}
          buttonId={getButtonId(id)}
          className={DROPDOWN_CLASS}
          closeEvents={[CLOSE_EVENT, ...closeEvents]}
          closeOnOuterClick
          dropdownContent={navigation}
          dropdownContentWidth={dropdownContentWidth}
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
}

UserMenu.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
  closeEvents: [],
}

UserMenu.Button = ({ children }) => <>{children}</>

UserMenu.Navigation = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
