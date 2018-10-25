import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { RewardCard } from 'kitten/components/cards/reward-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/RewardCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <RewardCard
              titleAmount={text('Title amount', 'For 00€')}
              subtitle={text(
                'subtitle',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              )}
              description={text(
                'Text Description',
                'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',
              )}
              infos={[
                object('Infos[0]', { label: 'Contributors:', value: '35' }),
                object('Infos[1]', {
                  label: 'Delivery::',
                  value: 'January 2018',
                }),
                object('Infos[2]', { label: 'Availability:', value: '200' }),
              ]}
              buttonLabel={text('Button label', 'Choose')}
              manageContributionDescription={text(
                'Manage contribution description',
                'You contributed to this project',
              )}
              manageContributionLinkLabel={text(
                'Manage contribution link label',
                'Manage my contribution',
              )}
              manageContributionLink={text(
                'Manage contribution link href',
                'https://www.google.com',
              )}
              isDisabled={boolean('Is Disabled', false)}
              starred={boolean('Is Starred', false)}
              starLabel={text('Label for featured reward', 'Featured reward')}
              imageProps={object('Src/Alt', {
                src: 'http://via.placeholder.com/200x240/caf4fe/caf4fe',
                alt: '',
              })}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
