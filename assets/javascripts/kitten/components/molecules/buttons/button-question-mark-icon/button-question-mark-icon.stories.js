import React from 'react'
import { ButtonQuestionMarkIcon } from './index'
import { Marger, Container, Grid, GridCol } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: ButtonQuestionMarkIcon,
  title: 'Molecules/Buttons/ButtonQuestionMarkIcon',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ButtonQuestionMarkIcon" />
      ),
    },
  },
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      <Grid>
        <GridCol col-s="3" col-l="2">
          {children}
        </GridCol>
      </Grid>
    </Marger>
  </Container>
)

export const Default = () => (
  <StoryContainer>
    <ButtonQuestionMarkIcon />
  </StoryContainer>
)
