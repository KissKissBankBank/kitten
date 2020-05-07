import React from 'react'
import { ArrowContainer } from '../../../../components/layout/arrow-container'
import COLORS from '../../../../constants/colors-config'
import styled from 'styled-components'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'

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

export const TooltipElement = ({ point }) => (
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
