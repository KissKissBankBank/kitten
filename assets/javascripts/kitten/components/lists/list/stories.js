import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { List } from './index'
import { Grid, GridCol } from '../../grid/grid'
import { Text } from '../../typography/text'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { info } from './info'

const ExampleWrapper = styled.div`
  margin: ${pxToRem(16)} 0;
  padding: 0;
`

const ExampleText = styled(Text)`
  margin: 0;
  padding: 0;
  line-height: 1.2;
`

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Simple list',
    () => (
      <Container>
        <Grid>
          <GridCol offset="1" col="10">
            <Marger top="1">
              <List>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
              </List>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    ),
    { info },
  )
  .add(
    'List with ButtonItem',
    () => (
      <Container>
        <Grid>
          <GridCol offset="1" col="10">
            <Marger top="1">
              <List>
                <List.ButtonItem withTopBorder as="a" href="#camarche">
                  <ExampleWrapper>
                    <ExampleText
                      tag="p"
                      weight="regular"
                      color="font1"
                      size="tiny"
                    >
                      Taille XS
                    </ExampleText>
                    <Text tag="small" color="font1" size="micro">
                      Disponibilité: 10/30
                    </Text>
                  </ExampleWrapper>
                </List.ButtonItem>
                <List.ButtonItem disabled>
                  <ExampleWrapper>
                    <ExampleText
                      tag="p"
                      weight="regular"
                      color="font1"
                      size="tiny"
                    >
                      Taille M
                    </ExampleText>
                    <Text tag="small" color="font1" size="micro">
                      Disponibilité: 10/30
                    </Text>
                  </ExampleWrapper>
                </List.ButtonItem>
                <List.ButtonItem>
                  <ExampleWrapper>
                    <ExampleText
                      tag="p"
                      weight="regular"
                      color="font1"
                      size="tiny"
                    >
                      Taille XXL
                    </ExampleText>
                    <Text tag="small" color="font1" size="micro">
                      Disponibilité: 10/30
                    </Text>
                  </ExampleWrapper>
                </List.ButtonItem>
              </List>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    ),
    { info },
  )
