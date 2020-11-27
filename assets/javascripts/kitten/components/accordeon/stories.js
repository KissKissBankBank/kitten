import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
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

export default {
  title: 'Expandable/Accordeon',
  component: Accordeon,
}

export const Default = () => {
  return (
    <StoryContainer>
      <Accordeon
        isAnimated={boolean('isAnimated?', true)}
        closeOnClick={boolean('close on click', false)}
        variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
      >
        <Accordeon.Item id="custom-id">
          <Accordeon.Header>Donec sed odio dui.</Accordeon.Header>
          <Accordeon.Content>
            Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
            malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra
            augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia
            quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
            <br />
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Maecenas faucibus mollis interdum. Maecenas faucibus mollis
            interdum. Curabitur blandit tempus porttitor. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Etiam porta sem
            malesuada magna mollis euismod. Maecenas faucibus mollis interdum.
            <br />
            Vestibulum id ligula porta felis euismod semper. Integer posuere
            erat a ante venenatis dapibus posuere velit aliquet. Nullam quis
            risus eget urna mollis ornare vel eu leo. Integer posuere erat a
            ante venenatis dapibus posuere velit aliquet. Curabitur blandit
            tempus porttitor.
            <br />
            Donec id elit non mi porta gravida at eget metus. Etiam porta sem
            malesuada magna mollis euismod. Maecenas faucibus mollis interdum.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Nullam id dolor id nibh ultricies vehicula ut id elit.
            <br />
          </Accordeon.Content>
        </Accordeon.Item>

        <Accordeon.Item>
          <Accordeon.Header>
            Etiam porta sem malesuada magna mollis euismod. Integer posuere erat
            a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id
            nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </Accordeon.Header>
          <Accordeon.Content>
            Sed posuere consectetur est at lobortis.
          </Accordeon.Content>
        </Accordeon.Item>

        <Accordeon.Item>
          <Accordeon.Header>
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </Accordeon.Header>
          <Accordeon.Content>
            Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio
            dui. Integer posuere erat a ante venenatis dapibus posuere velit
            aliquet. Vestibulum id ligula porta felis euismod semper.
          </Accordeon.Content>
        </Accordeon.Item>
      </Accordeon>
    </StoryContainer>
  )
}

export const WithOverflowBug = () => {
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
}
