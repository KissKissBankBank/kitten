import React from 'react'
import { Grid, GridCol } from '../../../..'
import { LongArrowIcon } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Icons/LongArrowIcon',
  component: LongArrowIcon,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LongArrowIcon" />
      ),
    },
  },
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="10">
      <div>
        <LongArrowIcon direction="top" />
      </div>
      <div>
        <LongArrowIcon direction="right" />
      </div>
      <div>
        <LongArrowIcon direction="bottom" />
      </div>
      <div>
        <LongArrowIcon direction="left" />
      </div>
      <div>
        <LongArrowIcon direction="top" disabled />
      </div>
    </GridCol>
  </Grid>
)
