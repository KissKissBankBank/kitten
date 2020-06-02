import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object, select } from '@storybook/addon-knobs'
import { VerticalCardWithAction } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

export default {
  component: VerticalCardWithAction,
  title: 'Cards/VerticalCardWithAction',
  decorators: [withKnobs, withInfo],
  parameters: {
    component: VerticalCardWithAction,
    info: info,
  },
}

const info = {
  text: `
    # VerticalCardWithAction
    &nbsp;

    ## Import
    ~~~js
    import { VerticalCardWithAction } from '@kisskissbankbank/kitten/src/components/cards/vertical-card-with-action'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <VerticalCardWithAction
      imageProps={{
        src: '',
        alt: '',
        style: {}),
      }}
      title="Nullam quis risus eget urna mollis ornare vel eu leo."
      titleTag="h1"
      description="Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      descriptionTag="p"
      button="Action text"
      buttonModifier="helium"
      buttonProps={{
        onClick: () => {},
        href: '#',
      }}
    />
    ~~~
  `,
  header: false,
  propTablesExclude: [Container, Grid, GridCol, Marger],
}

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
