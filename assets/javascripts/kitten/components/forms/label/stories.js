import React from 'react'
import styled from 'styled-components'
import { Label } from './index'
import { DocsPage } from 'storybook/docs-page'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Label" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    focusId: {
      name: 'focusId',
      control: 'text',
    },
    size: {
      name: 'size',
      options: [null, undefined, 'normal', 'tiny', 'micro'],
      control: 'select',
    },
    withoutPointerEvents: {
      name: 'withoutPointerEvents',
      control: 'boolean',
    },
    dot: {
      name: 'dot',
      control: 'object',
    },
  },
}

const args = {
  children: 'Label',
  focusId: null,
  size: 'normal',
  withoutPointerEvents: false,
}

const FocusableComponent = styled.div`
  margin-top: 1.25rem;

  .focused {
    display: none;
  }

  &:focus {
    .focused {
      display: inline;
    }

    .not-focused {
      display: none;
    }
  }
`

export const Default = args => <Label {...args} />

Default.storyName = 'Label'

export const WithDot = args => <Label {...args} />

WithDot.args = {
  ...args,
  dot: {
    width: 7,
    backgroundColor: COLORS.orange,
    title: 'champs obligatoire',
  },
}

export const WithFocusId = args => (
  <>
    <Label {...args} focusId="focusable-component" />
    <FocusableComponent id="focusable-component" tabIndex="0">
      <span className="k-u-color-primary1 k-u-weight-bold k-u-background-color-primary5 focused">
        😸 Focused
      </span>
      <span className="k-u-color-font2 k-u-weight-regular not-focused">
        😿 Not focused
      </span>
    </FocusableComponent>
  </>
)

WithFocusId.storyName = 'with focusId prop'
