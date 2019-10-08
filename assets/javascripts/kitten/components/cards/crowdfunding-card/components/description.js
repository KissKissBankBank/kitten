import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Title } from '../../../../components/typography/title'
import COLORS from '../../../../constants/colors-config'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import Truncate from 'react-truncate'

const COMPONENT_GUTTER = pxToRem(10)

const StyledTruncate = styled(Truncate)`
  white-space: nowrap;
`

const StyledContainerSubtitle = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  padding: 0 ${COMPONENT_GUTTER};
  margin-top: ${pxToRem(10)};
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  flex-shrink: 0;
  margin: ${pxToRem(5)} ${COMPONENT_GUTTER} ${pxToRem(5)} 0;

  ${({ loading }) =>
    loading &&
    css`
      background-color: ${COLORS.line2};
    `}
`

const StyledSubtitle = styled(Text)`
  line-height: 1;
  flex: 1;

  ${({ subTitleTruncate }) =>
    subTitleTruncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
    `}
`
const StyledSubtitleLoading = styled.span`
  display: block;
  background-color: ${COLORS.line2};
  width: ${pxToRem(80)};
  height: ${pxToRem(12)};
`

class Description extends PureComponent {
  static propTypes = {
    cardSubTitle: PropTypes.string,
    subTitleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    cardSubTitle: '',
    subTitleTruncate: true,
    loading: false,
  }

  render() {
    const { loading, cardSubTitle, subTitleTruncate } = this.props

    return (
      <StyledContainerSubtitle>
        <StyledHorizontalStroke size="tiny" loading={loading} />

        {cardSubTitle && !loading && (
          <StyledSubtitle size="micro" weight="regular" tag="p">
            {subTitleTruncate && (
              <StyledTruncate>{cardSubTitle}</StyledTruncate>
            )}

            {!subTitleTruncate && cardSubTitle}
          </StyledSubtitle>
        )}

        {loading && <StyledSubtitleLoading />}
      </StyledContainerSubtitle>
    )
  }
}

export default Description
