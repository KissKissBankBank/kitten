import React, { useState } from 'react'
import { ColorSelect } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'
import { Text } from 'kitten'

export default {
  title: 'Form/ColorSelect',
  component: ColorSelect,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    value: '#006cff',
    contrastColor: '#ffffff',
    contrastRatio: 4.5,
  },
  argTypes: {
    value: {
      name: 'value',
      description: 'Valeur du composant',
      control: 'color',
    },
    contrastColor: {
      name: 'contrastColor',
      description: 'Couleur de contraste pour la validation WCAG',
      control: 'color',
    },
    contrastRatio: {
      name: 'contrastRatio',
      description: 'Ratio de contraste visé pour la validation WCAG',
      control: 'number',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ColorSelect" />,
    },
  },
}

export const Default = ({ value, ...args }) => {
  const [currentValue, setCurrentValue] = useState(value)

  const handleChange = color => {
    action('onChange')(color)
    setCurrentValue(color)
  }

  return (
    <>
      <ColorSelect {...args} value={value} onChange={handleChange} />
      <div>
        <div
          style={{ width: 100, height: 80, backgroundColor: currentValue }}
        />
        <Text cssColor={currentValue}>
          <strong className="k-u-strong">{currentValue}</strong>
        </Text>
      </div>
    </>
  )
}
