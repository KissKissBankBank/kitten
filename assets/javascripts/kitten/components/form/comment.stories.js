import React from 'react'
import { StyleRoot } from 'radium'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { Comment } from './comment'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Form/Comment', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="8">
            <Comment
              avatarImgProps={object('Src/Alt', {
                src: 'https://placehold.it/80x80/caf4fe/caf4fe',
                alt: '',
              })}
              commentDate={text('Comment date', '2 min')}
              text={text(
                'Text',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
              )}
              ownerName={text('Owner name', 'Lorem ipsum')}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
