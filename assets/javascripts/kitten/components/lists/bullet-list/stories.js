import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, color } from '@storybook/addon-knobs'
import { BulletList } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

storiesOf('Lists/Bullet list', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('BulletList', () => {
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
  })
