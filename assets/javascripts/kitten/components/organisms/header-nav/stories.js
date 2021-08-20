import React from 'react'
import styled from 'styled-components'
import { boolean, text, select } from '@storybook/addon-knobs'
import { LendopolisHeaderNavStory } from './stories/lendopolis'
import { KissKissBankBankHeaderNavStory } from './stories/kisskissbankbank'
import { KissKissBankBankHeaderNavStoryNew } from './stories/kisskissbankbank-new'
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
  title: 'Organisms/HeaderNav',
  component: LendopolisHeaderNavStory,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
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
