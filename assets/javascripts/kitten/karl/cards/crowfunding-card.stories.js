import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { StyleRoot } from 'radium'
import { CrowdfundingCard } from 'kitten/components/cards/crowdfunding-card'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Cards/CrowfundingCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="5">
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
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
