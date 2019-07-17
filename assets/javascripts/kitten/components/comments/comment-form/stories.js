import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'
import { CommentForm } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'

const info = {
  text: `
    # CommentForm
    &nbsp;

    ## Import
    ~~~js
    import { CommentForm } from '@kisskissbankbank/kitten/src/components/comments/comment-form'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <CommentForm />
    ~~~

    ### With avatar
    ~~~js
    <CommentForm
      avatarImgProps={{
        src: '…'
        alt: '…'
      }}
    />
    ~~~

    ### With commentButton
    ~~~js
    <CommentForm commentButton="Button" />
    ~~~

    ### With error
    ~~~js
    <CommentForm error errorMessage="…" />
    ~~~

    ### With avatarBadge
    ~~~js
    <Comment avatarBadge="…" />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Comments/CommentForm', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Comment form',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="8">
            <CommentForm
              avatarImgProps={object('Src/Alt', {
                src: 'https://placehold.it/80x80/caf4fe/caf4fe',
                alt: '',
              })}
              placeholder={text(
                'placeholder',
                'Leave a comment on the project',
              )}
              commentButton={text('Comment button', 'Comment')}
              error={boolean('Is error', false)}
              errorMessage={text(
                'Error message',
                'Cum sociis natoque penatibus et magnis',
              )}
              avatarBadge={
                boolean('Avatar badge', false) && (
                  <span aria-label="Owner" role="aside">
                    <CheckedCircleIcon
                      width="25"
                      height="25"
                      circleColor="#19b4fa"
                      checkedColor="#fff"
                    />
                  </span>
                )
              }
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
