import React from 'react'
import { StyleRoot } from 'radium'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from './checkbox'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Form/Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="8">
            <Checkbox
              id={text('id', 'checkbox_id')}
              onLabelClick={action('label-click')}
            >
              {text('text', 'Checkbox Label')}
            </Checkbox>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
