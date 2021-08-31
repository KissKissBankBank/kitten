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
      control: { type: 'text' },
    },
    initialItemsList: {
      name: 'initialItemsList',
      control: { type: 'object' },
    },
    placeholder: {
      name: 'placeholder',
      control: { type: 'text' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    helpMessage: {
      name: 'helpMessage',
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      options: ['tiny', 'regular', 'big', 'huge', 'giant'],
      control: { type: 'select' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    addEventKeys: {
      name: 'addEventKeys',
      control: { type: 'object' },
    },
    removeEventKeys: {
      name: 'removeEventKeys',
      control: { type: 'object' },
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
