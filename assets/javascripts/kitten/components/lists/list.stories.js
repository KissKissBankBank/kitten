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
import { List } from 'kitten/components/lists/list'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Text } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add(
    'Simple list',
    withInfo('This is a simple list component')(() => (
      <StyleRoot>
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
      </StyleRoot>
    )),
  )
  .add(
    'List with ButtonItem',
    withInfo('This is an example of List with ButtonItem')(() => (
      <StyleRoot>
        <Grid>
          <GridCol offset="1" col="10">
            <Marger top="1">
              <List>
                <List.ButtonItem withTopBorder>
                  <div style={styles.buttonListItem.wrapper}>
                    <Text
                      tag="p"
                      weight="regular"
                      color="font1"
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
                      color="font1"
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
                      color="font1"
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
            </Marger>
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
