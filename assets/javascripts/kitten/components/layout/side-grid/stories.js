import React from 'react'
import { SideGrid, SideGridContent, SideGridAside } from './index'
import {
  InformationBox,
  Marger,
  Paragraph,
  Grid,
  GridCol,
  Title,
} from '../../../index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Layout/SideGrid',
  component: SideGrid,
  args: {
    asidePosition: 'end',
    asideSize: 'default',
  },
  argTypes: {
    asidePosition: {
      name: 'asidePosition',
      options: ['end', 'start'],
      control: 'select',
    },
    asideSize: {
      name: 'asideSize',
      options: ['default', 'small', 'large'],
      control: 'select',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="SideGrid" />,
    },
  },
}

export const Default = args => (
  <SideGrid {...args}>
    <SideGridContent>
      <Grid>
        <GridCol col-s="10" offset-s="1">
          <Marger top="8" bottom="4">
            <Title modifier="secondary" margin={false}>
              Title
            </Title>
          </Marger>

          <Marger bottom="5">
            <Paragraph margin={false}>
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Curabitur blandit tempus
              porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </Paragraph>
          </Marger>
        </GridCol>
      </Grid>

      <Grid>
        <GridCol col-s="10" offset-s="1"></GridCol>
      </Grid>
    </SideGridContent>

    <SideGridAside>
      <Marger
        top="4"
        bottom="5"
        className="k-u-margin-right-quadruple k-u-margin-left-quadruple"
      >
        <InformationBox title="Maecenas sed diam eget risus varius blandit sit amet non magna.">
          <Marger top="1" bottom="1">
            <Paragraph modifier="quaternary" margin={false}>
              Cras mattis consectetur purus sit amet fermentum. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Donec ullamcorper
              nulla non metus auctor fringilla. Nulla vitae elit libero, a
              pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </Paragraph>
          </Marger>

          <Marger top="1">
            <Paragraph modifier="quaternary" margin={false}>
              Sed posuere consectetur est at lobortis. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Paragraph>
          </Marger>
        </InformationBox>
      </Marger>
    </SideGridAside>
  </SideGrid>
)
