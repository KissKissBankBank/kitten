import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { SelectWithState } from './index'

const options = [
  { value: 'bianchi', label: 'Bianchi' },
  { value: 'bmc', label: 'BMC' },
  { value: 'cannondale', label: 'Cannondale' },
  { value: 'canyon', label: 'Canyon' },
  { value: 'cervelo', label: 'Cervelo' },
  { value: 'diamondback', label: 'Diamondback' },
  { value: 'eddy merckx', label: 'Eddy Merckx', disabled: true },
  { value: 'felt', label: 'Felt' },
  { value: 'focus', label: 'Focus' },
  { value: 'fuji', label: 'Fuji' },
]

const multiOptions = [
  {
    label: 'Top 10',
    children: [
      { value: 'bianchi', label: 'Bianchi' },
      { value: 'bmc', label: 'BMC' },
      { value: 'cannondale', label: 'Cannondale' },
      { value: 'canyon', label: 'Canyon' },
      { value: 'cervelo', label: 'Cervelo' },
      { value: 'diamondback', label: 'Diamondback' },
      { value: 'eddy merckx', label: 'Eddy Merckx', disabled: true },
      { value: 'felt', label: 'Felt' },
      { value: 'focus', label: 'Focus' },
      { value: 'fuji', label: 'Fuji' },
    ],
  },
  {
    label: 'Other best',
    children: [
      { value: 'giant', label: 'Giant' },
      { value: 'gt', label: 'GT' },
      { value: 'jamis', label: 'Jamis' },
      { value: 'kona', label: 'Kona' },
      { value: 'marin', label: 'Marin' },
      { value: 'pinarello', label: 'Pinarello' },
      { value: 'raleigh', label: 'Raleigh' },
      { value: 'salsa', label: 'Salsa' },
      { value: 'santa cruz', label: 'Santa Cruz' },
      { value: 'scott', label: 'Scott' },
      { value: 'soma', label: 'Soma' },
      { value: 'specialized', label: 'Specialized' },
      { value: 'surly', label: 'Surly' },
      { value: 'trek', label: 'Trek' },
      { value: 'yeti', label: 'Yeti' },
    ],
  },
]

const autoFill = {
  None: null,
  Off: 'off',
  On: 'on',
  Name: 'name',
}

const Container = styled.div`
  max-width: 300px;
  margin: 30px auto;
`

const onChange = value => console.warn('Selected value', value)

storiesOf('Form/SelectWithState', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Container>
      <SelectWithState
        id="select-with-label"
        onChange={onChange}
        labelText="Please select a bike brand"
        placeholder="Choose a bike brand"
        options={options}
        searchable={boolean('Searchable', false)}
        clearable={boolean('Clearable', false)}
        error={boolean('Error', false)}
        error={boolean('Error', false)}
        valid={boolean('Valid', false)}
        tiny={boolean('Tiny', false)}
        huge={boolean('Huge', false)}
        giant={boolean('Giant', false)}
        autoFill={select('AutoFill', autoFill)}
      />
    </Container>
  ))
  .add('multi', () => (
    <Container>
      <SelectWithState
        id="select-with-label"
        onChange={onChange}
        labelText="Please select a bike brand"
        placeholder="Choose a bike brand"
        options={multiOptions}
        searchable={boolean('Searchable', false)}
        clearable={boolean('Clearable', false)}
        error={boolean('Error', false)}
        error={boolean('Error', false)}
        valid={boolean('Valid', false)}
        tiny={boolean('Tiny', false)}
        huge={boolean('Huge', false)}
        giant={boolean('Giant', false)}
        autoFill={select('AutoFill', autoFill)}
      />
    </Container>
  ))
