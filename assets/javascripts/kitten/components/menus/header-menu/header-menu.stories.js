import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { HeaderMenu } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { LendopolisLogo } from '../../logos/lendopolis-logo'
import { ExternalRichLink } from '../../links/external-rich-link'

const StoryGrid = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="3">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

storiesOf('Menus/HeaderMenu', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryGrid>
        <HeaderMenu
          selectedBorderSide={select(
            'Selected border side',
            { Left: 'left', Right: 'right' },
            'left',
          )}
        >
          <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
          <HeaderMenu.Item href="#" isSelected>
            Item 2
          </HeaderMenu.Item>
          <HeaderMenu.Item href="#">Item 3</HeaderMenu.Item>
          <HeaderMenu.Item href="#" borderTop modifier="light">
            Item 4 (light)
          </HeaderMenu.Item>
          <HeaderMenu.Item borderTop>
            <ExternalRichLink href="#" margin={false}>
              <LendopolisLogo primaryColor="#222" />
            </ExternalRichLink>
          </HeaderMenu.Item>
        </HeaderMenu>
      </StoryGrid>
    )
  })
