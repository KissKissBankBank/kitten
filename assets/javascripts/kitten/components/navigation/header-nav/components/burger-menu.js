import React, { useRef } from 'react'
import { BurgerIcon } from '../../../../components/icons/burger-icon'
import { Dropdown } from '../../../../components/dropdowns/dropdown'
import COLORS from '../../../../constants/colors-config'
import { Context } from './context'

const namespace = 'kkbbAndCo'
const DROPDOWN_CLASS = `${namespace}-PlatformMenu`
const CLOSE_EVENT = `${namespace}:platformMenu:close`

const ButtonIcon = props => (
  <BurgerIcon
    {...props}
    hoverColor={COLORS.font1}
    className="k-ButtonIcon__svg"
  />
)

const buttonClassNames = [
  'k-Dropdown__button',
  'k-ButtonIcon',
  'k-ButtonIcon--tiny',
].join(' ')

export const BurgerMenu = ({ children, dropdownContentWidth, ...props }) => {
  const dropdownComponent = useRef(null)
  const getElementById = id => () => document.getElementById(id)

  return (
    <Context.Consumer>
      {({ id, callOnToggle }) => (
        <Dropdown
          ref={dropdownComponent}
          className={DROPDOWN_CLASS}
          positionedWithBorder
          positionedVerticallyWith={getElementById(id)}
          buttonId={`${id}PlateformMenu`}
          buttonClassName={buttonClassNames}
          buttonContentOnExpanded={<ButtonIcon isActive />}
          buttonContentOnCollapsed={<ButtonIcon isAnimatedOnHover={true} />}
          dropdownContent={children}
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
