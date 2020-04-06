import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { Pagination } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

const info = {
  text: `
    #Pagination
    &nbsp;

    ## Import
    ~~~js
    import { Pagination } from '@kisskissbankbank/kitten/src/components/navigation/pagination'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <Pagination />
    ~~~

    ### With total pages
    ~~~js
    <Pagination
      totalPages={…}
    />
    ~~~

    ### With current page
    ~~~js
    <Pagination
      currentPage={…}
    />
    ~~~
  `,
  header: false,
  propTables: false,
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
            <Pagination totalPages={1} currentPage={1} />
            <Pagination totalPages={2} currentPage={1} />
            <Pagination totalPages={2} currentPage={2} />
            <Pagination totalPages={7} currentPage={1} />
            <Pagination totalPages={42} currentPage={1} />
            <Pagination totalPages={42} currentPage={2} />
            <Pagination totalPages={42} currentPage={3} />
            <Pagination totalPages={42} currentPage={4} />
            <Pagination totalPages={42} currentPage={5} />
            <Pagination totalPages={42} currentPage={6} />
            <Pagination totalPages={42} currentPage={38} />
            <Pagination totalPages={42} currentPage={39} />
            <Pagination totalPages={42} currentPage={40} />
            <Pagination totalPages={42} currentPage={41} />
            <Pagination totalPages={42} currentPage={42} />
            <Pagination totalPages={9999} currentPage={9042} />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
