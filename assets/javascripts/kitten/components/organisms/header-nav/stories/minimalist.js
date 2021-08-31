import React from 'react'
import HeaderNav from '../index'
import {
  KissKissBankBankLogo,
  SearchIcon,
  COLORS,
  Text,
  parseHtml,
} from '../../../..'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'

export const MinimalistHeaderNavStory = (args) => (
  <HeaderNav
    id={HEADER_NAV_ID}
    {...args}
    quickAccessProps={{
      href: '#mainContent',
      text: 'Aller au contenu principal',
      zIndex: 300,
    }}
  >
    <HeaderNav.Logo href="#">
      <KissKissBankBankLogo />
    </HeaderNav.Logo>

    <HeaderNav.Centered display="column">
      <HeaderNav.Hidden max="s">
        {text && (
          <Text
            style={{ margin: 0 }}
            tag="h1"
            size="tiny"
            weight="bold"
            transform="uppercase"
            lineHeight="normal"
          >
            {parseHtml(text)}
          </Text>
        )}
        {subText && (
          <Text weight="light" size="tiny" lineHeight="normal">
            {parseHtml(subText)}
          </Text>
        )}
      </HeaderNav.Hidden>
    </HeaderNav.Centered>

    <HeaderNav.Right>
      <HeaderNav.LoggedOut>
        <HeaderNav.Button
          icon={
            <HeaderNav.Hidden min="s">
              <SearchIcon />
            </HeaderNav.Hidden>
          }
          backgroundColor={COLORS.primary1}
          backgroundColorHover={COLORS.primary2}
          color={COLORS.background1}
          text="Sauvegarder"
          href="#"
          hiddenText={{ max: 'xs' }}
        />
      </HeaderNav.LoggedOut>
    </HeaderNav.Right>
  </HeaderNav>
)
