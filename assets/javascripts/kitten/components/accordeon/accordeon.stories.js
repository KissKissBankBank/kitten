import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { Accordeon } from './index'
import { Marger } from '../layout/marger'
import { Container } from '../grid/container'
import { Grid, GridCol } from '../grid/grid'

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

storiesOf('Accordeon/Accordeon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryGrid>
        <Accordeon>
          <Accordeon.Item>
            <Accordeon.Header>
              <p>Header</p>
            </Accordeon.Header>

            <Accordeon.Content>
              <p>Content</p>
            </Accordeon.Content>
          </Accordeon.Item>

          <Accordeon.Item>
            <Accordeon.Header>
              <p>Header</p>
            </Accordeon.Header>

            <Accordeon.Content>
              <p>Content</p>
            </Accordeon.Content>
          </Accordeon.Item>

          <Accordeon.Item>
            <Accordeon.Header>
              <p>Header</p>
            </Accordeon.Header>

            <Accordeon.Content>
              <p>Content</p>
            </Accordeon.Content>
          </Accordeon.Item>
        </Accordeon>
      </StoryGrid>
    )
  })
