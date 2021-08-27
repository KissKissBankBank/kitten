import React from 'react'
import { DocLinkBox } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Boxes/DocLinkBox',
  component: DocLinkBox,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="DocLinkBox" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const Default = args => <DocLinkBox {...args} />

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
