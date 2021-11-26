import React from 'react'
import { Grid, GridCol } from 'kitten'
import { LargeArrowIconNext } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Icons Next/LargeArrowIconNext',
  component: LargeArrowIconNext,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LargeArrowIconNext" />
      ),
    },
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="10">
      <div>
        <LargeArrowIconNext direction="up" />
      </div>
      <div>
        <LargeArrowIconNext direction="right" />
      </div>
      <div>
        <LargeArrowIconNext direction="down" />
      </div>
      <div>
        <LargeArrowIconNext direction="left" />
      </div>
    </GridCol>
  </Grid>
)
