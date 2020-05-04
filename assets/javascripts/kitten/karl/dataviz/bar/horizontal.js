import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Text } from '../../../components/typography/text'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ResponsiveBar } from '@nivo/bar'
import { horizontalGraphData } from './data-horizontal'

const StyledDatavizHorizontalBar = styled.div`
  height: ${pxToRem(500)};
  margin-left: ${pxToRem(-20)};
  margin-right: ${pxToRem(-20)};

  text[transform='translate(-23,0) rotate(23)'] {
    transform: translate(0px, -50px);
    text-anchor: start;
    font-size: ${stepToRem(-1)};
  }
`

const StyledTooltip = styled.div`
  color: ${COLORS.background1};
  background-color: ${COLORS.font1};
  min-width: ${pxToRem(150)};
  padding: ${pxToRem(15)} ${pxToRem(20)} ${pxToRem(20)};

  .Tooltip__horizontalStroke {
    width: ${pxToRem(10)};
    height: ${pxToRem(2)};
    background: ${COLORS.background1};
    margin: ${pxToRem(10)} auto ${pxToRem(20)};
  }

  .Tooltip__defs {
    .Tooltip__defs__line {
      display: flex;
      justify-content: space-between;
    }
    .Tooltip__defs__value {
      padding-left: 2em;
    }
  }
`

const restoreTotalValue = value =>
  Math.round(
    value *
      (horizontalGraphData.maxValues.collected /
        horizontalGraphData.thresholds.collected),
  )
const restorePercentageValue = value =>
  Math.round(
    value *
      (horizontalGraphData.maxValues.percentages /
        horizontalGraphData.thresholds.percentages),
  )

const TooltipElement = ({ value, data }) => {
  let displayLegend = data.percentagesLegend
  let displayValue = `${restorePercentageValue(data.percentages)} %`

  if (value === data.collected) {
    displayLegend = data.collectedLegend
    displayValue = restoreTotalValue(data.collected)
  }

  return (
    <StyledTooltip>
      <Text
        tag="p"
        weight="light"
        size="micro"
        className="k-u-align-center k-u-margin-none"
      >
        {data.name}
      </Text>
      <div className="Tooltip__horizontalStroke" />
      <dl className="Tooltip__defs k-u-margin-none">
        <div className="Tooltip__defs__line">
          <Text
            size="tiny"
            weight="light"
            tag="dt"
            className="Tooltip__defs__title"
          >
            {displayLegend}
          </Text>
          <Text
            size="tiny"
            weight="regular"
            tag="dd"
            className="Tooltip__defs__value"
          >
            {displayValue}
          </Text>
        </div>
      </dl>
    </StyledTooltip>
  )
}

const StyledModifiers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 ${pxToRem(20)};
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

const MyResponsiveBar = ({ data }) => {
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

      <ResponsiveBar
        data={data.rewardsData}
        keys={keys}
        indexBy="name"
        groupMode="grouped"
        layout="horizontal"
        margin={{ top: 40, right: 20, bottom: 50, left: 20 }}
        padding={0.4}
        innerPadding={10}
        minValue={0}
        maxValue={100}
        tooltip={TooltipElement}
        axisLeft={{
          tickSize: 0,
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
              },
            },
          },
          labels: {
            text: {
              fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
              fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
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
    </>
  )
}

export const DatavizHorizontalBar = () => (
  <Container>
    <Grid>
      <GridCol col-l="10" offset-l="1">
        <StyledDatavizHorizontalBar>
          <MyResponsiveBar data={horizontalGraphData} />
        </StyledDatavizHorizontalBar>
      </GridCol>
    </Grid>
  </Container>
)
