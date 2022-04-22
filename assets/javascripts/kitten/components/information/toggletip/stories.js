import React from 'react'
import { Toggletip } from './index'
import { COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

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
}

export const Default = args => <Toggletip {...args} />
Default.args = args
Default.argTypes = argTypes

export const CustomTargetElement = args => <Toggletip {...args} />
CustomTargetElement.args = {
  ...args,
  targetElement: (
    <p className="k-u-weight-bold">This is the trigger of my tooltip</p>
  ),
}
CustomTargetElement.argTypes = argTypes

export const MultipleToggletips = args => (
  <>
    <div className="k-u-margin-bottom-quadruple">
      <Toggletip
        {...args}
        id="Toggletip-top"
        bubbleProps={{
          className: 'k-u-color-background1 k-u-weight-regular',
          color: COLORS.primary1,
        }}
      />
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
      <Toggletip {...args} modifier="disabled" id="Toggletip-bottom" />
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
