import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const COMPONENT_GUTTER = pxToRem(10)

const StyledContainer = styled.div`
  margin-top: ${pxToRem(15)};
  margin-bottom: ${pxToRem(5)};
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${COMPONENT_GUTTER};
  line-height: 1;
`

const StyledInfo = styled.div`
  margin-top: ${pxToRem(5)};
  margin-right: ${pxToRem(30)};

  &:last-child {
    margin-right: 0;
  }
`

const StyledInfoLoading = styled.span`
  display: block;
  background-color: ${COLORS.line2};
  border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
  width: ${pxToRem(40)};
  height: ${pxToRem(16)};
`

const StyledInfoLoadingLarge = styled.span`
  width: ${pxToRem(65)};
  border-top: ${pxToRem(1)} solid ${COLORS.background1};
  border-bottom: 0;
`

class Informations extends PureComponent {
  render() {
    const { info1, info2, info3 } = this.props

    if (!info1 && !info2 && !info3) return null

    return (
      <StyledContainer>
        {this.renderInfo(info1)}
        {this.renderInfo(info2)}
        {this.renderInfo(info3, true)}
      </StyledContainer>
    )
  }

  renderInfo(text) {
    const { loading } = this.props

    return (
      <StyledInfo>
        {!loading && (
          <Text size="micro" lineHeight="normal" weight="light">
            {text}
          </Text>
        )}

        {loading && (
          <>
            <StyledInfoLoading />
            <StyledInfoLoadingLarge />
          </>
        )}
      </StyledInfo>
    )
  }
}

export default Informations
