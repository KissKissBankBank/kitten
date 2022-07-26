import React from 'react'
import { Grid, GridCol } from 'kitten'
import { ArrowIcon } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Icons/ArrowIcon',
  component: ArrowIcon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ArrowIcon" />,
    },
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="10">
      <div>
        <ArrowIcon direction="top" />
      </div>
      <div>
        <ArrowIcon direction="right" />
      </div>
      <div>
        <ArrowIcon direction="bottom" />
      </div>
      <div>
        <ArrowIcon direction="left" />
      </div>
      <div>
        <ArrowIcon direction="top" disabled />
      </div>
    </GridCol>
  </Grid>
)
