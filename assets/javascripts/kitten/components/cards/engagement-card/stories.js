import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Grid, GridCol } from '../../grid/grid'
import { Container } from '../../grid/container'

const info = {
  text: `
    #EngagementCard
    &nbsp;

    ## Import
    ~~~js
    import { EngagementCard } from '@kisskissbankbank/kitten/src/components/cards/engagement-card'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <EngagementCard />
    ~~~

    #### Categorie
    ~~~js
    <EngagementCard categorie="…" />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Cards/EngagementCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Container>
          <Grid style={{ marginTop: '3em' }}>
            <GridCol style={{ display: 'flex' }}>
              <EngagementCard
                href="#"
                style={{ marginRight: '20px' }}
                children={text('Categorie', 'Fabrication française')}
                imageSrc={text(
                  'Image',
                  'https://via.placeholder.com/150x150/caf4fe',
                )}
              />
              <EngagementCard
                href="#"
                style={{ marginRight: '20px' }}
                children={text('Categorie', 'Education')}
                imageSrc={text('Image', 'https://via.placeholder.com/150/fff')}
              />
              <EngagementCard
                href="#"
                children={text('Categorie', 'Bio')}
                imageSrc={text('Image', 'https://via.placeholder.com/150')}
              />
            </GridCol>
          </Grid>
        </Container>
      )
    },
    { info },
  )
