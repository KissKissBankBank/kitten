import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Accordeon } from './index'
import { Marger } from '../layout/marger'
import { Container } from '../grid/container'
import { SelectWithState } from '../form/select-with-state'

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
  .add('with <Select/> bug', () => {
    return (
      <StoryContainer>
        <Accordeon isAnimated={false}>
          <Accordeon.Item>
            <Accordeon.Header>Header</Accordeon.Header>
            <Accordeon.Content>
              <SelectWithState
                options={[
                  { value: 'foo', label: 'Foo' },
                  { value: 'bar', label: 'Bar' },
                  { value: 'baz', label: 'Baz' },
                  { value: 'foofoo', label: 'Foofoo' },
                  { value: 'barbar', label: 'Barbar' },
                  { value: 'bazbaz', label: 'Bazbaz' },
                  { value: 'foofoofoo', label: 'Foofoofoo' },
                  { value: 'barbarbar', label: 'Barbarbar' },
                  { value: 'bazbazbaz', label: 'Bazbazbaz' },
                ]}
              />
            </Accordeon.Content>
          </Accordeon.Item>
        </Accordeon>
      </StoryContainer>
    )
  })
