import React from 'react'
import { Button } from '../../../../../components/buttons/button/button'
import { BurgerIcon } from '../../../../../components/icons/burger-icon'
import COLORS from '../../../../../constants/colors-config'

export const ExportButton = props => (
  <Button
    modifier="hydrogen"
    fluid
    className="k-u-margin-top-quadruple@s-up"
    {...props}
  >
    <BurgerIcon
      height={15}
      hoverColor={COLORS.background1}
      isActive={false}
      isAnimatedOnHover={false}
      mainColor={COLORS.font1}
      title={null}
      width={15}
    />
    <span>Exporter</span>
  </Button>
)
