import React from 'react'
import { DocLinkBox } from './index'
import { Marger, Container } from '../../../..'
import { text, boolean } from '@storybook/addon-knobs'

export const Default = () => (
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
)
