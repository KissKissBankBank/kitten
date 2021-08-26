import React from 'react'
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

export const Default = args => {
  return <InformationBox {...args} />
}

Default.decorators = [
  story => <div className="story-Container story-Grid">{story()}</div>,
]

Default.args = {
  title: 'Nulla vitae elit libero',
  children:
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.',
  titleProps: {},
}

Default.argTypes = {
  title: {
    name: 'title',
    control: { type: 'text' },
  },
  children: {
    name: 'children',
    control: { type: 'text' },
  },
  titleProps: {
    name: 'titleProps',
    control: { type: 'object' },
  },
}
