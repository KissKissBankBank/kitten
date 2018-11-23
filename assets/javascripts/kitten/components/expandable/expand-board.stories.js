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
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ExpandBoardWithButtonItemList } from 'kitten/components/expandable/expand-board.examples'
import COLORS from 'kitten/constants/colors-config'

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
      </StyleRoot>
    )),
  )
  .add(
    'ExpandBoard with list of ButtonItem',
    withInfo(
      'This is an example of ExpandBoard composition with a list of buttons as content.',
    )(() => (
      <ExpandBoardWithButtonItemList
        withAnimation={boolean('With animation', true)}
      />
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
    wrapper: {
      opacity: 0,
      transition: 'opacity .5s',
    },
    displayedWrapper: {
      opacity: 1,
    },
    content: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem',
    },
    base: {
      margin: '1rem 0',
      padding: 0,
    },
  },
}
