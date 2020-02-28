import React, { useRef, useState, useEffect } from 'react'
import { BurgerIcon } from '../../../../components/icons/burger-icon'
import { Dropdown } from '../../../../components/dropdowns/dropdown'
import { Context } from './context'

const namespace = 'kkbbAndCo'
const DROPDOWN_CLASS = `${namespace}-PlatformMenu`
const CLOSE_EVENT = `${namespace}:platformMenu:close`

const ButtonIcon = props => (
  <BurgerIcon
    className="k-ButtonIcon__svg"
    style={{ transition: 'none' }}
    {...props}
  />
)

const buttonClassNames = [
  'k-Dropdown__button',
  'k-ButtonIcon',
  'k-ButtonIcon--tiny',
].join(' ')

export const BurgerMenu = ({ children }) => {
  const dropdownComponent = useRef(null)
  const getElementById = id => () => document.getElementById(id)

  return (
    <Context.Consumer>
      {({ id }) => (
        <Dropdown
          ref={dropdownComponent}
          className={DROPDOWN_CLASS}
          positionedWithBorder
          positionedVerticallyWith={getElementById(id)}
          buttonId={`${id}PlateformMenu`}
          buttonClassName={buttonClassNames}
          buttonContentOnExpanded={<ButtonIcon isActive />}
          buttonContentOnCollapsed={<ButtonIcon />}
          dropdownContent={children}
          closeEvents={[CLOSE_EVENT]}
          isExpanded={false}
          refreshEvents={['resize']}
        />
      )}
    </Context.Consumer>
  )
}
