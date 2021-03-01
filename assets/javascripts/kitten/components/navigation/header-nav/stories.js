import React from 'react'
import styled from 'styled-components'
import { boolean, text } from '@storybook/addon-knobs'
import { LendopolisHeaderNavStory } from './stories/lendopolis'
import { KissKissBankBankHeaderNavStory } from './stories/kisskissbankbank'
import { MinimalistHeaderNavStory } from './stories/minimalist'

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
  title: 'Navigation/HeaderNav',
  component: LendopolisHeaderNavStory,
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

export const Minimalist = () => (
  <Container whiteBg={boolean('White bg', false)}>
    <MinimalistHeaderNavStory
      isFixed={boolean('Is fixed', true)}
      text={text('Texte', 'Ma page mentor')}
      subText={text('Sous texte', 'Créé le 12/02/2020')}
    />
  </Container>
)
