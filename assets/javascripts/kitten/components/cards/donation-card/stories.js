import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { StyleRoot } from 'radium'
import { DonationCard } from './index'
import { Grid, GridCol } from '../../grid/grid'

storiesOf('Cards/DonationCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <DonationCard
              title={text(
                'Title Amount',
                'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
              )}
              buttonLabel={text('Button', 'Choose')}
              isDisabled={boolean('Is Disabled', false)}
              amountLabel={text('Label Input', 'Enter your amount')}
              amountPlaceholder={text('Placeholder input', 'Your amount')}
              isDisabled={boolean('Is Disabled', false)}
              isError={boolean('Is error', false)}
              errorTag={text('Error tag', 'lorem ipsum dolor sit amet')}
            />
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
