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
      <GridCol col-m="6">
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
          state={text('State', 'Lorem ipsum…')}
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
          titleWidget={text(
            'Card title',
            'Les Arts dessinés : devenez abonné-fondateur',
          )}
          counterDay={text('Counter Day', '27 jours')}
          stateDay={text('State Day', 'restant')}
          subTitleWidget={text(
            'Card subTitle',
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Aenean massa. Cum sociis natoque penatibus et ma',
          )}
          buttonText={text('Button text', 'Contribuer dès 5 €')}
          stateWidget={text('State widget', 'Sur')}
        />
      </StoryContainer>
    )
  })
