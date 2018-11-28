import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import { ButtonIconWithTooltip } from 'kitten/components/buttons/button-icon-with-tooltip'
import { Marger } from 'kitten/components/layout/marger'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('ButtonIconWithTooltip', () => {
    return (
      <Container>
        <Grid>
          <GridCol offset="1" col="3">
            <Marger top="5">
              <ButtonIconWithTooltip
                modifier={text('Modifier', 'hydrogen')}
                size={text('Size', 'tiny')}
                tooltip={text('Tooltip text', '06 00 00 00 00')}
                href={text('Tooltip link', 'tel:06 00 00 00 00')}
              >
                <PhoneIcon className="k-ButtonIcon__svg" />
              </ButtonIconWithTooltip>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  })
