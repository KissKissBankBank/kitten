import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropdownMenu } from './index'
import {
  COLORS,
  EllipsisIcon,
  AvatarWithTextAndBadge,
  Text,
  ArrowIcon,
} from 'kitten'
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
    positionedButton: {
      name: 'positionedButton',
      control: 'boolean',
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
    positionedButton: false,
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
        <DropdownMenu
          {...args}
          positionedButton
          menuPosition={menuPosition || 'right'}
        >
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
          positionedButton
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
        <DropdownMenu
          {...args}
          positionedButton
          menuPosition={menuPosition || 'left'}
        >
          <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
        </DropdownMenu>
      </div>
    </StyledWrapper>
  )
}

Default.decorators = [story => <div className="story-Container">{story()}</div>]

export const WithAvatar = args => (
  <>
    <div>&nbsp;</div>
    <div>
      <DropdownMenu
        {...args}
        menuPosition="center"
        button={({ open }) => (
          <AvatarWithTextAndBadge>
            <AvatarWithTextAndBadge.Image alt="" src="/kitten-0.jpg" />

            <AvatarWithTextAndBadge.Text>
              <Text
                weight="regular"
                className="k-u-block k-u-link k-u-link-primary1"
              >
                Kitten Kitty
              </Text>
              <Text className="k-u-block">Cat City</Text>
            </AvatarWithTextAndBadge.Text>
            <ArrowIcon
              className="k-u-flex-shrink-none"
              direction={open ? 'top' : 'bottom'}
            />
          </AvatarWithTextAndBadge>
        )}
      >
        <DropdownMenu.Link href="">A link</DropdownMenu.Link>
        <DropdownMenu.Button>Click this button</DropdownMenu.Button>
        <DropdownMenu.Link href="">
          Another last very very very very very very very very very very long
          link
        </DropdownMenu.Link>
      </DropdownMenu>
    </div>
  </>
)

WithAvatar.decorators = [
  story => <div className="story-Container story-Grid">{story()}</div>,
]
