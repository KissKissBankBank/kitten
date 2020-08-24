import { Container } from '../../grid/container'
import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Tooltip } from './index'

const StoryContainer = ({ children }) => (
  <Container className="k-u-margin-top-quintuple k-u-margin-bottom-quintuple k-u-margin-left-decuple--important">
    {children}
  </Container>
)

export default {
  title: 'Tooltip/Tooltip',
  component: Tooltip,
}

const selectChoices = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left',
}

export const Default = () => {
  return (
    <StoryContainer>
      <Tooltip
        id="tooltip-demo"
        place={select('Place', selectChoices, 'right')}
        children={text('Text', 'The text of my Tooltip.')}
      />
    </StoryContainer>
  )
}

export const MultipleTooltips = () => (
  <>
    <StoryContainer>
      <Tooltip id="tooltip-top" place="left" children="First tooltip" />
    </StoryContainer>
    <StoryContainer>
      <Tooltip id="tooltip-bottom" place="right">
        This is a text <a href="#">with a link</a>.
      </Tooltip>
    </StoryContainer>
  </>
)
