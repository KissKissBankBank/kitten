import React from 'react'
import { Grid, GridCol } from 'kitten'
import { LongArrowIconNext } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Icons Next/LongArrowIconNext',
  component: LongArrowIconNext,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LongArrowIconNext" />
      ),
    },
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="10">
      <div>
        <LongArrowIconNext direction="up" />
      </div>
      <div>
        <LongArrowIconNext direction="right" />
      </div>
      <div>
        <LongArrowIconNext direction="down" />
      </div>
      <div>
        <LongArrowIconNext direction="left" />
      </div>
    </GridCol>
  </Grid>
)
