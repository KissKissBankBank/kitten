import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { CrowdfundingCard } from './index'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="6">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

storiesOf('Cards/CrowdfundingCard', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <CrowdfundingCard
          ownerTitle={text('Owner title', 'Owner title')}
          ownerDescription={text('Owner description', 'Owner description')}
          href={text('Link', '#')}
          loading={boolean('Loading', false)}
          cardTitle={text('Card title', 'Lorem ipsum…')}
          cardSubTitle={text(
            'Card subTitle',
            'Sed ut perspiciatis unde omnis iste natus error Lorem',
          )}
          info1={text('info1', 'Lorem ipsum…')}
          info2={text('info2', 'Lorem ipsum…')}
          info3={text('info3', 'Lorem ipsum…')}
          progress={text('progress', '42')}
          state={text('state', 'Lorem ipsum…')}
        />
      </StoryContainer>
    )
  })
