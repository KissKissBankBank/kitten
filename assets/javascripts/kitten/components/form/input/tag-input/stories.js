import React, { useState } from 'react'
import { TagInput } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Form/Input/TagInput',
  component: TagInput,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TagInput" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    id: 'TagInput',
    initialItemsList: ['Black', 'Blue', 'Green and magenta'],
    placeholder: 'Placeholder…',
    disabled: false,
    helpMessage: 'Press Enter or comma to add an item to the list.',
    size: 'medium',
    addEventKeys: ['Enter', ','],
    removeEventKeys: ['Backspace'],
  },
  argTypes: {
    id: {
      name: 'id',
      control: 'text',
    },
    initialItemsList: {
      name: 'initialItemsList',
      control: 'object',
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    helpMessage: {
      name: 'helpMessage',
      control: 'text',
    },
    size: {
      name: 'size',
      options: ['small', 'medium', 'large', 'huge', 'giant'],
      control: 'select',
    },
    addEventKeys: {
      name: 'addEventKeys',
      control: 'object',
    },
    removeEventKeys: {
      name: 'removeEventKeys',
      control: 'object',
    },
  },
}

export const Default = args => {
  const [tagList, setTagList] = useState([])

  return (
    <div>
      <TagInput
        {...args}
        onChange={list => setTagList(list)}
        helpMessage={
          args.disabled
            ? 'This input is disabled.'
            : 'Press Enter or comma to add an item to the list.'
        }
      />
      <p className="k-u-weight-400">List: {tagList.join(', ')}</p>
    </div>
  )
}

export const Controlled = args => {
  const [controlledList, setControlledList] = useState([
    { value: 'object disabled', disabled: true },
    'hey',
    { value: 'object enabled', disabled: false },
  ])
  return (
    <TagInput
      {...args}
      itemsList={controlledList}
      onChange={newList => setControlledList(newList)}
      helpMessage={
        args.disabled
          ? 'This input is disabled.'
          : 'Press Enter or comma to add an item to the list.'
      }
    />
  )
}

export const WithNodeElements = args => {
  return (
    <TagInput
      {...args}
      initialItemsList={[
        { value: 'object disabled', disabled: true },
        'hey',
        { value: 'object enabled', disabled: false },
      ]}
      helpMessage={
        args.disabled
          ? 'This input is disabled.'
          : 'Press Enter or comma to add an item to the list.'
      }
    />
  )
}
