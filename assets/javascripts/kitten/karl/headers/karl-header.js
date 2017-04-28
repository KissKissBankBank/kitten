import React from 'react'
import classNames from 'classnames'
import { KisskissIcon } from 'kitten/components/icons/kisskiss-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'
import { MenuIcon } from 'kitten/components/icons/menu-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Header,
         HeaderItems,
         HeaderItem } from 'kitten/components/headers/header'
import { HeaderTitles } from 'kitten/components/headers/header-titles'

export const KarlMenuHeader = () => (

  <Header className="karl-Header karl-Menu__header"
          fixed>
    <HeaderItems>
      <HeaderItem>
        <ButtonIcon data-karl-menu-toggle="true"
                    className="karl-Menu__header__button">
          <MenuIcon className="k-ButtonIcon__svg
                               karl-Menu__header__icon
                               karl-Menu__header__icon--closed" />
          <CrossIcon className="k-ButtonIcon__svg
                                karl-Menu__header__icon
                                karl-Menu__header__icon--opened" />
        </ButtonIcon>
      </HeaderItem>
      <HeaderItem>
        <KisskissIcon className="k-Header__logo
                                 karl-Menu__header__logo" />
      </HeaderItem>
      <HeaderTitles title="Styleguide"
                    className="karl-Menu__header__title" />
    </HeaderItems>
  </Header>
)
