import React, { useEffect } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import { LendopolisHeaderNavStory } from './stories/lendopolis'
import { KissKissBankBankHeaderNavStory } from './stories/kisskissbankbank'
import { MinimalistHeaderNavStory } from './stories/minimalist'

const Container = styled.div`
  height: 200vh;
  background: #eaeaea;
`

storiesOf('Navigation/HeaderNav', module)
  .addDecorator(withKnobs)
  .add('Lendopolis', () => (
    <Container>
      <LendopolisHeaderNavStory isLogged={boolean('Is logged', false)} />
    </Container>
  ))

  .add('KissKissBankBank', () => (
    <Container>
      <KissKissBankBankHeaderNavStory isLogged={boolean('Is logged', false)} />
    </Container>
  ))

  .add('Minimalist', () => (
    <Container>
      <MinimalistHeaderNavStory
        text={text('Texte', 'Ma page mentor')}
        subText={text('Sous texte', 'Créé le 12/02/2020')}
      />
    </Container>
  ))
