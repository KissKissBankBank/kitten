import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import HeaderNav from './index'
import { LendopolisLogo } from '../../../components/logos/lendopolis-logo'
import { HeaderMenu } from '../../../components/menus/header-menu'
import { SearchIcon } from '../../../components/icons/search-icon'
import COLORS from '../../../constants/colors-config'

const Container = styled.div`
  height: 200vh;
  background: #eaeaea;
`

const InnerBurgerMenu = () => (
  <HeaderMenu borderSide="right" largeItem noBorder>
    <HeaderNav.Hidden min="l">
      <HeaderMenu.Item href="#">Comment investir</HeaderMenu.Item>
      <HeaderMenu.Item href="#" className="is-selected">
        Découvrez les projets
      </HeaderMenu.Item>
      <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    </HeaderNav.Hidden>

    <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
    <HeaderMenu.Item href="#" isSelected>
      Item 2 (actif)
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Item 3</HeaderMenu.Item>
    <HeaderMenu.Item href="#" modifier="light">
      Item 4 (light)
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#222" />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      Item 5
    </HeaderMenu.Item>
  </HeaderMenu>
)

const Navigation = () => (
  <>
    <HeaderNav.Nav.Item href="#">Comment investir</HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#" className="is-selected">
      Découvrez les projets
    </HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#">Blog</HeaderNav.Nav.Item>
  </>
)

storiesOf('Navigation/HeaderNav', module).add('default', () => (
  <Container>
    <HeaderNav id="kkbbAndCoHeaderNav">
      <HeaderNav.BurgerMenu>
        <InnerBurgerMenu />
      </HeaderNav.BurgerMenu>

      <HeaderNav.Logo>
        <LendopolisLogo primaryColor="#000" />
      </HeaderNav.Logo>

      <HeaderNav.Hidden max="m">
        <HeaderNav.Nav>
          <Navigation />
        </HeaderNav.Nav>
      </HeaderNav.Hidden>

      <HeaderNav.Right>
        <HeaderNav.Button
          icon={<SearchIcon />}
          backgroundColor={COLORS.background3}
          backgroundColorHover={COLORS.line1}
          color={COLORS.font1}
          text="Rechercher"
          href="#"
          hiddenText={{ max: 'm' }}
        />

        <HeaderNav.Button
          icon={
            <HeaderNav.Hidden min="s">
              <SearchIcon />
            </HeaderNav.Hidden>
          }
          backgroundColor={COLORS.primary1}
          backgroundColorHover={COLORS.primary2}
          color={COLORS.background1}
          text="Se connecter / S'inscrire"
          href="#"
          hiddenText={{ max: 'xs' }}
        />
      </HeaderNav.Right>
    </HeaderNav>
  </Container>
))
