import React from 'react'
import { DocLinkBox } from './index'
import { text, boolean } from '@storybook/addon-knobs'

export const Default = () => (
  <DocLinkBox
    isExternal={boolean('isExternal', true)}
    href={text('href', 'http://www.google.com')}
    title={text('title', 'Termes et Conditions de la collecte')}
    text={text('text', 'Cliquer pour ouvrir le fichier dans un nouvel onglet.')}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
