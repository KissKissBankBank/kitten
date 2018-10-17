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
import { ExpandBoard } from 'kitten/components/expandable/expand-board'
import { ButtonList } from 'kitten/components/lists/button-list'
import { Grid, GridCol } from 'kitten/components/grid/grid'

storiesOf('Expand/ExpandBoard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <ExpandBoard>
              <ExpandBoard.Button expandChildren="I am opened">
                KissKissBankBank & Co
              </ExpandBoard.Button>
              <ExpandBoard.Content>
                <ul>
                  <li>KissKissBankBank</li>
                  <li>LENDOPOLIS</li>
                </ul>
              </ExpandBoard.Content>
            </ExpandBoard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
  .add(
    'with BlockList',
    withInfo('common info')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <ExpandBoard>
              <ExpandBoard.Button expandChildren="Précisez votre choix">
                Je soutiens
              </ExpandBoard.Button>
              <ExpandBoard.Content>
                <ButtonList>
                  <ButtonList.Item>Contrepartie 1</ButtonList.Item>
                  <ButtonList.Item disabled>Contrepartie 2</ButtonList.Item>
                  <ButtonList.Item>Contrepartie 3</ButtonList.Item>
                </ButtonList>
              </ExpandBoard.Content>
            </ExpandBoard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
