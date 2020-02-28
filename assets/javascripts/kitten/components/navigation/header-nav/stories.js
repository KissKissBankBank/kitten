import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import HeaderNav from './index'
import { LendopolisLogo } from '../../../components/logos/lendopolis-logo'
import { KissKissBankBankLogo } from '../../../components/logos/kisskissbankbanklogo'
import { HeaderMenu } from '../../../components/menus/header-menu'
import { SearchIcon } from '../../../components/icons/search-icon'
import COLORS from '../../../constants/colors-config'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { AvatarWithTextAndBadge } from '../../../components/avatar/avatar-with-text-and-badge'

const Container = styled.div`
  height: 200vh;
  background: #eaeaea;
`

const LendopolisInnerBurgerMenu = () => (
  <HeaderMenu borderSide="right" largeItem noBorder>
    <HeaderNav.Hidden min="l">
      <HeaderMenu.Item href="#">Comment investir</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Découvrez les projets</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    </HeaderNav.Hidden>

    <HeaderMenu.Item href="#">Comment emprunter</HeaderMenu.Item>
    <HeaderMenu.Item href="#" isSelected>
      À propos
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
  </HeaderMenu>
)

const LendopolisInnerUserMenu = () => (
  <HeaderMenu noBorder>
    <HeaderMenu.Item href="#">Mon espace personnel</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Déconnexion</HeaderMenu.Item>
  </HeaderMenu>
)

const KissKissBankbankInnerBurgerMenu = () => (
  <HeaderMenu borderSide="right" largeItem noBorder>
    <HeaderNav.Hidden min="l">
      <HeaderMenu.Item href="#">Lancez votre projet</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Découvrez les projets</HeaderMenu.Item>
    </HeaderNav.Hidden>

    <HeaderMenu.Item href="#" isSelected>
      Vos questions
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#000" />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#000" />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#000" />
    </HeaderMenu.Item>
  </HeaderMenu>
)

const LendopolisNavigation = () => (
  <>
    <HeaderNav.Nav.Item href="#">Lancez votre projet</HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#" className="is-selected">
      Découvrez les projets
    </HeaderNav.Nav.Item>
  </>
)

const KissKissBankBankNavigation = () => (
  <>
    <HeaderNav.Nav.Item href="#">Comment investir</HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#" className="is-selected">
      Découvrez les projets
    </HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#">Blog</HeaderNav.Nav.Item>
  </>
)

storiesOf('Navigation/HeaderNav', module)
  .add('Lendopolis', () => (
    <Container>
      <HeaderNav id="kkbbAndCoHeaderNav" isLogged={true}>
        <HeaderNav.BurgerMenu>
          <LendopolisInnerBurgerMenu />
        </HeaderNav.BurgerMenu>

        <HeaderNav.Logo>
          <LendopolisLogo primaryColor="#000" />
        </HeaderNav.Logo>

        <HeaderNav.Hidden max="m">
          <HeaderNav.Nav>
            <LendopolisNavigation />
          </HeaderNav.Nav>
        </HeaderNav.Hidden>

        <HeaderNav.Right>
          <HeaderNav.UserMenu>
            <HeaderNav.UserMenu.Button>
              <AvatarWithTextAndBadge
                imageProps={{
                  text: (
                    <Text size="micro" weight="bold">
                      JC
                    </Text>
                  ),
                  backgroundColor: '#002e7d',
                }}
                notifications="2"
                text={
                  <Text lineHeight="normal" weight="bold">
                    Jean Charles
                  </Text>
                }
                subText={
                  <Text weight="light">Solde : 1&nbsp;000,97&nbsp;€</Text>
                }
              />
            </HeaderNav.UserMenu.Button>
            <HeaderNav.UserMenu.Navigation>
              <LendopolisInnerUserMenu />
            </HeaderNav.UserMenu.Navigation>
          </HeaderNav.UserMenu>

          <HeaderNav.Unlogged>
            <HeaderNav.Button
              backgroundColor={COLORS.background3}
              backgroundColorHover={COLORS.line1}
              color={COLORS.font1}
              text="Se connecter"
              href="#"
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
              text="S'inscrire"
              href="#"
              hiddenText={{ max: 'xs' }}
            />
          </HeaderNav.Unlogged>
        </HeaderNav.Right>
      </HeaderNav>
    </Container>
  ))

  .add('KissKissBankBank', () => (
    <Container>
      <HeaderNav id="kkbbAndCoHeaderNav" isLogged={false}>
        <HeaderNav.Logo>
          <KissKissBankBankLogo color="#000" />
        </HeaderNav.Logo>

        <HeaderNav.Hidden max="m">
          <HeaderNav.Nav>
            <LendopolisNavigation />
          </HeaderNav.Nav>
        </HeaderNav.Hidden>
        <HeaderNav.BurgerMenu>
          <KissKissBankbankInnerBurgerMenu />
        </HeaderNav.BurgerMenu>

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

          <HeaderNav.Unlogged>
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
          </HeaderNav.Unlogged>
        </HeaderNav.Right>
      </HeaderNav>
    </Container>
  ))

  .add('Minimalist', () => (
    <Container>
      <HeaderNav id="kkbbAndCoHeaderNav" isLogged={false}>
        <HeaderNav.Logo>
          <KissKissBankBankLogo color="#000" />
        </HeaderNav.Logo>

        <HeaderNav.Centered display="column">
          <HeaderNav.Hidden max="s">
            <Text
              style={{ margin: 0 }}
              tag="h1"
              size="tiny"
              weight="bold"
              transform="uppercase"
              lineHeight="normal"
            >
              Ma page mentor
            </Text>
            <Text size="tiny" lineHeight="normal">
              Créé le 12/02/2020
            </Text>
          </HeaderNav.Hidden>
        </HeaderNav.Centered>

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

          <HeaderNav.Unlogged>
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
          </HeaderNav.Unlogged>
        </HeaderNav.Right>
      </HeaderNav>
    </Container>
  ))
