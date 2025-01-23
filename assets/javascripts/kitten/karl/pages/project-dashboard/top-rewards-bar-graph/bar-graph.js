import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ResponsiveBar } from '@nivo/bar'
import { horizontalGraphData as data } from './data'
import { TooltipElement } from './tooltip'

const graphMarginTop = 50
const graphMarginBottom = 30
const graphMarginLeft = 30
const graphMarginRight = 30
const rewardBarsHeight = 124
const graphInnerPadding = rewardBarsHeight / 2
const invisibleBorderWidth = 2
const graphWhiteSpace =
  graphInnerPadding + graphMarginTop + graphMarginBottom - invisibleBorderWidth

const StyledDatavizContainer = styled.div`
  height: ${({ itemsNumber }) => {
    return pxToRem(itemsNumber * rewardBarsHeight + graphWhiteSpace)
  }};
  margin-left: ${pxToRem(-graphMarginLeft)};
  margin-right: ${pxToRem(-graphMarginRight)};

  /* this selector uniquely identifies the right ticks */
  text[transform='translate(-23,0) rotate(23)'] {
    transform: translate(0px, -45px);
    text-anchor: start;
    dominant-baseline: text-after-edge;
  }
`

const StyledModifiers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const StyledLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  /* show a hand cursor on hover; some argue that we
  should keep the default arrow cursor for buttons */
  cursor: pointer;

  display: flex;
  align-items: center;
  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${stepToRem(-1)};

  &.LegendButton__collected::before {
    color: #19b4fa;
  }
  &.LegendButton__percentages::before {
    color: #5a32aa;
  }

  &::before {
    content: '';
    display: inline-block;
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    box-sizing: border-box;
    background-color: currentColor;
    margin-right: ${pxToRem(10)};
    border-radius: 50%;
    border: 4px solid currentColor;
  }

  &[aria-checked="false"]::before {
    background-color: ${COLORS.background1};
  }
`

export const restoreTotalValue = value =>
  Math.round(value * (data.maxValues.collected / data.thresholds.collected))
export const restorePercentageValue = value =>
  Math.round(value * (data.maxValues.percentages / data.thresholds.percentages))

export const BarGraph = () => {
  const [keys, setKeys] = useState(['collected', 'percentages'])
  const [isTotalsDisplayed, displayTotals] = useState(true)
  const [isPercentageDisplayed, displayPercentage] = useState(true)

  useEffect(() => {
    let tempKeys = []

    if (isTotalsDisplayed) {
      tempKeys.push('collected')
    }
    if (isPercentageDisplayed) {
      tempKeys.push('percentages')
    }

    setKeys(tempKeys)
  }, [isTotalsDisplayed, isPercentageDisplayed])

  return (
    <>
      <StyledModifiers>
        <StyledLegend>
          <StyledButton
            type="button"
            role="switch"
            className="LegendButton__collected"
            aria-checked={isTotalsDisplayed}
            onClick={() => {
              if (!isPercentageDisplayed && isTotalsDisplayed) {
                displayPercentage(true)
              }
              displayTotals(!isTotalsDisplayed)
            }}
          >
            Argents collectés
          </StyledButton>
          <StyledButton
            type="button"
            role="switch"
            className="LegendButton__percentages"
            aria-checked={isPercentageDisplayed}
            onClick={() => {
              if (!isTotalsDisplayed && isPercentageDisplayed) {
                displayTotals(true)
              }
              displayPercentage(!isPercentageDisplayed)
            }}
          >
            % du total collecté
          </StyledButton>
        </StyledLegend>
      </StyledModifiers>
      <StyledDatavizContainer itemsNumber={data.rewardsData.length}>
        <ResponsiveBar
          data={data.rewardsData}
          keys={keys}
          indexBy="name"
          groupMode="grouped"
          layout="horizontal"
          margin={{
            top: graphMarginTop,
            bottom: graphMarginBottom,
            left: graphMarginLeft,
            right: graphMarginRight,
          }}
          padding={0.435}
          innerPadding={10}
          minValue={0}
          maxValue={100}
          tooltip={TooltipElement}
          axisLeft={{
            tickSize: 0,
            // these values are necessary for precise CSS selection
            tickPadding: 23,
            tickRotation: 23,
          }}
          axisRight={null}
          axisTop={
            isTotalsDisplayed && {
              tickSize: 6,
              format: e => `${Math.round(restoreTotalValue(e) / 1000)} k€`,
            }
          }
          axisBottom={
            isPercentageDisplayed && {
              tickSize: 6,
              format: e => `${restorePercentageValue(e)} %`,
            }
          }
          enableGridX={false}
          enableGridY={false}
          enableLabel={true}
          label={data =>
            data.id == 'collected'
              ? `${restoreTotalValue(data.value)} €`
              : `${data.value} %`
          }
          labelTextColor={COLORS.background1}
          motionStiffness={150}
          motionDamping={20}
          theme={{
            axis: {
              ticks: {
                text: {
                  fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
                  fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
                  fontSize: stepToRem(-1),
                },
              },
            },
            labels: {
              text: {
                fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
                fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
                fontSize: stepToRem(-1),
              },
            },
            tooltip: {
              container: {
                borderRadius: 'none',
                boxShadow: 'none',
                padding: 'none',
              },
            },
          }}
          colors={({ id, data }) => data[`${id}Color`]}
        />
      </StyledDatavizContainer>
    </>
  )
}
