import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { AdaptableGrid, AdaptableGridCol } from './index'
import { Container } from '../../../components/grid/container'

storiesOf('Grid/AdaptableGrid', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo(
      'The AdaptableGrid enables the integration of a grid system. It uses AdaptableGridCol to structure the content. The tag of the container and the columns can be customized.',
    ),
  )
  .add('default', () => (
    <Container>
      <AdaptableGrid colNumber={10} tag={text('Container tag', 'div')}>
        <AdaptableGridCol
          tag={text('First child tag', 'div')}
          col={4}
          offset={3}
          col-s={5}
          offset-s={0}
          col-l={2}
        >
          <div style={{ background: '#fae9d8', textAlign: 'center' }}>
            {'🚲 '.repeat(5)}
          </div>
        </AdaptableGridCol>
        <AdaptableGridCol
          tag={text('Second child tag', 'div')}
          col-s={3}
          offset-s={2}
          col-l={6}
          offset-l={1}
        >
          <div style={{ background: '#fae9d8', textAlign: 'center' }}>
            {'🚲 '.repeat(8)}
          </div>
        </AdaptableGridCol>
      </AdaptableGrid>
    </Container>
  ))
