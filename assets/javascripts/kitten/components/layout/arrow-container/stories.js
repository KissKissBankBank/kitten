import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  color,
  text,
  number,
  select,
  boolean,
} from '@storybook/addon-knobs'
import { ArrowContainer } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Text } from '../../typography/text'
import COLORS from '../../../constants/colors-config'

const info = {
  text: `
    # ArrowContainer
    &nbsp;

    ## Import
    ~~~js
    import { ArrowContainer } from '@kisskissbankbank/kitten/src/components/layout/arrow-container'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ArrowContainer>
      MyContent
    </ArrowContainer>
    ~~~

    #### Color
    ~~~js
    <ArrowContainer color="#ff0000">
      MyContent
    </ArrowContainer>
    ~~~

    #### Size of arrow
    ~~~js
    <ArrowContainer size={ 20 }>
      MyContent
    </ArrowContainer>
    ~~~

    #### Position of arrow (top/right/bottom/left)
    ~~~js
    <ArrowContainer position="right">
      MyContent
    </ArrowContainer>
    ~~~

    #### Distance
    ~~~js
    <ArrowContainer distance={ 30 }>
      MyContent
    </ArrowContainer>
    ~~~

    #### Centered distance (priority on distance prop)
    ~~~js
    <ArrowContainer centered>
      MyContent
    </ArrowContainer>
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Layout/ArrowContainer', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Marger top="4" bottom="4">
          <Container>
            <Grid>
              <GridCol col="4">
                <ArrowContainer
                  color={color('Color', COLORS.background3)}
                  size={number('Size', 10)}
                  position={select('Position', {
                    Left: 'left',
                    Top: 'top',
                    Right: 'right',
                    Bottom: 'bottom',
                  })}
                  distance={number('Distance', 20)}
                  centered={boolean('Centered?', false)}
                  shadow={boolean('Shadow?', false)}
                  borderRadius={number('Border radius', 0)}
                  borderColor={color('Border color', COLORS.line1)}
                  borderWidth={number('Border width', 0)}
                >
                  <Text size="tiny" color="font1" weight="light">
                    {text('Content', 'Play with me!')}
                  </Text>
                </ArrowContainer>
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    },
    { info },
  )
