import React from 'react'
import styled from 'styled-components'
import { text, number, boolean } from '@storybook/addon-knobs'
import { ExpandBoard } from '../../../components/expandable/expand-board'
import { ExpandBoardWithButtonItemList } from '../../../components/expandable/expand-board/examples'
import { Grid, GridCol } from '../../../components/grid/grid'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled.div`
  margin: ${pxToRem(30)};
  padding-bottom: ${pxToRem(30)};
  border-bottom: ${pxToRem(2)} solid ${COLORS.line2};

  .ExpandBoardStory__content {
    padding: 1.5em;
    border-left: ${COLORS.line1} 0.125rem solid;
    border-right: ${COLORS.line1} 0.125rem solid;
    border-bottom: ${COLORS.line1} 0.125rem solid;
  }
`

const radiusBorderRange = {
  range: true,
  min: 0,
  max: 25,
  step: 1,
}

const radiusBottomBorderRange = {
  range: true,
  min: 0,
  max: 25,
  step: 1,
}

export default {
  component: ExpandBoard,
  title: 'Expandable/ExpandBoard',
}

export const Default = () => (
  <StyledContainer>
    <Grid>
      <GridCol offset="1" col="10">
        <ExpandBoard withAnimation={boolean('withAnimation', true)}>
          <ExpandBoard.Button
            expandChildren={text('Expanded button text', 'Lancez votre projet')}
            borderRadius={number('Border radius', 4, radiusBorderRange)}
            big={boolean('Big', false)}
          >
            {text('Button text', 'KissKissBankBank & Co')}
          </ExpandBoard.Button>
          <ExpandBoard.Content>
            <div className="ExpandBoardStory__content">
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
  </StyledContainer>
)

export const ListOfButtons = () => (
  <StyledContainer>
    <Grid>
      <GridCol offset="1" col="10">
        <ExpandBoardWithButtonItemList
          expandedButtonText={text(
            'Expanded button text',
            'Précisez votre choix',
          )}
          buttonText={text('Button text', 'Je soutiens')}
          withAnimation={boolean('With animation', true)}
          borderRadius={number('Border radius', 4, radiusBorderRange)}
          big={boolean('Big', false)}
          withBottomBorderRadius={number(
            'Border bottom radius',
            4,
            radiusBottomBorderRange,
          )}
        />
      </GridCol>
    </Grid>
  </StyledContainer>
)
