import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { ButtonImageWithText } from 'kitten/components/buttons/button-image-with-text'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('ButtonImageWithText', () => (
    <StyleRoot>
      <Grid>
        <GridCol offset="1" col="6">
          <ButtonImageWithText
            title={text('Title', 'Owner title')}
            description={text('Description', 'description')}
            isNormal={boolean('Is Normal', false)}
          />
        </GridCol>
      </Grid>
    </StyleRoot>
  ))
