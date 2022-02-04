import React from 'react'
import { Tag } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    docs: { page: () => <DocsPage filepath={__filename} importString="Tag" /> },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    type: 'info',
    size: 'regular',
    variant: 'light',
    children: '5 contributors',
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['info', 'warning', 'success', 'error', 'disabled'],
      control: 'radio',
    },
    size: {
      name: 'size',
      options: ['regular', 'small'],
      control: 'radio',
    },
    variant: {
      name: 'variant',
      options: ['light', 'dark'],
      control: 'radio',
    },
  },
}

export const Default = args => {
  return <Tag {...args} />
}

export const AllVariants = () => {
  return (
    <>
      <div>
        <Tag variant="light" type="info" size="regular">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="info" size="regular">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="success" size="regular">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="success" size="regular">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="error" size="regular">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="error" size="regular">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="warning" size="regular">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="warning" size="regular">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="disabled" size="regular">
          Don libre
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="disabled" size="regular">
          Don libre
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="info" size="small">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="info" size="small">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="success" size="small">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="success" size="small">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="error" size="small">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="error" size="small">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="warning" size="small">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="warning" size="small">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="disabled" size="small">
          Don libre
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="disabled" size="small">
          Don libre
        </Tag>
      </div>
    </>
  )
}
