import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { InfoLines } from './index'
import { COLORS, TextInput, Text, } from '../../..'

export default {
  title: 'Molecules/InfoLines',
  component: InfoLines,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="InfoLines" />,
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
    infos: {
      name: 'infos',
      control: { type: 'object' },
    },
    borderColor: {
      name: 'borderColor',
      control: { type: 'color' },
    },
    withBorderRadius: {
      name: 'withBorderRadius',
      control: { type: 'boolean' },
    },
    withLeftRightBorder: {
      name: 'withLeftRightBorder',
      control: { type: 'boolean' },
    },
    withoutTopBottomBorder: {
      name: 'withoutTopBottomBorder',
      control: { type: 'boolean' },
    },
    withoutResponsive: {
      name: 'withoutResponsive',
      control: { type: 'boolean' },
    },
    descriptionTagList: {
      name: 'descriptionTagList',
      control: { type: 'text' },
    },
    titleTagList: {
      name: 'titleTagList',
      control: { type: 'text' },
    },
    itemTagList: {
      name: 'itemTagList',
      control: { type: 'text' },
    },
  },
}


export const Default = args => <InfoLines {...args} />

export const WithFormComponents = Default.bind({})

const args = {
  infos: [
    { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
    { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
  ],
  borderColor: COLORS.line1,
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd',
}

Default.args = args
WithFormComponents.args = {
  ...args,
  infos: [
    { key: <Text size="tiny">Lorem importString docs size amet</Text>, value: <TextInput name="input-item-1" size="tiny" variant="orion" placeholder="value 1" />, id: 'item-1' },
    { key: <Text size="tiny">Dolor</Text>, value: <TextInput name="input-item-2" size="tiny" variant="orion" placeholder="value 2" />, id: 'item-2' },
  ],
}
