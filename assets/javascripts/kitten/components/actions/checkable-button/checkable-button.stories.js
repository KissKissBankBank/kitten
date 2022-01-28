import React, { useState } from 'react'
import { CheckableButton } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Buttons/Checkable Button',
  component: CheckableButton,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="CheckableButton" />
      ),
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
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    isChecked: { control: 'boolean' },
    checkPosition: { control: 'radio', options: ['bottom', 'left'] },
  },
  args: {
    disabled: false,
    error: false,
    isChecked: false,
    checkPosition: 'bottom',
  },
}

export const Default = args => {
  const [buttonIsChecked, changeButtonState] = useState(true)

  return (
    <>
      <div>
        <CheckableButton {...args}>My Button</CheckableButton>
        <p className="k-u-weight-light k-u-size-micro">
          Button controlled by the "isChecked" knob
        </p>
      </div>
      <div>
        <CheckableButton
          {...args}
          isChecked={buttonIsChecked}
          onClick={() => changeButtonState(!buttonIsChecked)}
        >
          My Button
        </CheckableButton>
        <p className="k-u-weight-light k-u-size-micro">Clickable button</p>
      </div>
    </>
  )
}
