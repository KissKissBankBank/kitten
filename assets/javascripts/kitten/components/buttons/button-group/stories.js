import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { ButtonGroup } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const info = {
  text: `
    # ButtonGroup
    &nbsp;

    ## Import
    ~~~js
    import { ButtonGroup } from '@kisskissbankbank/kitten/src/components/buttons/button-group'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ButtonGroup>
      <ButtonGroup.Button>Button1</ButtonGroup.Button>
      <ButtonGroup.Button active>Button2</ButtonGroup.Button>
      <ButtonGroup.Button>Button3</ButtonGroup.Button>
    </ButtonGroup>
    ~~~
  `,
  header: false,
  propTables: false,
}

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
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <StoryContainer>
          <ButtonGroup aria-label="Button label">
            <ButtonGroup.Button>Button1</ButtonGroup.Button>
            <ButtonGroup.Button
              modifier={boolean('active', false) ? 'helium' : 'hydrogen'}
              active={boolean('active', false)}
            >
              Button2
            </ButtonGroup.Button>
            <ButtonGroup.Button>Button3</ButtonGroup.Button>
          </ButtonGroup>
        </StoryContainer>
      )
    },
    { info },
  )
