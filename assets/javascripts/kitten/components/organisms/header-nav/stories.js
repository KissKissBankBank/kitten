import React from 'react'
import styled from 'styled-components'
import { boolean, text, select } from '@storybook/addon-knobs'
import { HeaderNav } from './index'
import { LendopolisHeaderNavStory } from './stories/lendopolis'
import { KissKissBankBankHeaderNavStory } from './stories/kisskissbankbank'
import { KissKissBankBankHeaderNavStoryNew } from './stories/kisskissbankbank-new'
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

export default {
  title: 'Organisms/HeaderNav',
  component: HeaderNav,
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
}

export const Lendopolis = () => (
  <Container whiteBg={boolean('White bg', false)}>
    <LendopolisHeaderNavStory
      isLogged={boolean('Is logged', false)}
      isFixed={boolean('Is fixed', false)}
      stickyProps={boolean('null stickyProps?') ? null : {}}
    />
  </Container>
)

export const KissKissBankBank = () => (
  <Container whiteBg={boolean('White bg', false)}>
    <KissKissBankBankHeaderNavStory
      isLogged={boolean('Is logged', false)}
      isFixed={boolean('Is fixed', false)}
    />
  </Container>
)

export const KissKissBankBankNew = () => (
  <Container whiteBg={boolean('White bg', false)}>
    <KissKissBankBankHeaderNavStoryNew
      isLogged={boolean('Is logged', false)}
      isFixed={boolean('Is fixed', false)}
      size={select('Size', ['regular', 'small'], 'small')}
      borderStyle={select(
        'BorderStyle',
        ['none', 'shadow', 'border'],
        'border',
      )}
    />
  </Container>
)

export const Minimalist = () => (
  <Container whiteBg={boolean('White bg', false)}>
    <MinimalistHeaderNavStory
      isFixed={boolean('Is fixed', true)}
      text={text('Texte', 'Ma page mentor')}
      subText={text('Sous texte', 'Créé le 12/02/2020')}
    />
  </Container>
)
