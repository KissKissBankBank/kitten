import React from 'react'
import { AlertBox } from './'
import { DocsPage } from 'storybook/docs-page'
import { ThumbUpIconNext } from 'kitten'

export default {
  title: 'Information/AlertBox',
  component: AlertBox,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="AlertBox" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        <div>{story()}</div>
      </div>
    ),
  ],
}

export const Default = args => <AlertBox {...args} />

Default.args = {
  children: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
  icon: null,
  status: 'info',
  displayIcon: true,
  size: 'medium',
  fit: 'fluid',
  iconPosition: 'start',
}
Default.argTypes = {
  children: {
    name: 'children',
    control: 'text',
  },
  icon: {
    name: 'icon',
    control: 'object',
  },
  status: {
    control: 'select',
    options: ['info', 'success', 'danger', 'warning', 'disabled', 'pending'],
  },
  displayIcon: { control: 'boolean' },
  iconPosition: { control: 'radio', options: ['start', 'center'] },
  size: { control: 'radio', options: ['small', 'medium', 'large'] },
  fit: { control: 'radio', options: ['content', 'fluid'] },
}

export const WithLink = args => <AlertBox {...args} />

WithLink.args = {
  ...Default.args,
  fit: 'content',
  children: (
    <>
      Bonjour <a href="#">clique ici</a>
    </>
  ),
}
WithLink.argTypes = Default.argTypes

export const WithLongContent = args => <AlertBox {...args} />

WithLongContent.args = {
  ...Default.args,
  children:
    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.',
}
WithLongContent.argTypes = Default.argTypes

export const WithCustomIcon = args => <AlertBox {...args} />

WithCustomIcon.args = {
  ...Default.args,
  size: 'large',
  iconPosition: 'center',
  children:
    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.',
  icon: <ThumbUpIconNext width={16} height={16} color="currentColor" />,
}
WithCustomIcon.argTypes = Default.argTypes
