import React from 'react'
import styled from 'styled-components'
import { HeaderNav } from './index'
import { LendopolisHeaderNavStory } from './stories/lendopolis'
import { KissKissBankBankHeaderNavStory } from './stories/kisskissbankbank'
import { KissKissBankBankHeaderNavStoryNew } from './stories/kisskissbankbank-new'
import { KissKissBankBankHeaderNavStoryAgain } from './stories/kisskissbankbank-again'
import { MinimalistHeaderNavStory } from './stories/minimalist'
import { DocsPage } from 'storybook/docs-page'

const Container = styled.div`
  height: 400vh;
  background: ${({ whiteBg }) =>
    whiteBg
      ? 'white'
      : `linear-gradient(
        0deg,
        rgba(100, 100, 100, 1) 0%,
        rgba(240, 240, 240, 1) 100%
      );`};
`

const args = {
  isLogged: false,
  isFixed: true,
  size: 'regular',
  borderStyle: 'shadow',
  whiteBg: false,
}
const argTypes = {
  isLogged: { control: 'boolean' },
  isFixed: { control: 'boolean' },
  size: { control: 'inline-radio', options: ['regular', 'small'] },
  borderStyle: {
    control: 'inline-radio',
    options: ['none', 'shadow', 'border'],
  },
  whiteBg: { name: 'white bagkground (story prop)', control: 'boolean' },
}

export default {
  title: 'Organisms/HeaderNav',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'config.js',
            'components/burger-menu-next.js',
            'components/burger-menu.js',
            'components/button.js',
            'components/centered.js',
            'components/context.js',
            'components/dropdown-button.js',
            'components/dropdown.js',
            'components/hidden.js',
            'components/logged-out.js',
            'components/logged.js',
            'components/logo.js',
            'components/nav.js',
            'components/quick-access-link.js',
            'components/right.js',
            'components/search-input.js',
            'components/user-menu-next.js',
            'components/user-menu.js',
            'hooks/use-dropdown.js',
          ]}
          importString="HeaderNav"
        />
      ),
    },
  },
  decorators: [story => <>{story()}</>],
  component: HeaderNav,
  args,
  argTypes,
}

export const Lendopolis = ({ whiteBg, stickyProps, ...args }) => (
  <Container whiteBg={whiteBg}>
    <LendopolisHeaderNavStory {...args} stickyProps={stickyProps ? null : {}} />
  </Container>
)
Lendopolis.args = {
  ...args,
  stickyProps: false,
}
Lendopolis.argTypes = {
  ...argTypes,
  stickyProps: { control: 'boolean' },
}

export const KissKissBankBank = ({ whiteBg, ...args }) => (
  <Container whiteBg={whiteBg}>
    <KissKissBankBankHeaderNavStory {...args} />
  </Container>
)

export const KissKissBankBankNew = ({ whiteBg, ...args }) => (
  <Container whiteBg={whiteBg}>
    <KissKissBankBankHeaderNavStoryNew {...args} />
  </Container>
)

export const KissKissBankBankNewAgain = ({ whiteBg, ...args }) => (
  <Container whiteBg={whiteBg}>
    <KissKissBankBankHeaderNavStoryAgain {...args} />
  </Container>
)

export const Minimalist = ({ whiteBg, text, subText, ...args }) => (
  <Container whiteBg={whiteBg}>
    <MinimalistHeaderNavStory {...args} text={text} subText={subText} />
  </Container>
)
Minimalist.args = {
  ...args,
  text: 'Ma page mentor',
  subText: 'Créé le 12/02/2020',
}
Minimalist.argTypes = {
  ...argTypes,
  text: { control: 'text' },
  subText: { control: 'text' },
}
