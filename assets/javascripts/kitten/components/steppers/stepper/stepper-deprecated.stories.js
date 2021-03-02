import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Stepper } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Steppers/Stepper (deprecated)',
  component: Stepper,
}

export const Default = () => {
  return (
    <StoryContainer>
      <Stepper
        withAlignStart={boolean('withAlignStart', false)}
        withTinySpacing={boolean('withTinySpacing', false)}
        items={[
          {
            href: '#',
            iconType: 'validated',
            linkClassNames: 'customLinkClassName',
            text: 'validated',
          },
          {
            href: '#',
            iconType: 'inProgress',
            linkClassNames: 'customLinkClassName',
            text: 'inProgress',
          },
          {
            href: '#',
            iconType: 'default',
            linkClassNames: 'customLinkClassName',
            text: 'default',
          },
          {
            href: '#',
            iconType: 'default',
            linkClassNames: 'customLinkClassName',
            text: 'multi \nline \ncontent',
          },
        ]}
      />
    </StoryContainer>
  )
}
