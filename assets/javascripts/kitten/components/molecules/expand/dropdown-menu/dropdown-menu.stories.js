import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropdownMenu } from './index'
import { Container, COLORS, EllipsisIcon } from '../../../..'
import styled from 'styled-components'

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

export const Default = ({ open, menuPosition }) => (
  <StyledWrapper>
    <div>
      <DropdownMenu
        open={open}
        menuPosition={menuPosition || 'right'}
        onToggle={action('on Toggle')}
        button={({ open }) => (
          <>
            <EllipsisIcon color={COLORS.font1} />
            <span className="k-u-a11y-visuallyHidden">
              {open ? 'Click to close menu' : 'Click to open menu'}
            </span>
          </>
        )}
      >
        <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
        <DropdownMenu.Button>Click this button</DropdownMenu.Button>
        <DropdownMenu.Link href="#">
          Another last very very very very very very very very very very long
          link
        </DropdownMenu.Link>
      </DropdownMenu>
    </div>
    <div className="k-u-flex-justifyContent-center">
      <DropdownMenu
        open={open}
        menuPosition={menuPosition || 'center'}
        onToggle={action('on Toggle')}
        button={({ open }) => (
          <>
            <EllipsisIcon color={COLORS.font1} />
            <span className="k-u-a11y-visuallyHidden">
              {open ? 'Click to close menu' : 'Click to open menu'}
            </span>
          </>
        )}
      >
        <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
        <DropdownMenu.Button>Click this button</DropdownMenu.Button>
        <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
      </DropdownMenu>
    </div>
    <div className="k-u-flex-justifyContent-end">
      <DropdownMenu
        open={open}
        menuPosition={menuPosition || 'left'}
        onToggle={action('on Toggle')}
        button={({ open }) => (
          <>
            <EllipsisIcon color={COLORS.font1} />
            <span className="k-u-a11y-visuallyHidden">
              {open ? 'Click to close menu' : 'Click to open menu'}
            </span>
          </>
        )}
      >
        <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
        <DropdownMenu.Button>Click this button</DropdownMenu.Button>
        <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
      </DropdownMenu>
    </div>
  </StyledWrapper>
)

Default.argTypes = {
  open: {
    name: 'open',
    control: { type: 'boolean' },
  },
  menuPosition: {
    name: 'menuPosition',
    options: ['left', 'center', 'right'],
    control: { type: 'inline-radio' },
  },
}

Default.args = {
  open: false,
  menuPosition: null,
}

Default.decorators = [
  Story => (
    <Container>
      <Story />
    </Container>
  ),
]
