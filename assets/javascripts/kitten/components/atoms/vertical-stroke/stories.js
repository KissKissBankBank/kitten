import React from 'react'
import { select } from '@storybook/addon-knobs'
import { VerticalStroke } from './'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { Grid, GridCol } from '../../layout/grid'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/VerticalStroke',
  component: VerticalStroke,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="VerticalStroke" />
      ),
    },
  },
}

export const Default = () => {
  return (
    <Container>
      <Grid>
        <GridCol col="3">
          <Marger top="5" bottom="5">
            <VerticalStroke
              size={select(
                'Size',
                { Tiny: 'tiny', Default: 'default', Big: 'big', Huge: 'huge' },
                'default',
              )}
            />
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  )
}
