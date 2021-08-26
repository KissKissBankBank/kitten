import React from 'react'
import { DocLinkBox } from './index'

export const Default = args => <DocLinkBox {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  isExternal: true,
  href: 'https://www.kisskissbankbank.com',
  title: 'Termes et Conditions de la collecte',
  text: 'Cliquer pour ouvrir le fichier dans un nouvel onglet.',
}

Default.argTypes = {
  isExternal: {
    control: { type: 'boolean' },
  },
  href: {
    control: { type: 'text' },
  },
  title: {
    control: { type: 'text' },
  },
  text: {
    control: { type: 'text' },
  },
}
