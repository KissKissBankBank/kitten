import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../../../../components/dropdowns/dropdown'
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
          ref={userDropdownRef}
          className={DROPDOWN_CLASS}
          keepInitialButtonAction
          positionedVerticallyWith={getElementById(id)}
          positionedHorizontallyWith={getElementById(getButtonId(id))}
          buttonId={getButtonId(id)}
          button={button}
          buttonClassName={buttonClassName}
          dropdownContent={navigation}
          dropdownContentWidth={dropdownContentWidth}
          closeEvents={[CLOSE_EVENT]}
          isExpanded={false}
          refreshEvents={['resize']}
          onToggle={callOnToggle}
          closeOnOuterClick={true}
          {...props}
        />
      )}
    </Context.Consumer>
  )
}

UserMenu.propTypes = {
  dropdownContentWidth: PropTypes.string,
  padding: PropTypes.bool,
}

UserMenu.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
}

UserMenu.Button = ({ children }) => <>{children}</>

UserMenu.Navigation = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
