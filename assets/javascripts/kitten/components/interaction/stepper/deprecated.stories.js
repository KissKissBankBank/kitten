import React from 'react'
import { Stepper } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Interaction/Stepper (deprecated)',
  component: Stepper,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Stepper" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

export const Default = () => {
  return (
    <Stepper
      items={[
        {
          href: '#',
          iconType: 'validated',
          linkClassNames: 'customLinkClassName',
          text: 'validated',
        },
        {
          href: '#',
          iconType: 'inProgress',
          linkClassNames: 'customLinkClassName',
          text: 'inProgress',
        },
        {
          href: '#',
          iconType: 'default',
          linkClassNames: 'customLinkClassName',
          text: 'default',
        },
        {
          href: '#',
          iconType: 'default',
          linkClassNames: 'customLinkClassName',
          text: 'multi \nline \ncontent',
        },
      ]}
    />
  )
}
