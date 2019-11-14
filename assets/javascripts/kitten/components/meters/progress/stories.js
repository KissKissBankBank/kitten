import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs'
import { Progress } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import COLORS from '../../../constants/colors-config'

const info = {
  text: `
    # Progress
    &nbsp;

    ## Import
    ~~~js
    import { Progress } from '@kisskissbankbank/kitten/src/components/meters/progress'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <Progress
      value={progressPercentage}
      rampProps={{ style: { height: 6 } }}
      color={getColor(state)}
    />
    ~~~

  `,
  header: false,
  propTablesExclude: [Container, Grid, GridCol, Marger],
}

storiesOf('Meters/Progress', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => {
    const [buttonIsChecked, changeButtonState] = useState(true)

    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol col={4}>
              <Progress
                value={number('Value', 50)}
                color={color('Color', COLORS.primary1)}
                rampProps={{ style: { height: 6 } }}
              />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
