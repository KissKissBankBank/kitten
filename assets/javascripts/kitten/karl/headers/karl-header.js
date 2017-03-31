import React from 'react'
import classNames from 'classnames'
import { KisskissIcon } from 'kitten/components/icons/kisskiss-icon'
import { InformationIcon } from 'kitten/components/icons/information-icon'
import { BurgerIcon } from 'kitten/components/icons/burger-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-con'

export const KarlHeader = () => {
  return (
    <div className="karl-Menu__header">
      <ButtonIcon className="karl-Menu__header__menu" { ...props }>
        <BurgerIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>

      <KisskissIcon className="karl-Menu__header__logo" />

      <h3 className="karl-Menu__header__title">Styleguide</h3>

      <ButtonIcon className="karl-Menu__header__about" { ...props }>
        <InformationIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>

    </div>
  )
}
