import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropdownMenu } from './index'
import { COLORS, EllipsisIcon } from '../../../..'
import styled from 'styled-components'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Expand/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DropdownMenu" />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    open: {
      name: 'open',
      control: 'boolean',
    },
    menuPosition: {
      name: 'menuPosition',
      options: ['left', 'center', 'right'],
      control: 'inline-radio',
    },
    button: {
      name: 'button',
      control: null,
    },
    menuprops: {
      name: 'menuprops',
      control: 'object',
    },
    onToggle: {
      name: 'onToggle',
      control: null,
    },
  },
  args: {
    open: false,
    menuPosition: null,
    button: ({ open }) => (
      <>
        <EllipsisIcon color={COLORS.font1} />
        <span className="k-u-a11y-visuallyHidden">
          {open ? 'Click to close menu' : 'Click to open menu'}
        </span>
      </>
    ),
    onToggle: action('on Toggle'),
  },
}

const StyledWrapper = styled.div`
  div {
    height: 5rem;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  details {
    width: 5em;
    border: 1px solid red;
  }
`

export const Default = ({ menuPosition, ...args }) => {
  return (
    <StyledWrapper>
      <div>
        <DropdownMenu {...args} menuPosition={menuPosition || 'right'}>
          <DropdownMenu.Link href="">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Link href="">
            Another last very very very very very very very very very very long
            link
          </DropdownMenu.Link>
        </DropdownMenu>
      </div>
      <div className="k-u-flex-justifyContent-center">
        <DropdownMenu
          {...args}
          menuPosition={menuPosition || 'center'}
          button={({ open }) => (
            <span className="k-u-link k-u-link-primary1 k-u-small">
              {open ? 'close menu' : 'open menu'}
            </span>
          )}
        >
          <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
        </DropdownMenu>
      </div>
      <div className="k-u-flex-justifyContent-end">
        <DropdownMenu {...args} menuPosition={menuPosition || 'left'}>
          <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
        </DropdownMenu>
      </div>
    </StyledWrapper>
  )
}
