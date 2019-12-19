import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ButtonImageWithText } from './index'

const info = {
  text: `
    # ButtonImageWithText
    ## Import
    ~~~js
    import { ButtonImageWithText } from '@kisskissbankbank/kitten/src/components/buttons/button-image-with-text'
    ~~~
    ## Usage
    #### Default
    ~~~js
    <ButtonImageWithText title="Title" description="Lorem ipsum" />
    ~~~
    #### With props
    ~~~js
    <LinkBox
      title="Title"
      description="Lorem ipsum"
      micro
      tag="span"
      titleRegular
      textRegular
      largeGutter
      avatarProps={{ alt: 'Lorem ipsum' }}
    />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'ButtonImageWithText',
    () => (
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
    ),
    { info },
  )
