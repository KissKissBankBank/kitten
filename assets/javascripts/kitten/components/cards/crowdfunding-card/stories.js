import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { CrowdfundingCard } from './index'
import { CrowdfundingCardWidget } from './widget'

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
  .add(
    'Crowdfunding Card',
    withInfo(
      'The CrowdfundingCardWidget is a container that can expand on click. It can accept any content.',
    )(() => (
      <StoryContainer>
        <CrowdfundingCard
          href={text('Link', '#')}
          ownerTitle={text('Owner title', 'Owner title')}
          ownerDescription={text('Owner description', 'Owner description')}
          loading={boolean('Loading', false)}
          cardTitle={text(
            'Title',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          )}
          cardSubTitle={text(
            'SubTitle',
            'Sed ut perspiciatis unde omnis iste natus error Lorem',
          )}
          info1={text('info1', 'Lorem ipsum…')}
          info2={text('info2', 'Lorem ipsum…')}
          info3={text('info3', 'Lorem ipsum…')}
          progress={number('progress', 42)}
          state={text('State', 'Lorem ipsum…')}
        />
      </StoryContainer>
    )),
  )

  .addDecorator(withKnobs)
  .add('Crowdfunding Card Widget', () => (
    <StoryContainer>
      <CrowdfundingCardWidget
        href={text('Link', '#')}
        ownerTitle={text('Owner title', 'Owner title')}
        ownerDescription={text('Owner description', 'Owner description')}
        loading={boolean('Loading', false)}
        title={text(
          'Title',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        )}
        dayCounter={text('Counter Day', '27 jours')}
        stateDay={text('State Day', 'restant')}
        subtitle={text(
          'Subtitle',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        )}
        buttonText={text('Button text', 'Contribuer dès 5 €')}
        state={text('State', 'Sur')}
      />
    </StoryContainer>
  ))
