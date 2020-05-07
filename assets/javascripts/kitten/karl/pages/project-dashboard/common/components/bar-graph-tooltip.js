import styled from 'styled-components'
import { pxToRem } from '../../../../../helpers/utils/typography'
import COLORS from '../../../../../constants/colors-config'

export const BarGraphTooltip = styled.div`
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
