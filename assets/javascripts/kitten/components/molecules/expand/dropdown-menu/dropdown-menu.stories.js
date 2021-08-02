import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropdownMenu } from './index'
import {
  Container,
  Grid,
  GridCol,
  COLORS,
  WaitingIcon,
} from '../../../..'

export const Default = ({ open }) => (
  <DropdownMenu
    open={open}
    onToggle={action('on Toggle')}
    button={({ open }) => (
      <>
        <WaitingIcon color={COLORS.font1} />
        <span className="k-u-a11y-visuallyHidden">
          {open ? 'Click to close menu' : 'Click to open menu'}
        </span>
      </>
    )}
  >
    <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
    <DropdownMenu.Button>Click this button</DropdownMenu.Button>
    <DropdownMenu.Separator />
    <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
  </DropdownMenu>
)

Default.argTypes = {
  open: {
    name: 'open',
    control: { type: 'boolean' },
  },
}

Default.args = {
  open: false,
}

Default.decorators = [
  Story => (
    <Container>
      <Grid>
        <GridCol>
          <Story />
        </GridCol>
      </Grid>
    </Container>
  ),
]
