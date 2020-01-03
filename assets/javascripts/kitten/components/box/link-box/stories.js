import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { LinkBox } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const info = {
  text: `
    # LinkBox

    ## Import
    ~~~js
    import { LinkBox } from '@kisskissbankbank/kitten/src/components/box/link-box'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <LinkBox title="Lorem ipsum" />
    ~~~

    ### Title props
    ~~~js
    <LinkBox title="Lorem ipsum" titleTag="h3" />
    ~~~

    ### Text props
    ~~~js
    <LinkBox title="Lorem ipsum" text="Lorem ipsum" textTag="p" />
    ~~~

    ### Link props
    ~~~js
    <LinkBox
      title="Lorem ipsum"
      href="#anchor"
      isExternal
      linkProps={{ aria-hidden: true }}
    />
    ~~~

    ### displayIcon prop
    ~~~js
    <LinkBox title="Lorem ipsum" displayIcon />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'LinkBox',
    () => (
      <Container>
        <Marger top="5" bottom="5">
          <LinkBox
            title={text('Title', 'Title')}
            titleTag={text('Title tag', 'span')}
            href={text('Href', '#anchor')}
            isExternal={boolean('External?', false)}
            text={text('Text', 'Lorem ipsum…')}
            textTag={text('Text tag', 'span')}
            displayIcon={boolean('Show icon?', false)}
          />
        </Marger>
      </Container>
    ),
    { info },
  )
