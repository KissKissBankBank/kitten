import React from 'react'
import { text, object, select } from '@storybook/addon-knobs'
import { VerticalCardWithAction } from './index'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const buttonModifierOptions = {
  Hydrogen: 'hydrogen',
  Helium: 'helium',
  Lithium: 'lithium',
  Beryllium: 'beryllium',
  Carbon: 'carbon',
  Oxygen: 'oxygen',
  Checked: 'checked',
  Copper: 'copper',
}

export const Default = () => (
  <Container className="k-u-margin-top-triple k-u-margin-bottom-triple">
    <Grid>
      <GridCol col-l="4" col-s="6" col-xs="10" offset-xs="1" col-xxs="12">
        <VerticalCardWithAction
          imageProps={object('Src/Alt', {
            src: 'https://via.placeholder.com/410x230/caf4fe/caf4fe',
            alt: 'Image alt',
          })}
          title={text('Title', 'Custom title')}
          description={text(
            'Description',
            'Lorem ipsum dolor sit amet, consectetur adipisicing ' +
              'elit, sed do eiusmod tempor incididunt ut labore et ' +
              'dolore magna aliqua. Ut enim ad minim veniam, quis ' +
              'nostrud exercitation ullamco laboris nisi ut aliquip.',
          )}
          button={text('Button', 'Custom button text')}
          buttonModifier={select(
            'ButtonModifier',
            buttonModifierOptions,
            'helium',
          )}
          buttonProps={object('ButtonProps', {
            href: 'https://via.placeholder.com/410x230/caf4fe/caf4fe',
          })}
        />
      </GridCol>
    </Grid>
  </Container>
)
