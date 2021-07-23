import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Details } from './index'
import { Container, Grid, GridCol, Text, COLORS } from '../../../..'
import styled from 'styled-components'

const Link = styled(Text)`
  transition: color 0.4s;

  :hover,
  :focus,
  :active {
    color: ${COLORS.primary3};
  }
`

export const Default = () => (
  <GridCol>
    <Details
      open={boolean('Open by default', false)}
      summaryRender={({ open }) => (
        <Link weight="regular" size="tiny" color="primary1">
          {open && 'Close me!'}
          {!open && 'Open me!'}
        </Link>
      )}
    >
      <Text tag="p" weight="light" size="tiny">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Details>
  </GridCol>
)

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
