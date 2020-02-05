import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Grid, GridCol } from '../../grid/grid'
import { Container } from '../../grid/container'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledEngagementCard = styled(EngagementCard)`
  width: ${pxToRem(100)};
  height: ${pxToRem(130)};
  margin-right: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(110)};
    height: ${pxToRem(150)};
  }
`

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
              <StyledEngagementCard
                href="#"
                children={text('Categorie', 'Fabrication française')}
                imageSrc={text(
                  'Image',
                  'https://via.placeholder.com/150x150/caf4fe',
                )}
              />
              <StyledEngagementCard
                href="#"
                children={text('Categorie', 'Education')}
                imageSrc={text('Image', 'https://via.placeholder.com/150/fff')}
              />
              <StyledEngagementCard
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
