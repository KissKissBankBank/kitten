import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { info } from './info'
import { Details } from './index'
import { Marger } from '../layout/marger'
import { Container } from '../grid/container'
import { Grid, GridCol } from '../grid/grid'
import { Text } from '../typography/text'
import styled from 'styled-components'
import COLORS from '../../constants/colors-config'

const Link = styled(Text)`
  transition: color 0.4s;

  :hover,
  :focus,
  :active {
    color: ${COLORS.primary3};
  }
`

storiesOf('Details', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addParameters({ info })
  .add('default', () => {
    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Details>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
