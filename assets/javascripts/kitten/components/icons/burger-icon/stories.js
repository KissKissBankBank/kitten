import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { BurgerIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import COLORS from '../../../constants/colors-config'

const StoryGrid = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Icons/BurgerIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryGrid>
        <BurgerIcon
          isActive={boolean('isActive ?', false)}
          mainColor={select(
            'mainColor',
            { default: COLORS.font1, red: '#FF0000' },
            COLORS.font1,
          )}
          hoverColor={select(
            'hoverColor',
            { default: COLORS.primary1, red: '#FF0000' },
            COLORS.primary1,
          )}
        />
      </StoryGrid>
    )
  })
