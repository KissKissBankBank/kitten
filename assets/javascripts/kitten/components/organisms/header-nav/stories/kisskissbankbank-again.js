import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import HeaderNav from '../index'
import {
  KissKissBankBankLogo,
  HeaderMenu,
  EnvelopeIcon,
  GiftIcon,
  COLORS,
  Text,
  AvatarWithTextAndBadge,
  domElementHelper,
  useWindowWidth,
  useDeepCompareEffect,
  Button,
  Overlay,
  FlexWrapper,
  HorizontalCrowdfundingCard,
  ClockCircleIcon,
  CheckedCircleIcon,
  CLOSE_OVERLAY_EVENT,
  OPEN_OVERLAY_EVENT,
} from '../../../..'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))
const getComputedLeft = id =>
  domElementHelper.getComputedLeft(getElementById(id))

const InnerBurgerMenu = () => (
  <HeaderMenu borderSide="right" noBorder>
    <HeaderNav.Hidden min="l">
      <HeaderMenu.Item href="#" isSelected>
        Lancer un projet
      </HeaderMenu.Item>
      <HeaderMenu.Item href="#">Découvrir les projets</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Carte cadeau</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Vos questions</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
      <HeaderMenu.Item href="#" className="k-u-background-color-line1">
        Se déconnecter
      </HeaderMenu.Item>
      <HeaderMenu.Item href="#" className="k-u-background-color-primary5">
        Se connecter
      </HeaderMenu.Item>
    </HeaderNav.Hidden>
  </HeaderMenu>
)

const InnerUserMenu = () => (
  <HeaderMenu
    noBorder
    borderSide={false}
    backgroundColors={{
      hover: COLORS.background1,
    }}
  >
    <HeaderMenu.Item href="#">Mon profil</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Mes projets</HeaderMenu.Item> 
    <HeaderMenu.Item href="#">Mes contributions</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Modifier mon profil</HeaderMenu.Item>
    <HeaderMenu.Item href="#" className="k-u-background-color-line1">
      Se déconnecter
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#" className="k-u-background-color-primary5">
      Se connecter
    </HeaderMenu.Item>
  </HeaderMenu>
)

const Navigation = () => (
  <>
    <HeaderNav.Nav.Item href="#" smallPadding>
      Découvrir les projets
    </HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#" smallPadding>
      Lancer un projet
    </HeaderNav.Nav.Item>
  </>
)

const SearchInput = () => {
  const handleToggle = event => {
    action('handleToggle')(event)
    window.dispatchEvent(
      new Event(
        event.isDropdownExpanded ? OPEN_OVERLAY_EVENT : CLOSE_OVERLAY_EVENT,
      ),
    )
  }

  const handleInputChange = event => {
    action('handleInputChange')(event)
  }

  return (
    <HeaderNav.SearchInput
      onMenuToggle={handleToggle}
      searchInputProps={{
        placeholder: 'Rechercher un projet…',
        'aria-label': 'Rechercher un projet',
        onChange: handleInputChange,
      }}
      searchButtonProps={{
        type: 'submit',
        'aria-label': 'Voir les résultats de la recherche',
      }}
      action="#form-action#"
      method="POST"
    >
      <p className="k-u-a11y-visuallyHidden">4 résultats ont été trouvés</p>
      <FlexWrapper gap={5} padding={15}>
        <HorizontalCrowdfundingCard
          title="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
          description="Maecenas sed diam eget risus varius blandit sit amet non magna."
          progress={37}
          progressColor={COLORS.primary1}
          info={
            <div className="k-u-flex k-u-flex-alignItems-center">
              <ClockCircleIcon
                width="12"
                height="12"
                color={COLORS.background1}
                bgColor={COLORS.primary1}
                className="k-u-margin-right-noneHalf"
              />
              <Text weight="regular" size="micro" color="primary1">
                Dernier jour&nbsp;!
              </Text>
            </div>
          }
        />
        <HorizontalCrowdfundingCard
          title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          description="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          progress={100}
          progressColor={COLORS.valid}
          info={
            <div className="k-u-flex k-u-flex-alignItems-center">
              <CheckedCircleIcon
                width="12"
                height="12"
                color={COLORS.background1}
                bgColor={COLORS.valid}
                className="k-u-margin-right-noneHalf"
              />
              <Text weight="regular" size="micro" color="font1">
                Réussi
              </Text>
            </div>
          }
        />
        <HorizontalCrowdfundingCard
          title="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          description="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          progress={21}
          progressColor={COLORS.primary1}
          info={
            <div className="k-u-flex k-u-flex-alignItems-center">
              <ClockCircleIcon
                width="12"
                height="12"
                color={COLORS.background1}
                bgColor={COLORS.primary1}
                className="k-u-margin-right-noneHalf"
              />
              <Text weight="regular" size="micro">
                En cours
              </Text>
            </div>
          }
        />
        <HorizontalCrowdfundingCard
          title="Maecenas sed diam eget risus varius blandit sit amet non magna."
          description="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
          progress={60}
          progressColor={COLORS.primary1}
          info={
            <div className="k-u-flex k-u-flex-alignItems-center">
              <ClockCircleIcon
                width="12"
                height="12"
                color={COLORS.background1}
                bgColor={COLORS.primary1}
                className="k-u-margin-right-noneHalf"
              />
              <Text weight="regular" size="micro">
                En cours
              </Text>
            </div>
          }
        />
      </FlexWrapper>

      <Button
        size="tiny"
        variant="orion"
        type="submit"
        fluid
        className="k-u-margin-bottom-double k-u-margin-horizontal-double"
        style={{
          width: 'calc(100% - 40px)',
        }}
      >
        Voir les résultats de la recherche
      </Button>
    </HeaderNav.SearchInput>
  )
}

export const KissKissBankBankHeaderNavStoryAgain = ({ isLogged, size, ...args }) => {
  const [burgerMenuWidth, setBurgerMenuWidth] = useState(null)
  const windowWidth = useWindowWidth()

  useDeepCompareEffect(() => {
    setBurgerMenuWidth(
      getComputedLeft(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}Logo`),
    )
  }, [isLogged, windowWidth])

  return (
    <>
      <Overlay zIndex={1} position="fixed" />

      <HeaderNav
        className="k-HeaderNav--kkbb__only"
        id={HEADER_NAV_ID}
        quickAccessProps={{
          href: '#mainContent',
          text: 'Aller au contenu principal',
          zIndex: 300,
        }}
        isLogged={isLogged}
        size="small"
        {...args}
      >
        <HeaderNav.Hidden min="l">
          <HeaderNav.BurgerMenuNext dropdownContentWidth={burgerMenuWidth}>
            <InnerBurgerMenu />
          </HeaderNav.BurgerMenuNext>
        </HeaderNav.Hidden>

        <HeaderNav.Logo href="#">
          <HeaderNav.Hidden min="xs">
            <KissKissBankBankLogo height="25" />
          </HeaderNav.Hidden>

          <HeaderNav.Hidden max="xxs">
            <KissKissBankBankLogo />
          </HeaderNav.Hidden>
        </HeaderNav.Logo>

         <HeaderNav.Hidden max="m">
          <HeaderNav.Nav>
            <Navigation />
          </HeaderNav.Nav>
        </HeaderNav.Hidden>

        <HeaderNav.Right padded>
          <SearchInput />
  
          <HeaderNav.Logged>
            <HeaderNav.UserMenuNext dropdownAnchorSide="right" padding={false}>
              <HeaderNav.UserMenuNext.Button
                hasArrow
                backgroundColor={COLORS.background1}
                backgroundColorHover="transparent"
                backgroundColorActive="transparent"
                color={COLORS.font1}
                colorHover={COLORS.primary1}
                colorActive={COLORS.font1}
              >
                <AvatarWithTextAndBadge className="k-u-margin-left-single@xs-down">
                  <AvatarWithTextAndBadge.Image src="/kitten.jpg">
                    <AvatarWithTextAndBadge.Badge>
                      2
                    </AvatarWithTextAndBadge.Badge>
                  </AvatarWithTextAndBadge.Image>

                  <AvatarWithTextAndBadge.Text
                    className="k-u-hidden@xs-down"
                    withEllipsisOverflow={true}
                  >
                    <Text lineHeight="normal" weight="regular">
                      Jean Charles Édouard
                    </Text>
                  </AvatarWithTextAndBadge.Text>
                </AvatarWithTextAndBadge>
              </HeaderNav.UserMenuNext.Button>
              <HeaderNav.UserMenuNext.Navigation>
                <InnerUserMenu />
              </HeaderNav.UserMenuNext.Navigation>
            </HeaderNav.UserMenuNext>
          </HeaderNav.Logged>

          {/* <HeaderNav.Hidden max="m">
            <Button
              icon
              size="tiny"
              rounded
              className="k-u-margin-right-single"
            >
              <GiftIcon width={15} height={16} />
            </Button>
          </HeaderNav.Hidden> */}
          
          <HeaderNav.Hidden max="m">
            <Button
              size="tiny"
              borderRadius={100}
              className="k-u-margin-right-single"
              style={{ minWidth: 'auto', paddingLeft: '18px', paddingRight: '18px', borderRadius:'100px'}}
            >
              Blog
            </Button>
          </HeaderNav.Hidden>

          <HeaderNav.Hidden max="m">
            <Button
              icon
              size="tiny"
              rounded
              className="k-u-margin-right-single"
            >
              <EnvelopeIcon />
            </Button>
          </HeaderNav.Hidden>

          <HeaderNav.LoggedOut>

          <HeaderNav.Hidden max="m">
            <HeaderNav.Button
              backgroundColor={COLORS.background1}
              backgroundColorHover={COLORS.background1}
              color={COLORS.font1}
              colorHover={COLORS.primary1}
              text="Se connecter"
              href="#"
              smallPadding
            />
          </HeaderNav.Hidden>

          </HeaderNav.LoggedOut>

          {/* <HeaderNav.Hidden max="m">
            <Button
              size="tiny"
              modifier="helium"
              borderRadius={100}
              className="k-u-margin-left-single"
            >
              Lancer un projet
            </Button>
          </HeaderNav.Hidden> */}
        </HeaderNav.Right>
      </HeaderNav>
    </>
  )
}
