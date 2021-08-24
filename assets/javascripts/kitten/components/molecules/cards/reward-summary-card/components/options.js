import React from 'react'
import { DropdownMenu } from '../../../../../components/molecules/expand/dropdown-menu'
import COLORS from '../../../../../constants/colors-config'
import { EllipsisIcon } from '../../../../../components/graphics/icons/ellipsis-icon'

export const Options = ({ open, ...props }) => {
  return (
    <div className="k-RewardSummaryCard__options">
      <DropdownMenu
        open={open}
        menuPosition="left"
        button={({ open }) => (
          <>
            <EllipsisIcon color={COLORS.font1} />
            <span className="k-u-a11y-visuallyHidden">
              {open ? 'Click to close menu' : 'Click to open menu'}
            </span>
          </>
        )}
        className="k-u-hidden@s-down"
        {...props}
      >
        <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
        <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
        <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
        <DropdownMenu.Button type="button">Supprimer</DropdownMenu.Button>
      </DropdownMenu>
    </div>
  )
}
