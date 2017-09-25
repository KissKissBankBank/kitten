import React, { Component } from 'react'
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

export class KarlMenuHeader extends Component {
  renderMenuList() {
    return (
      <HeaderItem>
        <ButtonIcon
          onClick={ this.props.onButtonClick }
          className="karl-Menu__header__button"
        >
          <MenuIcon className={ classNames('k-ButtonIcon__svg',
                                           'karl-Menu__header__icon',
                                           'karl-Menu__header__icon--closed') }
          />
          <CrossIcon className={ classNames('k-ButtonIcon__svg',
                                            'karl-Menu__header__icon',
                                            'karl-Menu__header__icon--opened') }
          />
        </ButtonIcon>
      </HeaderItem>
    )
  }

  renderMenuLogo() {
    return (
      <HeaderItem>
        <KissKissBankBankLogo
          className={ classNames('k-Header__logo',
                                 'karl-Menu__header__logo') }
          width="135"
        />
      </HeaderItem>
    )
  }

  renderMenu() {
    return (
      <ul className="karl-Menu__header__list">
        <li className="karl-Menu__header__element">
          <a className="karl-Menu__header__item karl-Menu__header__title" href="#">
            Styleguide
          </a>
        </li>
        <li className="karl-Menu__header__element">
          <a className="karl-Menu__header__item karl-Menu__header__about" href="#">
            About
          </a>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <Grid>
        <GridCol col="12">
          <Header
            className="karl-Header karl-Menu__header"
            fixed
          >
            <HeaderItems>
              { this.renderMenuList() }
              { this.renderMenuLogo() }
              { this.renderMenu() }
            </HeaderItems>
          </Header>
        </GridCol>
      </Grid>
    )
  }
}

KarlMenuHeader.defaultProps = {
  onButtonClick: () => {},
}
