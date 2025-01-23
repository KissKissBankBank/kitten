import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { TooltipElement } from './tooltip'
import data from './data.json'
import GRAPH_COLORS from '../common/constants/graph-colors'

export const LineGraph = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 0, bottom: 20, left: 60 }}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d',
      precision: 'day',
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: 'linear',
      min: 0,
      max: 400,
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickValues: 'every week',
      format: '%d %B',
      tickSize: 0,
    }}
    axisLeft={{
      tickValues: 5,
      tickSize: 0,
      legend: 'collecté',
      legendOffset: -40,
      legendPosition: 'start',
      format: e => `${e} €`,
    }}
    pointSize={11}
    pointColor="#fff"
    pointBorderWidth={3}
    pointBorderColor={{ from: 'serieColor' }}
    colors={GRAPH_COLORS.graphColorA}
    enableArea={true}
    areaOpacity={0.05}
    enableGridX={false}
    useMesh={true}
    motionStiffness={150}
    motionDamping={20}
    enableCrosshair={false}
    tooltip={TooltipElement}
    markers={[
      {
        axis: 'y',
        value: 254,
        lineStyle: {
          stroke: GRAPH_COLORS.goalColorA,
          strokeWidth: 2,
          strokeDasharray: 4,
        },
        legend: 'objectif collecte',
        legendOrientation: 'horizontal',
        legendOffsetX: 0,
        textStyle: {
          fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
          fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
          fontSize: 14,
        },
      },
      {
        axis: 'y',
        value: 359,
        lineStyle: {
          stroke: GRAPH_COLORS.goalColorB,
          strokeWidth: 2,
          strokeDasharray: 4,
        },
        legend: 'objectif réel',
        legendOrientation: 'horizontal',
        legendOffsetX: 0,
        textStyle: {
          fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
          fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
          fontSize: 14,
        },
      },
    ]}
    theme={{
      axis: {
        legend: {
          text: {
            fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
            fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
          },
        },
        ticks: {
          text: {
            fontFamily: TYPOGRAPHY.fontStyles.regular.fontFamily,
            fontWeight: TYPOGRAPHY.fontStyles.regular.fontWeight,
          },
        },
      },
    }}
  />
)
