import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { LinkBox } from 'kitten/components/box/link-box'

storiesOf('Box/LinkBox', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="6">
            <LinkBox
              title={text('Title', 'Lorem ipsum')}
              text={text('Text', 'Aenean leo ligula, porttitor eu')}
              displayIcon={boolean('displayIcon', false)}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
