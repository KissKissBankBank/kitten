import React, { useState } from 'react'
import { DropdownSelect } from './index'
import { Button } from '../../../index'
import { Grid, GridCol } from '../../layout/grid'
import { ArrowIcon } from '../../graphics/icons/arrow-icon'
import { Text } from '../../atoms/typography/text'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: DropdownSelect,
  title: 'Form/DropdownSelect',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={['index.js', 'combobox.js', 'styles.js']}
          importString="DropdownSelect"
        />
      ),
    },
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

const args = {
  error: false,
  valid: false,
  disabled: false,
  hideLabel: false,
  combobox: false,
  labelText: 'label',
  size: 'normal',
  variant: 'andromeda',
  comboboxButtonLabelText: 'label',
  noResultText: 'No results',
  menuZIndex: 10000,
}

export const Default = props => {
  const [labelProps, setLabelProps] = useState(null)

  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelect
          id="dropdown-select"
          uncontrolled
          options={options}
          labelPropsGetter={passedLabelProps => {
            passedLabelProps && setLabelProps(passedLabelProps())
          }}
          defaultSelectedValue="focus"
          {...props}
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

Default.args = args

export const WithDuplicateValue = args => {
  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelect
          {...args}
          id="dropdown-select-WithDuplicateValue"
          uncontrolled
          options={[
            { value: 'france', label: 'France' },
            { value: 'france', label: 'France' },
            { value: 'irlande', label: 'Irlande' },
          ]}
          defaultSelectedValue="focus"
        />
      </GridCol>
    </Grid>
  )
}

WithDuplicateValue.args = args

export const WithComponentsForLabel = args => {
  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelect
          {...args}
          id="dropdown-select-WithComponentsForLabel"
          uncontrolled
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
          defaultSelectedValue="focus"
        />
      </GridCol>
    </Grid>
  )
}

WithComponentsForLabel.args = args

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
        labelText="Controlled Input"
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
      <Button className="k-u-margin-top-single" onClick={() => setValue('')}>
        Reset Value
      </Button>
    </>
  )
}
