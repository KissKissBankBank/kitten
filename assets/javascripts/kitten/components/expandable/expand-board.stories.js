import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs'
import { StyleRoot } from 'radium'
import { ExpandBoard } from '../../components/expandable/expand-board'
import { ExpandBoardWithButtonItemList } from '../../components/expandable/expand-board.examples'
import { Grid, GridCol } from '../../components/grid/grid'
import { Text } from '../../components/typography/text'
import COLORS from '../../constants/colors-config'
import { pxToRem } from '../../helpers/utils/typography'

storiesOf('Expandable', module)
  .addDecorator(withKnobs)
  .add(
    'ExpandBoard',
    withInfo(
      'The ExpandBoard is a container that can expand on click. It can accept any content.',
    )(() => (
      <StyleRoot>
        <div style={styles.container}>
          <Grid>
            <GridCol offset="1" col="10">
              <ExpandBoard withAnimation={boolean('withAnimation', true)}>
                <ExpandBoard.Button
                  expandChildren={text(
                    'Expanded button text',
                    'Lancez votre projet',
                  )}
                >
                  {text('Button text', 'KissKissBankBank & Co')}
                </ExpandBoard.Button>
                <ExpandBoard.Content>
                  <div style={styles.expandBoard.defaultContent}>
                    {text(
                      'Board content',
                      `KissKissBankBank et 1 483 037 KissBankers vous aident à
                        réaliser vos projets créatifs, associatifs et
                        entrepreneuriaux. Participez à la naissance de projets
                        inspirants.`,
                    )}
                  </div>
                </ExpandBoard.Content>
              </ExpandBoard>
            </GridCol>
          </Grid>
        </div>
      </StyleRoot>
    )),
  )
  .add(
    'ExpandBoard with a List of ButtonItem',
    withInfo(
      'This is an example of ExpandBoard composition with a list of buttons as content.',
    )(() => (
      <StyleRoot>
        <div style={styles.container}>
          <Grid>
            <GridCol offset="1" col="10">
              <ExpandBoardWithButtonItemList
                expandedButtonText={text(
                  'Expanded button text',
                  'Précisez votre choix',
                )}
                buttonText={text('Button text', 'Je soutiens')}
                withAnimation={boolean('With animation', true)}
              />
            </GridCol>
          </Grid>
        </div>
      </StyleRoot>
    )),
  )

const styles = {
  container: {
    margin: pxToRem(30),
    paddingBottom: pxToRem(30),
    borderBottom: `2px solid ${COLORS.line2}`,
  },
  expandBoard: {
    defaultContent: {
      padding: '1.5em',
      borderLeft: `${COLORS.line1} 0.125rem solid`,
      borderRight: `${COLORS.line1} 0.125rem solid`,
      borderBottom: `${COLORS.line1} 0.125rem solid`,
    },
  },
}
