import React from 'react'
import { Tag } from './index'
import { DocsPage } from 'storybook/docs-page'
import { FlashIconNext } from 'kitten'

export default {
  title: 'Information/Tag',
  component: Tag,
  parameters: {
    docs: { page: () => <DocsPage filepath={__filename} importString="Tag" /> },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args: {
    type: 'info',
    size: 'medium',
    variant: 'light',
    children: '5 contributors',
    icon: null,
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['info', 'warning', 'success', 'error', 'disabled'],
      control: 'radio',
    },
    size: {
      name: 'size',
      options: ['small', 'medium'],
      control: 'radio',
    },
    variant: {
      name: 'variant',
      options: ['light', 'status', 'dark'],
      control: 'radio',
    },
    icon: { control: 'boolean' },
  },
}

export const Default = args => {
  return <Tag {...args} />
}

export const WithIcon = args => {
  return (
    <Tag {...args} flex>
      <FlashIconNext width="10" />
      Abonnement
    </Tag>
  )
}

export const AllVariants = () => {
  return (
    <>
      <div>
        <Tag variant="status" type="info" size="medium">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="info" size="medium">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="info" size="medium">
          Abonnement
        </Tag>
      </div>
      <div>
        <Tag variant="status" type="success" size="medium">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="success" size="medium">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="success" size="medium">
          Validée
        </Tag>
      </div>
      <div>
        <Tag variant="status" type="error" size="medium">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="error" size="medium">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="error" size="medium">
          Échoué
        </Tag>
      </div>
      <div>
        <Tag variant="status" type="warning" size="medium">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="warning" size="medium">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="warning" size="medium">
          En pause
        </Tag>
      </div>
      <div>
        <Tag variant="status" type="disabled" size="medium">
          Don libre
        </Tag>
      </div>
      <div>
        <Tag variant="light" type="disabled" size="medium">
          Don libre
        </Tag>
      </div>
      <div>
        <Tag variant="dark" type="disabled" size="medium">
          Don libre
        </Tag>
      </div>
      <div>
        <Tag variant="status" type="info" size="small">
          Abonnement
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
        <Tag variant="status" type="success" size="small">
          Validée
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
        <Tag variant="status" type="error" size="small">
          Échoué
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
        <Tag variant="status" type="warning" size="small">
          En pause
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
        <Tag variant="status" type="disabled" size="small">
          Don libre
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
