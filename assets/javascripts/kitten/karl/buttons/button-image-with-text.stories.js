import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { Grid, GridCol } from '../../components/grid/grid'
import { StyleRoot } from 'radium'
import { ButtonImageWithText } from '../../components/buttons/button-image-with-text'

storiesOf('ButtonImageWithText', module)
  .addDecorator(withKnobs)
  .add('ButtonImageWithText', () => (
    <StyleRoot>
      <Grid>
        <GridCol offset="1" col="6">
          <ButtonImageWithText
            title={text('Title', 'Owner title')}
            description={text('Description', 'description')}
            micro={boolean('Micro', false)}
            largeGutter={boolean('Large gutter', false)}
            titleRegular={boolean('Regular title', false)}
            textRegular={boolean('Regular text', false)}
          />
        </GridCol>
      </Grid>
    </StyleRoot>
  ))
