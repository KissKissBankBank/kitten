import React from 'react'
import { color } from '@storybook/addon-knobs'
import { Loader } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Loader" />,
    },
  },
}

export const Default = () => {
  return <Loader color={color('Color', 'black')} />
}
