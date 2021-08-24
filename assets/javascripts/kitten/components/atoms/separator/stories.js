import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Separator } from './'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { Grid, GridCol } from '../../layout/grid'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Separator" />,
    },
  },
}

export const Default = () => {
  return (
    <Container>
      <Grid>
        <GridCol col="3">
          <Marger top="5" bottom="5">
            <Separator darker={boolean('Darker?', false)} />
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  )
}
