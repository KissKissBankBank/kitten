import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { TagButton } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { VisaIcon } from '../../icons/visa-icon'

const modifierOptions = {
  Hydrogen: 'hydrogen',
  Carbon: 'carbon',
  Helium: 'helium',
}

const info = {
  text: `
  # TagButton
    &nbsp;

    ## Import
    ~~~js
    import { TagButton } from '@kisskissbankbank/kitten/src/components/buttons/tag-button'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <TagButton>MyTag</TagButton>
    ~~~

    #### Size
    ~~~js
    <TagButton tiny>MyTag</TagButton>
    <TagButton big>MyTag</TagButton>
    ~~~

    #### Modifier
    ~~~js
    <TagButton modifier="hydrogen">MyTag</TagButton>
    <TagButton modifier="helium">MyTag</TagButton>
    <TagButton modifier="carbon">MyTag</TagButton>
    ~~~

    #### Tag
    ~~~js
    <TagButton as="a" href="#">MyButton</TagButton>
    ~~~

    #### With icon
    ~~~js
    <TagButton icon>
      <MyIcon />
    </TagButton>
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Buttons/TagButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Marger top="4" bottom="4">
          <Container>
            <Grid>
              <GridCol>
                <TagButton
                  tiny={boolean('Tiny', false)}
                  big={boolean('Big', false)}
                  modifier={select('Modifier', modifierOptions, 'hydrogen')}
                  selected={boolean('Select', false)}
                >
                  {(text, ('Text', 'MyTag'))}
                </TagButton>
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    },
    { info },
  )

  .add(
    'with icon',
    () => {
      return (
        <Marger top="4" bottom="4">
          <Container>
            <Grid>
              <GridCol>
                <TagButton
                  tiny={boolean('Tiny', false)}
                  big={boolean('Big', false)}
                  selected={boolean('Select', false)}
                  icon={boolean('Icon', false)}
                >
                  <VisaIcon />
                </TagButton>
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    },
    { info },
  )
