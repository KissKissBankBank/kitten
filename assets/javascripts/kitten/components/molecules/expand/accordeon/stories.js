import React from 'react'
import { Accordeon } from './index'
import { DropdownSelect } from '../../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Expand/Accordeon',
  component: Accordeon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Accordeon" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    closeOnClick: {
      name: 'closeOnClick',
      control: { type: 'boolean' },
    },
    id: {
      name: 'id',
      control: { type: 'text' },
    },
    isAnimated: {
      name: 'isAnimated',
      control: { type: 'boolean' },
    },
    onChange: {
      name: 'onChange',
      control: null,
    },
    selectedItem: {
      name: 'selectedItem',
      control: { type: 'number' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    children: {
      name: 'children',
      control: null,
    },
  },
}

const args = {
  id: 'Accordeon',
  isAnimated: true,
  closeOnClick: false,
  variant: 'andromeda',
  onChange: action('onChange'),
}

export const Default = args => (
  <Accordeon {...args}>
    <Accordeon.Item id="custom-id">
      <Accordeon.Header>Donec sed odio dui.</Accordeon.Header>
      <Accordeon.Content>
        Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
        malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra
        augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas
        eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor
        ligula, eget lacinia odio sem nec elit.
        <br />
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.
        Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis
        euismod. Maecenas faucibus mollis interdum.
        <br />
        Vestibulum id ligula porta felis euismod semper. Integer posuere erat a
        ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget
        urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.
        <br />
        Donec id elit non mi porta gravida at eget metus. Etiam porta sem
        malesuada magna mollis euismod. Maecenas faucibus mollis interdum.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Nullam id dolor id nibh ultricies vehicula ut id elit.
        <br />
      </Accordeon.Content>
    </Accordeon.Item>

    <Accordeon.Item>
      <Accordeon.Header>
        Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
        ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed
        consectetur.
      </Accordeon.Header>
      <Accordeon.Content>
        Sed posuere consectetur est at lobortis.
      </Accordeon.Content>
    </Accordeon.Item>

    <Accordeon.Item>
      <Accordeon.Header>
        Nullam quis risus eget urna mollis ornare vel eu leo.
      </Accordeon.Header>
      <Accordeon.Content>
        Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Vestibulum id ligula porta felis euismod semper.
      </Accordeon.Content>
    </Accordeon.Item>
  </Accordeon>
)
Default.args = args

export const WithOverflowBug = args => <Accordeon {...args} />
WithOverflowBug.args = {
  ...args,
  selectedItem: 0,
  children: (
    <Accordeon.Item>
      <Accordeon.Header>Header</Accordeon.Header>
      <Accordeon.Content>
        <DropdownSelect
          id="dropdown-select"
          labelText="Label"
          options={[
            { value: 'foo', label: 'Foo' },
            { value: 'bar', label: 'Bar' },
            { value: 'baz', label: 'Baz' },
            { value: 'foofoo', label: 'Foofoo' },
            { value: 'barbar', label: 'Barbar' },
            { value: 'bazbaz', label: 'Bazbaz' },
            { value: 'foofoofoo', label: 'Foofoofoo' },
            { value: 'barbarbar', label: 'Barbarbar' },
            { value: 'bazbazbaz', label: 'Bazbazbaz' },
          ]}
        />
      </Accordeon.Content>
    </Accordeon.Item>
  ),
}
