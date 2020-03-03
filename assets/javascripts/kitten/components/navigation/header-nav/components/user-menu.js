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

  return (
    <Context.Consumer>
      {({ isLogged, id }) =>
        isLogged ? (
          <Dropdown
            ref={userDropdownRef}
            className={DROPDOWN_CLASS}
            keepInitialButtonAction={true}
            positionedVerticallyWith={getElementById(id)}
            positionedHorizontallyWith={getElementById(getButtonId(id))}
            buttonId={getButtonId(id)}
            button={button}
            buttonClassName="k-HeaderNav__UserMenuButton"
            dropdownContent={navigation}
            dropdownContentWidth={dropdownContentWidth}
            closeEvents={[CLOSE_EVENT]}
            isExpanded={false}
            refreshEvents={['resize']}
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
