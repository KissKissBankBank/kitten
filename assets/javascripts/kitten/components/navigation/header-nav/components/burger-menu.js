import React, { useContext } from 'react'
import { BurgerIcon } from '../../../../components/graphics/icons/burger-icon'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'
import COLORS from '../../../../constants/colors-config'
import { Context } from './context'
import classNames from 'classnames'
import { useDropdown } from '../hooks/use-dropdown'
import { DropdownButton } from './dropdown-button'

const namespace = 'kkbbAndCo'
const CLOSE_EVENT = `${namespace}:platformMenu:close`

export const BurgerMenu = ({
  children,
  dropdownContentWidth,
  className,
  ...props
}) => {
  const { id, callOnToggle } = useContext(Context)

  const {
    dropdownProps,
    buttonProps,
    menuProps,
    isDropdownExpanded,
  } = useDropdown({
    dropdownContentWidth,
    callOnToggle,
    dropdownAnchorSide: 'left',
    closeEvents: [CLOSE_EVENT],
    buttonId: `${id}PlateformMenu`,
    menuId: `${id}PlateformMenu__content`,
  })

  return (
    <div
      {...dropdownProps}
      {...props}
      className={classNames(className, dropdownProps.className)}
    >
      <DropdownButton
        {...buttonProps}
        className={classNames(
          buttonProps.className,
          'k-HeaderNav__BurgerMenu__button',
          'k-ButtonIcon',
          'k-ButtonIcon--tiny',
        )}
      >
        <BurgerIcon
          isActive={isDropdownExpanded}
          hoverColor={COLORS.font1}
          className="k-ButtonIcon__svg"
          aria-hidden="true"
        />
        <VisuallyHidden>Menu</VisuallyHidden>
      </DropdownButton>

      <div {...menuProps}>{children}</div>
    </div>
  )
}
