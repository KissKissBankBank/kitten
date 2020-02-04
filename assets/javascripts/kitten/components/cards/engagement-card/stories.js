import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Grid, GridCol } from '../../grid/grid'
import { Container } from '../../grid/container'

const colorTextOptions = {
  Black: 'font1',
  White: 'background1',
}

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

    #### ColorText
    ~~~js
    <EngagementCard colorText="font1" />
    <EngagementCard colorText="background1" />
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
                style={{ marginRight: '20px' }}
                categorie={text('Categorie', 'Fabrication française')}
                colorText={select('Color text', colorTextOptions, 'Black')}
                imageSrc={text(
                  'Image',
                  'https://via.placeholder.com/150/caf4fe',
                )}
              />
              <EngagementCard
                style={{ marginRight: '20px' }}
                categorie={text('Categorie', 'Education')}
                colorText={select('Color text', colorTextOptions, 'Black')}
                imageSrc={text('Image', 'https://via.placeholder.com/150/fff')}
              />
              <EngagementCard
                categorie={text('Categorie', 'Bio')}
                colorText={select('Color text', colorTextOptions, 'Black')}
                imageSrc={text('Image', 'https://via.placeholder.com/150')}
              />
            </GridCol>
          </Grid>
        </Container>
      )
    },
    { info },
  )
