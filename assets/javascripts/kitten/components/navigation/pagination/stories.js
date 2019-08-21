import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs'
import { Pagination } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

const info = {
  text: `
  `,
}

storiesOf('Navigation/Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Pagination',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="8">
            <Pagination
              totalPages={number('Custom total page', 1)}
              currentPage={number('Custom current page', 1)}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
