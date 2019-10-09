import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { CrowdfundingCard } from './index'
import { WidgetCard } from './widget/index.js'

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
  .add('Crowdfunding card', () => {
    return (
      <StoryContainer>
        <CrowdfundingCard
          href={text('Link', '#')}
          ownerTitle={text('Owner title', 'Owner title')}
          ownerDescription={text('Owner description', 'Owner description')}
          loading={boolean('Loading', false)}
          cardTitle={text('Card title', 'Lorem ipsum…')}
          cardSubTitle={text(
            'Card subTitle',
            'Sed ut perspiciatis unde omnis iste natus error Lorem',
          )}
          info1={text('info1', 'Lorem ipsum…')}
          info2={text('info2', 'Lorem ipsum…')}
          info3={text('info3', 'Lorem ipsum…')}
          progress={number('progress', 42)}
          state={text('state', 'Lorem ipsum…')}
        />
      </StoryContainer>
    )
  })

  .addDecorator(withKnobs)
  .add('Widget card', () => {
    return (
      <StoryContainer>
        <WidgetCard
          href={text('Link', '#')}
          ownerTitle={text('Owner title', 'Owner title')}
          ownerDescription={text('Owner description', 'Owner description')}
          loading={boolean('Loading', false)}
          widgetCardTitle={text('Card title', 'Lorem ipsum…')}
          counterDay={text('Counter Day', '27 jours')}
          stateDay={text('State Day', 'restant')}
          cardSubTitle={text(
            'Card subTitle',
            'Sed ut perspiciatis unde omnis iste natus error Lorem',
          )}
          buttonText={text('Button text', 'hello')}
        />
      </StoryContainer>
    )
  })
