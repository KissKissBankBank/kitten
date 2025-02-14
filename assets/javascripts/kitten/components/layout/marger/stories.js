import React from 'react'
import { Marger } from './index'
import styled from 'styled-components'
import { DocsPage } from 'storybook/docs-page'

const StyledStory = styled.div`
  display: flow-root; // displays margin background color
  background-color: lavenderblush;

  > * {
    background-color: lavender;
  }
`

export default {
  title: 'Layout/Marger',
  component: Marger,
  args: {
    top: 2,
    bottom: 2,
  },
  argTypes: {
    top: {
      name: 'top',
    },
    bottom: {
      name: 'bottom',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Marger" />,
    },
  },
}

export const Default = args => (
  <StyledStory>
    <Marger {...args}>
      Marger with {args.top}px top margin and {args.bottom}px bottom margin.
    </Marger>
  </StyledStory>
)
