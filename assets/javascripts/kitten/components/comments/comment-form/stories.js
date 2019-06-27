import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'
import { CommentForm } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

storiesOf('Comments', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Comment form', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="8">
          <CommentForm
            avatarImgProps={object('Src/Alt', {
              src: 'https://placehold.it/80x80/caf4fe/caf4fe',
              alt: '',
            })}
            placeholder={text('placeholder', 'Leave a comment on the project')}
            commentButton={text('Comment button', 'Comment')}
            error={boolean('Is error', false)}
            errorMessage={text(
              'Error message',
              'Cum sociis natoque penatibus et magnis',
            )}
          />
        </GridCol>
      </Grid>
    )
  })
