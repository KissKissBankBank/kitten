import React from 'react'
import classNames from 'classnames'
import { KissKissBankBankLogo } from 'kitten/karl/logos/kisskissbankbanklogo'
import { CrossIcon } from 'kitten/components/icons/cross-icon'
import { MenuIcon } from 'kitten/components/icons/menu-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Header,
         HeaderItems,
         HeaderItem } from 'kitten/components/headers/header'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { HeaderTitles } from 'kitten/components/headers/header-titles'

export const KarlMenuHeader = props => (
  <Grid>
    <GridCol col="12">
      <Header className="karl-Header karl-Menu__header"
              fixed>
        <HeaderItems>
          <HeaderItem>
            <ButtonIcon onClick={ props.onButtonClick }
                        className="karl-Menu__header__button">
              <MenuIcon className={ classNames('k-ButtonIcon__svg',
                                               'karl-Menu__header__icon',
                                               'karl-Menu__header__icon--closed') } />
              <CrossIcon className={ classNames('k-ButtonIcon__svg',
                                                'karl-Menu__header__icon',
                                                'karl-Menu__header__icon--opened') } />
            </ButtonIcon>
          </HeaderItem>
          <HeaderItem>
            <KissKissBankBankLogo className={ classNames('k-Header__logo',
                                                         'karl-Menu__header__logo') }
                                      width="135px" />
          </HeaderItem>
          <HeaderTitles title="Styleguide"
                        className="karl-Menu__header__title" />
        </HeaderItems>
      </Header>
    </GridCol>
  </Grid>
)

KarlMenuHeader.defaultProps = {
  onButtonClick: () => {},
}
