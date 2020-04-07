import React, { useRef } from 'react'
import { BurgerIcon } from '../../../../components/icons/burger-icon'
import { Dropdown } from '../../../../components/dropdowns/v2/dropdown'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'
import COLORS from '../../../../constants/colors-config'
import { Context } from './context'
import classNames from 'classnames'

const namespace = 'kkbbAndCo'
const DROPDOWN_CLASS = `${namespace}-PlatformMenu`
const CLOSE_EVENT = `${namespace}:platformMenu:close`

const ButtonIcon = props => (
  <>
    <BurgerIcon
      {...props}
      hoverColor={COLORS.font1}
      className="k-ButtonIcon__svg"
      aria-hidden="true"
    />
    <VisuallyHidden>Menu</VisuallyHidden>
  </>
)

const buttonClassNames = classNames(
  'k-Dropdown__button',
  'k-ButtonIcon',
  'k-ButtonIcon--tiny',
)

export const BurgerMenu = ({ children, dropdownContentWidth, ...props }) => {
  const dropdownComponent = useRef(null)
  const getElementById = id => () => document.getElementById(id)

  return (
    <Context.Consumer>
      {({ id, callOnToggle }) => (
        <Dropdown
          {...props}
          buttonClassName={buttonClassNames}
          buttonContentOnCollapsed={<ButtonIcon isAnimatedOnHover={true} />}
          buttonContentOnExpanded={<ButtonIcon isActive />}
          buttonId={`${id}PlateformMenu`}
          className={DROPDOWN_CLASS}
          closeEvents={[CLOSE_EVENT]}
          closeOnOuterClick={true}
          dropdownContent={children}
          dropdownContentWidth={dropdownContentWidth}
          onToggle={callOnToggle}
          positionedVerticallyWith={getElementById(id)}
          positionedWithBorder
          ref={dropdownComponent}
          refreshEvents={['resize']}
        />
      )}
    </Context.Consumer>
  )
}
