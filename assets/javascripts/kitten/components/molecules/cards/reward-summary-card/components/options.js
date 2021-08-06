import React from 'react'
import { DropdownMenu } from '../../../../../components/molecules/expand/dropdown-menu'
import COLORS from '../../../../../constants/colors-config'
import { EllipsisIcon } from '../../../../../components/graphics/icons/diamond-icon'

export const Options = ({ open, ...props }) => {
  return (
    <DropdownMenu
      className="k-RewardSummary__options"
      menuPosition="left"
      button={() => <EllipsisIcon color={COLORS.font1} />}
    >
      <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
      <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
      <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
      <DropdownMenu.Button type="button">Supprimer</DropdownMenu.Button>
    </DropdownMenu>
  )
}
