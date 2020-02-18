import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const COMPONENT_GUTTER = pxToRem(10)

const StyledContainer = styled.div`
  margin-top: ${pxToRem(15)};
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  line-height: 1;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-top: ${pxToRem(20)};
    padding: 0 ${COMPONENT_GUTTER};
  }
`

const StyledInfo = styled.div`
  margin-right: ${pxToRem(15)};
  margin-bottom: ${pxToRem(5)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-right: ${pxToRem(20)};
  }

  :last-child {
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

const StyledInfoLoadingLarge = styled(StyledInfoLoading)`
  width: ${pxToRem(65)};
  border-top: ${pxToRem(1)} solid ${COLORS.background1};
  border-bottom: 0;
`

const StyledText = styled(Text)`
  font-size: ${pxToRem(12)};
`

class Informations extends PureComponent {
  static propTypes = {
    info1: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    info2: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    info3: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    loading: PropTypes.bool,
  }

  static defaultProps = {
    info1: '',
    info2: '',
    info3: '',
    loading: false,
  }

  render() {
    const { info1, info2, info3 } = this.props

    if (!info1 && !info2 && !info3) return null

    return (
      <StyledContainer>
        {this.renderInfo(info1)}
        {this.renderInfo(info2)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
        {this.renderInfo(info3)}
      </StyledContainer>
    )
  }

  renderInfo(text) {
    const { loading } = this.props

    if (!text) return null

    return (
      <StyledInfo>
        {!loading && (
          <StyledText lineHeight="normal" weight="light" color="font1">
            {text}
          </StyledText>
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
