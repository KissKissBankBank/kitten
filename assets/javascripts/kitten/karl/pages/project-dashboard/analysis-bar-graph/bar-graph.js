import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonGroup } from '../../../../components/buttons/button-group'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ResponsiveBar } from '@nivo/bar'
import { verticalGraphData as data } from './data'
import { TooltipElement } from './tooltip'

const StyledModifiers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 ${pxToRem(60)};

  .Legend {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .LegendButton{
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
  }
`

export const restoreVisitValue = value =>
  Math.round(value * (data.maxValues.visits / data.thresholds.visits))
export const restoreContributionsValue = value =>
  Math.round(
    value * (data.maxValues.contributions / data.thresholds.contributions),
  )

export const BarGraph = () => {
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
        <div className="Legend">
          <button
            type="button"
            role="switch"
            className="LegendButton LegendButton__visits"
            aria-checked={isVisitsDisplayed}
            onClick={() => {
              if (!isContributionsDisplayed && isVisitsDisplayed) {
                displayContributions(true)
              }
              displayVisits(!isVisitsDisplayed)
            }}
          >
            Pages vues
          </button>
          <button
            type="button"
            role="switch"
            className="LegendButton LegendButton__contributions"
            aria-checked={isContributionsDisplayed}
            onClick={() => {
              if (!isVisitsDisplayed && isContributionsDisplayed) {
                displayVisits(true)
              }
              displayContributions(!isContributionsDisplayed)
            }}
          >
            Montants collectés
          </button>
        </div>

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
