import React from 'react'
import styled from 'styled-components'
import HeaderNav from '../index'
import { LendopolisLogo } from '../../../../components/logos/lendopolis-logo'
import { KissKissBankBankLogo } from '../../../../components/logos/kisskissbankbanklogo'
import { SearchIcon } from '../../../../components/icons/search-icon'
import COLORS from '../../../../constants/colors-config'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { AvatarWithTextAndBadge } from '../../../../components/avatar/avatar-with-text-and-badge'
import domElementHelper from '../../../../helpers/dom/element-helper'
import { pxToRem } from '../../../../helpers/utils/typography'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'

export const MinimalistHeaderNavStory = ({ text, subText }) => (
  <HeaderNav
    id={HEADER_NAV_ID}
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
        <Text
          style={{ margin: 0 }}
          tag="h1"
          size="tiny"
          weight="regular"
          transform="uppercase"
          lineHeight="normal"
        >
          {text}
        </Text>
        <Text weight="light" size="tiny" lineHeight="normal">
          {subText}
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
)
