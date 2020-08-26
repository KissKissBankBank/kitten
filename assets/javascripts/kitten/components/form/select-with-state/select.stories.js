import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { boolean, select } from '@storybook/addon-knobs'
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
    value: 'Top 10',
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
    value: 'Other best',
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

export const Default = args => {
  return (
    <SelectWithState
      name="select-default"
      placeholder="Choose a bike brand"
      options={options}
      searchable={boolean('Searchable', false)}
      disabled={boolean('Disabled', false)}
      clearable={boolean('Clearable', false)}
      error={boolean('Error', false)}
      valid={boolean('Valid', false)}
      tiny={boolean('Tiny', false)}
      huge={boolean('Huge', false)}
      giant={boolean('Giant', false)}
      noResultText="No results"
      autoFill={select('AutoFill', autoFill)}
      {...args}
    />
  )
}

export const WithDefaultValue = () => {
  return (
    <SelectWithState
      name="select-with-default-value"
      placeholder="Choose a bike brand"
      options={options}
      value="cannondale"
      searchable={boolean('Searchable', false)}
      disabled={boolean('Disabled', false)}
      clearable={boolean('Clearable', false)}
      error={boolean('Error', false)}
      valid={boolean('Valid', false)}
      tiny={boolean('Tiny', false)}
      huge={boolean('Huge', false)}
      giant={boolean('Giant', false)}
      noResultText="No results"
      autoFill={select('AutoFill', autoFill)}
    />
  )
}

export const WithCustomStyles = () => {
  const CustomSelect = styled(SelectWithState)`
    .k-Select__control {
      border: ${pxToRem(4)} solid red;
      border-radius: 0px;
      background-color: yellow;
      height: ${pxToRem(80)};
      outline: none;
`

  const StyledOption = styled.div`
    background-color: green;
    color: white;
  `
  return (
    <CustomSelect
      name="select-with-custom-styles"
      placeholder="Choose a bike brand"
      CustomOption={({ innerProps, children }) => {
        return <StyledOption {...innerProps}>{children}</StyledOption>
      }}
      options={options}
    />
  )
}

export const Multi = () => {
  return (
    <SelectWithState
      name="select-with-label-multi"
      placeholder="Choose a bike brand"
      options={multiOptions}
      searchable={boolean('Searchable', false)}
      clearable={boolean('Clearable', false)}
      error={boolean('Error', false)}
      valid={boolean('Valid', false)}
      tiny={boolean('Tiny', false)}
      huge={boolean('Huge', false)}
      giant={boolean('Giant', false)}
      autoFill={select('AutoFill', autoFill)}
    />
  )
}
