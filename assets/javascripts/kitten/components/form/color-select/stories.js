import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
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
    const currentColor = colord(currentValue).toHsl()

    setColorsObject({
      '--color-primary-100': colord({ ...currentColor, l: 95 }).toHex(),
      '--color-primary-300': colord({
        ...currentColor,
        l: (95 + currentColor.l) / 2,
      }).toHex(),
      '--color-primary-500': currentValue,
      '--color-primary-700': colord({
        ...currentColor,
        l: ((0 + currentColor.l) / 4) * 3,
      }).toHex(),
      '--color-primary-900': colord({
        ...currentColor,
        l: (0 + currentColor.l) / 2,
      }).toHex(),
    })
  }, [currentValue])

  const handleChange = color => {
    action('onChange')(color)
    setCurrentValue(color)
  }

  return (
    <>
      <ColorSelect
        {...args}
        value={value}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Code hexadécimal de la couleur' }}
      >
        <div
          className="k-u-flex k-u-flex-alignItems-center k-u-flex-justifyContent-end k-u-flex-gap-single"
          style={colorsObject}
        >
          <Text size="tiny">Rendu&nbsp;:</Text>
          <Button
            modifier="helium"
            rounded
            size="tiny"
            fit="content"
            type="button"
          >
            S’abonner
          </Button>
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
            style={{
              width: '20%',
              flexBasis: '1 0 20%',
              height: 40,
              backgroundColor: colorsObject['--color-primary-100'],
            }}
          />
          <div
            style={{
              width: '20%',
              flexBasis: '1 0 20%',
              height: 40,
              backgroundColor: colorsObject['--color-primary-300'],
            }}
          />
          <div
            style={{
              width: '20%',
              flexBasis: '1 0 20%',
              height: 40,
              backgroundColor: colorsObject['--color-primary-500'],
            }}
          />
          <div
            style={{
              width: '20%',
              flexBasis: '1 0 20%',
              height: 40,
              backgroundColor: colorsObject['--color-primary-700'],
            }}
          />
          <div
            style={{
              width: '20%',
              flexBasis: '1 0 20%',
              height: 40,
              backgroundColor: colorsObject['--color-primary-900'],
            }}
          />
        </div>
      </div>
    </>
  )
}


const ALL_COLORS = [
'#718000',
'#297eb3',
'#4379c4',
'#bf5a11',
'#006cff',
'#f00a0a',
'#198a5d',
'#f00038',
'#857272',
'#4b6369',
'#008763',
'#d11141',
'#0781a6',
'#006cff',
'#6667AB',
'#006cff',
'#1900ff',
'#eb1717',
'#4b4c4d',
'#6b8005',
'#c03320',
'#844dd6',
'#8f741d',
'#008704',
'#3A4BFB',
'#018766',
'#386fbc',
'#123752',
'#047454',
'#000000',
'#005952',
'#087cc4',
'#002d9c',
'#2d7d7a',
'#6d7a77',
'#006cff',
'#e33112',
'#007e80',
'#947256',
'#a36d21',
'#00404c',
'#04333a',
'#9e1184',
'#380087',
'#5400e3',
'#206355',
'#327fa6',
'#5a1539',
'#00804e',
'#3d1e99',
'#228500',
'#b85f06',
'#008a3e',
'#73797a',
'#3b06b0',
'#000000',
'#7b7d00',
'#008566',
'#008213',
'#1c8a30',
'#4b4949',
'#0882a1',
'#3507ff',
'#008a19',
'#188a04',
'#008a5e',
'#3c66a0',
'#058c00',
'#bf5474',
'#007d76',
'#80756a',
'#0601a4',
'#0081a8',
'#007ccf',
'#ab5200',
'#477f52',
'#273967',
'#108491',
'#008712',
'#c83a12',
'#2b4aa1',
'#082d61',
'#006cff',
'#088700',
'#a33bac',
'#807765',
'#e82502',
'#006cff',
'#0081a8',
'#0078e0',
'#c9530e',
'#bb2f03',
'#284cf5',
'#008c05',
'#044595',
'#621225',
'#ba0404',
'#358581',
'#022602',
'#99700f',
'#4c0f3a',
'#078c00',
'#710D0F',
'#488566',
'#007cb3',
'#e80e69',
'#d31f1f',
'#2d7603',
'#e80576',
'#078a32',
'#960a57',
'#000000',
'#bd5b42',
'#2969c1',
'#046db4',
'#1300ff',
'#073aed',
'#5b7aa6',
'#008585',
'#03877e',
'#236a7d',
'#b55b70',
'#152338',
'#8a7700',
'#d4008d',
'#d006d4',
'#008a3c',
'#ad50bf',
'#7d7d00',
'#b55c0a',
'#28377f',
'#007bc2',
'#006cff',
'#008c1e',
'#7d6e00',
'#7a7772',
'#0914b4',
'#666b6e',
'#021873',
'#3c8000',
'#000000',
'#000afa',
'#d400cd',
'#ba00db',
'#5e7d5b',
'#008a20',
'#168a58',
'#787878',
'#006cff',
'#857744',
'#7d3b00',
'#1c027c',
'#006cff',
'#990a0a',
'#234C44',
'#7d2d00',
'#74797a',
'#826f00',
'#77777d',
'#0c7cc7',
'#a700ff',
'#000000',
'#296254',
'#0080ab',
'#f00000',
'#53535a',
'#268500',
'#8f0000',
'#7d7500',
'#b440ac',
'#0A4F9C',
'#0565ec',
'#787877',
'#008002',
'#4b678b',
'#006cff',
'#e80078',
'#5e6f87',
'#5379ad',
'#5673cc',
'#7a7773',

]

const StyledViz = styled.div`
  position: relative;
  width: calc(100% - 30px);
  margin-left: 30px;
  height: 200px;

  background:
   linear-gradient(180deg, rgba(255,255,255,1), rgba(255, 255, 255, 0) 50%),
   linear-gradient(0deg, rgba(0,0,0,1), rgba(0, 0, 0, 0) 50%),
   linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);

  &::before {
    content: " ";
    position: absolute;
    left: -30px;
    width: 30px;
    top: 0;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,1), rgba(255, 255, 255, 1));
  }

  .colorButton {
    position: absolute;

    &:not(.hueless) {
      left: calc(var(--hue) / 360 * 100%);
    }
    &.hueless {
      left: -15px;
    }
    top: calc(100% - var(--light) * 1%);

    width: 5px;
    height: 5px;
    border-radius: 5px;
    border: 2px solid white;
    transform: translate(-50%, -50%);

    background-color: var(--color);
  }
`

export const Visualizer = () => {
  return (
    <StyledViz>
      {ALL_COLORS.map((color) => {
        const colorHSL = colord(color).toHsl()

        return (
          <div
            key={color}
            title={color}
            className={classNames('colorButton', { 'hueless': colorHSL.s < 10 })}
            style={{
              '--hue': colorHSL.h,
              '--light': colorHSL.l,
              '--color': color,
            }}
          />)
      })}
    </StyledViz>
  )
}
