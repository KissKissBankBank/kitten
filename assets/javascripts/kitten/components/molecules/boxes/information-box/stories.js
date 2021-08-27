import React from 'react'
import { text } from '@storybook/addon-knobs'
import { InformationBox } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Boxes/InformationBox',
  component: InformationBox,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="InformationBox" />
      ),
    },
  },
}

export const Default = () => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <InformationBox
        title={text('Title', 'Title')}
        children={text('Children', 'Children')}
      />
    </div>
  )
}
