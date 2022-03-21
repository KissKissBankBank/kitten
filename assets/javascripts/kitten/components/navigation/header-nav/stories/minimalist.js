import React from 'react'
import HeaderNav from '../index'
import {
  KissKissBankBankLogo,
  SaveIcon,
  Text,
  parseHtml,
  Button,
  UsersIconNext,
} from 'kitten'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'

export const MinimalistHeaderNavStory = ({ text, subText, ...args }) => (
  <HeaderNav
    id={HEADER_NAV_ID}
    {...args}
    quickAccessProps={{
      href: '#mainContent',
      text: 'Aller au contenu principal',
      zIndex: 300,
    }}
  >
    <HeaderNav.Logo
      href="#"
      className="k-u-margin-left-double k-u-margin-left-quadruple@s-up"
    >
      <KissKissBankBankLogo tiny height={6} />
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
      <HeaderNav.Button
        icon={<SaveIcon />}
        text="Sauvegarder"
        href="#"
        hiddenText={{ max: 'xs' }}
      />
      <Button rounded modifier="helium" fit="content" mobileFit="icon" size="tiny">
        <UsersIconNext />
        <span className="k-u-hidden@s-up k-u-a11y-visuallyHidden">
          Hello world
        </span>
        <span className="k-u-hidden@xs-down">Hello world</span>
      </Button>
    </HeaderNav.Right>
  </HeaderNav>
)
