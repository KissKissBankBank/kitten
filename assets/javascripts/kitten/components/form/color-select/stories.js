import React, { useState, useEffect } from 'react'
import { ColorSelect } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'
import { Text, Button } from 'kitten'
import { colord } from 'colord'

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

  const [colorsObject, setColorsObject] = useState({})

  useEffect(() => {
    setColorsObject({
      '--color-primary-100': colord(currentValue).lighten(.24).toHex(),
      '--color-primary-300': colord(currentValue).lighten(.12).toHex(),
      '--color-primary-500': currentValue,
      '--color-primary-700': colord(currentValue).darken(.12).toHex(),
      '--color-primary-900': colord(currentValue).darken(.24).toHex(),
    })
  }, [currentValue])

  const handleChange = color => {
    action('onChange')(color)
    setCurrentValue(color)
  }

  return (
    <>
      <ColorSelect {...args} value={value} onChange={handleChange}>
        <div
          className="k-u-flex k-u-flex-alignItems-center k-u-flex-justifyContent-end k-u-flex-gap-single"
          style={colorsObject}
        >
          <Text size="tiny">Rendu&nbsp;:</Text>
          <Button modifier="helium" rounded size="tiny" fit="content">S’abonner</Button>
        </div>
      </ColorSelect>
      <div>
        <div
          style={{ width: 100, height: 80, backgroundColor: currentValue }}
        />
        <Text cssColor={currentValue}>
          <strong className="k-u-strong">{currentValue}</strong>
        </Text>
        <div className="k-u-flex" style={colorsObject}>
          <div
            style={{ width: '20%', flexBasis: '1 0 20%', height: 40, backgroundColor: colorsObject['--color-primary-100'] }}
          />
          <div
            style={{ width: '20%', flexBasis: '1 0 20%', height: 40, backgroundColor: colorsObject['--color-primary-300'] }}
          />
          <div
            style={{ width: '20%', flexBasis: '1 0 20%', height: 40, backgroundColor: colorsObject['--color-primary-500'] }}
          />
          <div
            style={{ width: '20%', flexBasis: '1 0 20%', height: 40, backgroundColor: colorsObject['--color-primary-700'] }}
          />
          <div
            style={{ width: '20%', flexBasis: '1 0 20%', height: 40, backgroundColor: colorsObject['--color-primary-900'] }}
          />

        </div>
      </div>
    </>
  )
}
