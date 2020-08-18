import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { Pagination } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Container } from '../../../components/grid/container'

const alignOptions = {
  None: null,
  Left: 'left',
  Center: 'center',
  Right: 'right',
}

export const Default = () => (
  <Container>
    <Grid style={{ marginTop: '5em' }}>
      <GridCol offset="2" col="8">
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={1}
          currentPage={1}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={2}
          currentPage={1}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={2}
          currentPage={2}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={7}
          currentPage={1}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={1}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={2}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={3}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={4}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={5}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={6}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={38}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={39}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={40}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={41}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={42}
          currentPage={42}
        />
        <Pagination
          margin={boolean('Margin', true)}
          align={select('Align', alignOptions, null)}
          totalPages={9999}
          currentPage={9042}
        />
      </GridCol>
    </Grid>
  </Container>
)
