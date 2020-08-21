import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import DocLinkBox from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const info = {
  text: `
    # LinkBox

    ## Import
    ~~~js
    import DocLinkBox from '@kisskissbankbank/kitten/src/components/box/doc-link-box'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <DocLinkBox
      href="#anchor"
      isExternal
      title="title"
      text="text"
    />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'DocLinkBox',
    () => (
      <Container>
        <Marger top="5" bottom="5">
          <DocLinkBox
            isExternal={boolean('isExternal', true)}
            href={text('href', 'http://www.google.com')}
            title={text('title', 'Termes et Conditions de la collecte')}
            text={text(
              'text',
              'Cliquer pour ouvrir le fichier dans un nouvel onglet.',
            )}
          />
        </Marger>
      </Container>
    ),
    { info },
  )
