import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { Comment } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

const info = {
  text: `
    # Comment
    &nbsp;

    ## Import
    ~~~js
    import { Comment } from '@kisskissbankbank/kitten/src/components/comments/comment'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <Comment>MyComment</Comment>
    ~~~

    ### With avatar
    ~~~js
    <Comment>
      src=""
      alt="…"
    </Comment>
    ~~~

    ### With commentDate
    ~~~js
    <Comment>commentDate="…"</Comment>
    ~~~

    ### With ownerName
    ~~~js
    <Comment>ownerName="…"</Comment>
    ~~~

    ### Text
    ~~~js
    <Comment>text="…"</Comment>
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Comments', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Comment', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
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
    )
  })
