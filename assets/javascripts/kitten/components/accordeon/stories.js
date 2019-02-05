import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Accordeon } from './index'
import { Marger } from '../layout/marger'
import { Container } from '../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Accordeon/Accordeon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <Accordeon isAnimated={boolean('isAnimated?', true)}>
          <Accordeon.Item>
            <Accordeon.Header>Header</Accordeon.Header>
            <Accordeon.Content>
              Content
              <br />
              in
              <br />
              four
              <br />
              lines
              <br />
            </Accordeon.Content>
          </Accordeon.Item>

          <Accordeon.Item>
            <Accordeon.Header>Header</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>

          <Accordeon.Item>
            <Accordeon.Header>Header</Accordeon.Header>
            <Accordeon.Content>Content</Accordeon.Content>
          </Accordeon.Item>
        </Accordeon>
      </StoryContainer>
    )
  })
