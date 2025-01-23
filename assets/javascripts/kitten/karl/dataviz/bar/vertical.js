import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Text } from '../../../components/typography/text'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ResponsiveBar } from '@nivo/bar'
import { verticalGraphData } from './data-vertical'

import { ButtonGroup } from '../../../components/buttons/button-group'

const StyledDatavizVerticalBar = styled.div`
  height: ${pxToRem(500)};
  margin-left: ${pxToRem(-60)};
  margin-right: ${pxToRem(-60)};
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

const restoreVisitValue = value =>
  Math.round(
    value *
      (verticalGraphData.maxValues.visits /
        verticalGraphData.thresholds.visits),
  )
const restoreContributionsValue = value =>
  Math.round(
    value *
      (verticalGraphData.maxValues.contributions /
        verticalGraphData.thresholds.contributions),
  )

const TooltipElement = ({ id, value, data }) => {
  let displayLegend = data.contributionsLegend
  let displayValue = restoreContributionsValue(data.contributions)

  if (value === data.visits) {
    displayLegend = data.visitsLegend
    displayValue = restoreVisitValue(data.visits)
  }

  return (
    <StyledTooltip>
      <Text
        tag="p"
        weight="light"
        size="micro"
        className="k-u-align-center k-u-margin-none"
      >
        {id}
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
  margin: 0 ${pxToRem(60)};
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

  &.LegendButton__visits::before {
    color: #19b4fa;
  }
  &.LegendButton__contributions::before {
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
  const [keys, setKeys] = useState(['visits', 'contributions'])
  const [isVisitsDisplayed, displayVisits] = useState(true)
  const [isContributionsDisplayed, displayContributions] = useState(true)
  const [dataSource, setDataSource] = useState('weekData')

  useEffect(() => {
    let tempKeys = []

    if (isVisitsDisplayed) {
      tempKeys.push('visits')
    }
    if (isContributionsDisplayed) {
      tempKeys.push('contributions')
    }

    setKeys(tempKeys)
  }, [isVisitsDisplayed, isContributionsDisplayed])

  return (
    <>
      <StyledModifiers>
        <StyledLegend>
          <StyledButton
            type="button"
            role="switch"
            className="LegendButton__visits"
            aria-checked={isVisitsDisplayed}
            onClick={() => {
              if (!isContributionsDisplayed && isVisitsDisplayed) {
                displayContributions(true)
              }
              displayVisits(!isVisitsDisplayed)
            }}
          >
            Pages vues
          </StyledButton>
          <StyledButton
            type="button"
            role="switch"
            className="LegendButton__contributions"
            aria-checked={isContributionsDisplayed}
            onClick={() => {
              if (!isVisitsDisplayed && isContributionsDisplayed) {
                displayVisits(true)
              }
              displayContributions(!isContributionsDisplayed)
            }}
          >
            Montants collectés
          </StyledButton>
        </StyledLegend>

        <ButtonGroup as="radiogroup">
          <ButtonGroup.Button
            type="button"
            role="radio"
            onClick={() => setDataSource('globalData')}
            aria-checked={dataSource === 'globalData'}
            active={dataSource === 'globalData'}
            modifier={dataSource === 'globalData' ? 'helium' : 'hydrogen'}
          >
            Global
          </ButtonGroup.Button>
          <ButtonGroup.Button
            type="button"
            role="radio"
            onClick={() => setDataSource('weekData')}
            aria-checked={dataSource === 'weekData'}
            active={dataSource === 'weekData'}
            modifier={dataSource === 'weekData' ? 'helium' : 'hydrogen'}
          >
            7 derniers jours
          </ButtonGroup.Button>
          <ButtonGroup.Button
            type="button"
            role="radio"
            onClick={() => setDataSource('dayData')}
            aria-checked={dataSource === 'dayData'}
            active={dataSource === 'dayData'}
            modifier={dataSource === 'dayData' ? 'helium' : 'hydrogen'}
          >
            Dernières 24h
          </ButtonGroup.Button>
        </ButtonGroup>
      </StyledModifiers>

      <ResponsiveBar
        data={data[dataSource]}
        keys={keys}
        indexBy="date"
        groupMode="grouped"
        margin={{ top: 40, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        innerPadding={dataSource === 'weekData' ? 10 : 4}
        minValue={0}
        maxValue={100}
        tooltip={TooltipElement}
        axisTop={null}
        axisBottom={{
          tickSize: 0,
          format: e => e,
        }}
        axisLeft={
          isVisitsDisplayed && {
            tickSize: 0,
            format: e => restoreVisitValue(e),
          }
        }
        axisRight={
          isContributionsDisplayed && {
            tickSize: 0,
            format: e => `${restoreContributionsValue(e)} €`,
          }
        }
        enableGridX={false}
        enableLabel={false}
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

export const DatavizVerticalBar = () => (
  <Container>
    <Grid>
      <GridCol col-l="10" offset-l="1">
        <StyledDatavizVerticalBar>
          <MyResponsiveBar data={verticalGraphData} />
        </StyledDatavizVerticalBar>
      </GridCol>
    </Grid>
  </Container>
)
