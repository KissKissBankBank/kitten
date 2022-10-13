import React from 'react'
import { Toggletip } from './index'
import { DocsPage } from 'storybook/docs-page'
import { Button } from 'kitten'
import NumberFormat from 'react-number-format'

export default {
  title: 'Information/Toggletip',
  component: Toggletip,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Toggletip" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
}

const args = {
  actionLabel: 'Sample label',
  id: 'Toggletip-demo',
  modifier: 'info',
  children: 'The text of my Toggletip.',
  targetElement: undefined,
  bubbleColorText: null,
}

const argTypes = {
  actionLabel: {
    name: 'actionLabel',
    control: 'text',
  },
  id: {
    name: 'id',
    control: 'text',
  },
  modifier: {
    name: 'modifier',
    options: ['info', 'warning', 'danger', 'success', 'disabled'],
    control: 'radio',
  },
  children: {
    name: 'children',
    control: 'text',
  },
  targetElement: {
    name: 'targetElement',
    control: 'text',
  },
  bubbleColorText: {
    name: 'bubbleColorText',
    control: 'color',
  },
}

export const Default = args => <Toggletip {...args} />
Default.args = args
Default.argTypes = argTypes

export const CustomTargetElement = args => <Toggletip {...args} />
CustomTargetElement.args = {
  ...args,
  targetElement: (
    <p className="k-u-weight-700">This is the trigger of my tooltip</p>
  ),
}
CustomTargetElement.argTypes = argTypes

export const ButtonTargetElement = args => (
  <div className="k-u-align-right">
    <Toggletip {...args} />
  </div>
)
ButtonTargetElement.args = {
  ...args,
  modifier: 'disabled',
  targetElement: (
    <Button disabled as="span">
      Target button
    </Button>
  ),
}
ButtonTargetElement.argTypes = argTypes

export const MultipleToggletips = args => (
  <>
    <div className="k-u-margin-bottom-quadruple">
      <Toggletip {...args} id="Toggletip-top" />
    </div>
    <div className="k-u-margin-vertical-quadruple k-u-align-right">
      <Toggletip
        {...args}
        modifier="warning"
        id="Toggletip-center"
        bubbleProps={{
          zIndex: 500,
        }}
      />
    </div>
    <div className="k-u-margin-top-quadruple k-u-align-center">
      <Toggletip {...args} modifier="disabled" id="Toggletip-bottom">
        Text{' '}
        <a className="k-u-link k-u-link-font1" href="#">
          with a link
        </a>
        .<br />
        Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Toggletip>
    </div>
  </>
)
MultipleToggletips.args = {
  ...args,
  children: (
    <>
      Text{' '}
      <a className="k-u-link k-u-link-font1" href="#">
        with a link
      </a>
      .<br />
      Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus
      commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
      risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
      ullamcorper nulla non metus auctor fringilla.
    </>
  ),
}
MultipleToggletips.argTypes = argTypes
