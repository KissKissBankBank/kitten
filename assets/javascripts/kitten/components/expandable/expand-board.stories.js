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
import { ExpandBoard } from '../../components/expandable/expand-board'
import { List } from '../../components/lists/list'
import { Grid, GridCol } from '../../components/grid/grid'
import { Text } from '../../components/typography/text'
import COLORS from '../../constants/colors-config'

storiesOf('Expandable', module)
  .addDecorator(withKnobs)
  .add(
    'ExpandBoard',
    withInfo(
      'The ExpandBoard is a container that can expand on click. It can accept any content.',
    )(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <ExpandBoard>
              <ExpandBoard.Button expandChildren="Lancez votre projet">
                KissKissBankBank & Co
              </ExpandBoard.Button>
              <ExpandBoard.Content>
                <div style={styles.expandBoard.defaultContent}>
                  KissKissBankBank et 1 483 037 KissBankers vous aident à
                  réaliser vos projets créatifs, associatifs et
                  entrepreneuriaux. Participez à la naissance de projets
                  inspirants.
                </div>
              </ExpandBoard.Content>
            </ExpandBoard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )
  .add(
    'ExpandBoard with list of ButtonItem',
    withInfo(
      'This is an example of ExpandBoard composition with a list of buttons as content.',
    )(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <ExpandBoard>
              <ExpandBoard.Button expandChildren="Précisez votre choix">
                Je soutiens
              </ExpandBoard.Button>
              <ExpandBoard.Content>
                <List>
                  <List.ButtonItem>
                    <div style={styles.buttonListItem.wrapper}>
                      <Text
                        tag="p"
                        weight="regular"
                        color="font-1"
                        size="tiny"
                        style={styles.buttonListItem.base}
                      >
                        Taille XS
                      </Text>
                      <Text tag="small" color="font1" size="micro">
                        Disponibilité: 10/30
                      </Text>
                    </div>
                  </List.ButtonItem>
                  <List.ButtonItem disabled>
                    <div style={styles.buttonListItem.wrapper}>
                      <Text
                        tag="p"
                        weight="regular"
                        color="font-1"
                        size="tiny"
                        style={styles.buttonListItem.base}
                      >
                        Taille M
                      </Text>
                      <Text tag="small" color="font1" size="micro">
                        Disponibilité: 10/30
                      </Text>
                    </div>
                  </List.ButtonItem>
                  <List.ButtonItem>
                    <div style={styles.buttonListItem.wrapper}>
                      <Text
                        tag="p"
                        weight="regular"
                        color="font-1"
                        size="tiny"
                        style={styles.buttonListItem.base}
                      >
                        Taille XXL
                      </Text>
                      <Text tag="small" color="font1" size="micro">
                        Disponibilité: 10/30
                      </Text>
                    </div>
                  </List.ButtonItem>
                </List>
              </ExpandBoard.Content>
            </ExpandBoard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )

const styles = {
  expandBoard: {
    defaultContent: {
      padding: '1.5em',
      borderLeft: `${COLORS.line1} 0.125rem solid`,
      borderRight: `${COLORS.line1} 0.125rem solid`,
      borderBottom: `${COLORS.line1} 0.125rem solid`,
    },
  },
  buttonListItem: {
    base: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem',
    },
    wrapper: {
      margin: '1rem 0',
      padding: 0,
    },
  },
}
