import React, { useRef } from 'react'
import Dropdown from '../../../../components/dropdowns/dropdown'
import { Context } from './context'
import { getReactElementsByType } from '../../../../helpers/react/react-elements'

const namespace = 'kkbbAndCo'
const DROPDOWN_CLASS = `${namespace}-UserMenu k-HeaderNav__UserMenu`
const CLOSE_EVENT = `${namespace}:userMenu:close`

export const UserMenu = ({ children, dropdownContentWidth, ...props }) => {
  const userDropdownRef = useRef(null)
  const getElementById = id => () => document.getElementById(id)
  const getButtonId = id => `${id}UserMenu`
  const button = getReactElementsByType({ children, type: UserMenu.Button })[0]
  const navigation = getReactElementsByType({
    children,
    type: UserMenu.Navigation,
  })[0]

  const buttonClassName = (expandBy, id) => {
    const isOpen = new RegExp(expandBy).test(id)

    return [
      'k-HeaderNav__UserMenuButton',
      isOpen
        ? 'k-u-background-color-background1'
        : 'k-u-background-color-background3',
    ]
      .filter(v => !!v)
      .join(' ')
  }

  return (
    <Context.Consumer>
      {({ isLogged, id, callOnToggle, expandBy }) =>
        isLogged ? (
          <Dropdown
            ref={userDropdownRef}
            className={DROPDOWN_CLASS}
            keepInitialButtonAction={true}
            positionedVerticallyWith={getElementById(id)}
            positionedHorizontallyWith={getElementById(getButtonId(id))}
            buttonId={getButtonId(id)}
            button={button}
            buttonClassName={buttonClassName(expandBy, getButtonId(id))}
            dropdownContent={navigation}
            dropdownContentWidth={dropdownContentWidth}
            closeEvents={[CLOSE_EVENT]}
            isExpanded={false}
            refreshEvents={['resize']}
            onToggle={callOnToggle}
            closeOnOuterClick={true}
            {...props}
          />
        ) : null
      }
    </Context.Consumer>
  )
}

UserMenu.Button = ({ children }) => <>{children}</>

UserMenu.Navigation = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
