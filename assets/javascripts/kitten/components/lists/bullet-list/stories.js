import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { BulletList } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

const info = {
  text: `
    # BulletList
    &nbsp;

    ## Import
    ~~~js
    import { BulletList } from '@kisskissbankbank/kitten/src/components/lists/bullet-list'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <BulletList
      items={[ key: '…', item: '…' ]}
    />
    ~~~

    #### With differents sizes
    ~~~js
    <BulletList
      small
      large
      big
      huge
    />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('List/BulletList', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="8">
            <BulletList
              small={boolean('Small', false)}
              large={boolean('Large', false)}
              big={boolean('Big', false)}
              huge={boolean('Huge', false)}
              items={[
                { key: '1', item: 'Dis Manibus' },
                { key: '2', item: 'Calpurnia Felicla' },
                { key: '3', item: 'Germulio coniugi' },
              ]}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
