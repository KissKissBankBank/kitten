import React, { useEffect } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import { LendopolisHeaderNavStory } from './stories/lendopolis'
import { KissKissBankBankHeaderNavStory } from './stories/kisskissbankbank'
import { MinimalistHeaderNavStory } from './stories/minimalist'

const Container = styled.div`
  height: 400vh;
  background: linear-gradient(
    0deg,
    rgba(100, 100, 100, 1) 0%,
    rgba(240, 240, 240, 1) 100%
  );
`

storiesOf('Navigation/HeaderNav', module)
  .addDecorator(withKnobs)
  .add('Lendopolis', () => (
    <Container>
      <LendopolisHeaderNavStory
        isLogged={boolean('Is logged', false)}
        isFixed={boolean('Is fixed', false)}
      />
    </Container>
  ))

  .add('KissKissBankBank', () => (
    <Container>
      <KissKissBankBankHeaderNavStory
        isLogged={boolean('Is logged', false)}
        isFixed={boolean('Is fixed', false)}
      />
    </Container>
  ))

  .add('Minimalist', () => (
    <Container>
      <MinimalistHeaderNavStory
        isFixed={boolean('Is fixed', true)}
        text={text('Texte', 'Ma page mentor')}
        subText={text('Sous texte', 'Créé le 12/02/2020')}
      />
    </Container>
  ))
