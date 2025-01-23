import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ArrowContainer } from '../../../components/layout/arrow-container'
import { ResponsiveLine } from '@nivo/line'
import data from './data.json'

const StyledDatavizLine = styled.div`
  height: ${pxToRem(500)};
  margin-left: ${pxToRem(-60)};
`

const StyledArrowContainer = styled(ArrowContainer)`
  display: inline-block;
  color: ${COLORS.background1};
  margin-bottom: ${pxToRem(10)};
  min-width: ${pxToRem(200)};
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

const TooltipElement = ({ point }) => (
  <StyledArrowContainer color={COLORS.font1} position="bottom" centered>
    <Text
      tag="p"
      weight="light"
      size="micro"
      className="k-u-align-center k-u-margin-none"
    >
      {point.data.xFormatted}
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
          Ce jour
        </Text>
        <Text
          size="tiny"
          weight="regular"
          tag="dd"
          className="Tooltip__defs__value"
        >
          {point.data.daily}&nbsp;€
        </Text>
      </div>
      <div className="Tooltip__defs__line">
        <Text
          size="tiny"
          weight="light"
          tag="dt"
          className="Tooltip__defs__title"
        >
          Cumulé
        </Text>
        <Text
          size="tiny"
          weight="regular"
          tag="dd"
          className="Tooltip__defs__value"
        >
          {point.data.y}&nbsp;€
        </Text>
      </div>
      <div className="Tooltip__defs__line">
        <Text
          size="tiny"
          weight="light"
          tag="dt"
          className="Tooltip__defs__title"
        >
          Contributeurs
        </Text>
        <Text
          size="tiny"
          weight="regular"
          tag="dd"
          className="Tooltip__defs__value"
        >
          {point.data.contributors}
        </Text>
      </div>
    </dl>
  </StyledArrowContainer>
)

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 0, bottom: 50, left: 60 }}
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
    colors="#19b4fa"
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
        lineStyle: { stroke: '#0496cc', strokeWidth: 2, strokeDasharray: 4 },
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
        lineStyle: { stroke: '#61d079', strokeWidth: 2, strokeDasharray: 4 },
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

export const DatavizLine = () => (
  <Container>
    <Grid>
      <GridCol col-l="10" offset-l="1">
        <StyledDatavizLine>
          <MyResponsiveLine data={data} />
        </StyledDatavizLine>
      </GridCol>
    </Grid>
  </Container>
)
