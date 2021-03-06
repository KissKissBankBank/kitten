import React, { useState } from 'react'
import { text, boolean, select, number } from '@storybook/addon-knobs'
import { DropdownSelect } from './index'
import { Button } from '../../../index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ArrowIcon } from '../../icons/arrow-icon'
import { Text } from '../../typography/text'

export default {
  component: DropdownSelect,
  title: 'Form/DropdownSelect',
  parameters: {
    component: DropdownSelect,
  },
}

const options = [
  {
    value: 'bianchi',
    label: 'Bianchi',
    children: [
      { value: 'bmc', label: 'BMC' },
      { value: 'cannondale', label: 'Cannondale' },
    ],
  },
  { value: 'canyon', label: 'Canyon' },
  { value: 'cervelo', label: 'Cervelo' },
  { value: 'diamondback', label: 'Diamondback' },
  { value: 'eddy merckx', label: 'Eddy Merckx', disabled: true },
  { value: 'felt', label: 'Felt' },
  { value: 'focus', label: 'Focus' },
  {
    value: 'fuji',
    label:
      'Fuji Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.',
  },
]

export const Default = () => {
  const [labelProps, setLabelProps] = useState(null)

  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelect
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={boolean('hide label?', false)}
          combobox={boolean('combobox?', false)}
          labelText={text('LabelText', 'label')}
          options={options}
          labelPropsGetter={passedLabelProps => {
            passedLabelProps && setLabelProps(passedLabelProps())
          }}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
          variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
          defaultSelectedValue="focus"
          comboboxButtonLabelText={text('Buton aria-label', 'label')}
          noResultText={text('No results text', 'No results')}
          menuZIndex={number('menuZIndex', 1000)}
        />
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>labelPropsGetter props:</p>
        <ul>
          {labelProps &&
            Object.keys(labelProps).map(prop => (
              <li key={prop}>
                {prop}: {labelProps[prop]}
              </li>
            ))}
        </ul>
      </GridCol>
    </Grid>
  )
}

export const WithDuplicateValue = () => {
  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelect
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={boolean('hide label?', false)}
          combobox={true}
          labelText={text('LabelText', 'label')}
          options={[
            { value: 'france', label: 'France' },
            { value: 'france', label: 'France' },
            { value: 'irlande', label: 'Irlande' },
          ]}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
          variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
          defaultSelectedValue="focus"
          comboboxButtonLabelText={text('Buton aria-label', 'label')}
          noResultText={text('No results text', 'No results')}
          uniqLabelOnSearch={boolean('uniqLabelOnSearch', false)}
          menuZIndex={number('menuZIndex', 1000)}
        />
      </GridCol>
    </Grid>
  )
}

export const WithComponentsForLabel = () => {
  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelect
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={boolean('hide label?', false)}
          combobox={true}
          labelText={text('LabelText', 'label')}
          options={[
            {
              value: 'France',
              searchableLabel: 'France',
              label: (
                <>
                  <ArrowIcon direction="left" />
                  <Text weight="bold">Un titre de la France</Text>
                  Une explication du label
                </>
              ),
            },
            {
              value: 'Espagne',
              searchableLabel: 'Espagne',
              label: (
                <>
                  <ArrowIcon direction="left" />
                  <Text weight="bold">Un titre de l'Espagne</Text>
                  Une explication du label
                </>
              ),
            },
          ]}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
          variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
          defaultSelectedValue="focus"
          comboboxButtonLabelText={text('Buton aria-label', 'label')}
          noResultText={text('No results text', 'No results')}
          uniqLabelOnSearch={boolean('uniqLabelOnSearch', false)}
          menuZIndex={number('menuZIndex', 1000)}
        />
      </GridCol>
    </Grid>
  )
}

export const ControlledInput = () => {
  const [value, setValue] = useState('felt')

  const getRandomOption = () => {
    const enabledOptions = options.map(option => {
      if (!option.disabled) return option
    })

    const randomOption =
      enabledOptions[Math.floor(Math.random() * enabledOptions.length)]

    return randomOption.value
  }

  return (
    <>
      <DropdownSelect
        id="ControlledInput"
        combobox={true}
        options={options}
        value={value}
        defaultSelectedValue="focus"
        onChange={e => {
          console.warn('onChange', e)
          if (!e) return

          setValue(e.value)
        }}
        onBlur={e => console.warn('onBlur', e)}
      />
      <Button
        className="k-u-margin-top-single"
        onClick={() => setValue(getRandomOption())}
      >
        Change Value
      </Button>
    </>
  )
}
