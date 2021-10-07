import React, { useState } from 'react'
import { TagInput } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Form/TagInput',
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
    size: 'regular',
    variant: 'andromeda',
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
      options: ['tiny', 'regular', 'big', 'huge', 'giant'],
      control: 'select',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: 'inline-radio',
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
      <p className="k-u-weight-light">List: {tagList.join(', ')}</p>
    </div>
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
