import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { ButtonGroup } from './button-group'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol>
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

storiesOf('Buttons/ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <ButtonGroup
          buttons={[
            { key: 1, name: 'Button1' },
            { key: 2, name: 'Button2' },
            { key: 3, name: 'Button3' },
          ]}
        />
      </StoryContainer>
    )
  })
