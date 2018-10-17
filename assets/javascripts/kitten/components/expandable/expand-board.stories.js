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
import { Text } from 'kitten/components/typography/text'

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
                  <ButtonList.Item>
                    <dl>
                      <dt style={styles.buttonListItem.base}>
                        <Text weight="regular" color="font-1" size="tiny">
                          Taille XS
                        </Text>
                      </dt>
                      <dd style={styles.buttonListItem.base}>
                        <Text color="font-1" size="micro">
                          Disponibilité: 10/30
                        </Text>
                      </dd>
                    </dl>
                  </ButtonList.Item>
                  <ButtonList.Item disabled>
                    <dl>
                      <dt style={styles.buttonListItem.base}>
                        <Text weight="regular" color="font-1" size="tiny">
                          Taille S
                        </Text>
                      </dt>
                      <dd style={styles.buttonListItem.base}>
                        <Text color="font-1" size="micro">
                          Disponibilité: 10/30
                        </Text>
                      </dd>
                    </dl>
                  </ButtonList.Item>
                  <ButtonList.Item>
                    <dl>
                      <dt style={styles.buttonListItem.base}>
                        <Text weight="regular" color="font-1" size="tiny">
                          Taille M
                        </Text>
                      </dt>
                      <dd style={styles.buttonListItem.base}>
                        <Text color="font-1" size="micro">
                          Disponibilité: 10/30
                        </Text>
                      </dd>
                    </dl>
                  </ButtonList.Item>
                </ButtonList>
              </ExpandBoard.Content>
            </ExpandBoard>
          </GridCol>
        </Grid>
      </StyleRoot>
    )),
  )

const styles = {
  buttonListItem: {
    base: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2em',
    },
    wrapper: {
      margin: '1em 0',
      padding: 0,
    },
  },
}
