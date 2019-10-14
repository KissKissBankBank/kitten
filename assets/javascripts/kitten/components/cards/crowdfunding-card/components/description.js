import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Title } from '../../../../components/typography/title'
import COLORS from '../../../../constants/colors-config'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import Truncate from 'react-truncate'
import { ScreenConfig } from '../../../../constants/screen-config'

const COMPONENT_GUTTER = pxToRem(10)

const StyledTruncate = styled(Truncate)`
  white-space: nowrap;
`

const StyledContainerSubtitle = styled.div`
  display: none;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    display: flex;
    align-items: center;
    line-height: 1;
    padding: 0 ${COMPONENT_GUTTER};
    margin-top: ${pxToRem(10)};
  }
`

const StyledHorizontalStroke = styled(({ loading, ...others }) => (
  <HorizontalStroke {...others} />
))`
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

const StyledSubtitleWidget = styled(Text)`
  padding-left: ${COMPONENT_GUTTER};
  margin: ${pxToRem(5)} 0 ${pxToRem(20)} 0;
`

class Description extends PureComponent {
  static propTypes = {
    subTitle: PropTypes.string,
    subTitleWidget: PropTypes.string,
    subTitleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    titleProps: PropTypes.shape(),
  }

  static defaultProps = {
    subTitle: '',
    subTitleWidget: '',
    subTitleTruncate: true,
    loading: false,
    titleProps: {},
  }

  render() {
    const { loading, subTitle, subTitleTruncate, subTitleWidget } = this.props

    return (
      <>
        {subTitle && this.renderDescription()}
        {subTitleWidget && this.renderDescriptionWidget()}
      </>
    )
  }

  renderDescription() {
    const { loading, subTitle, subTitleTruncate } = this.props

    return (
      <StyledContainerSubtitle>
        <StyledHorizontalStroke size="tiny" loading={loading} />

        {subTitle && !loading && (
          <StyledSubtitle size="micro" weight="regular" tag="p" color="font1">
            {subTitleTruncate && <StyledTruncate>{subTitle}</StyledTruncate>}

            {!subTitleTruncate && subTitle}
          </StyledSubtitle>
        )}

        {loading && <StyledSubtitleLoading />}
      </StyledContainerSubtitle>
    )
  }

  renderDescriptionWidget() {
    const { subTitleWidget, subTitleTruncate, loading } = this.props

    return (
      <>
        {StyledSubtitleWidget && !loading && (
          <StyledSubtitleWidget
            tag="p"
            size="micro"
            color="font1"
            lineHeight="normal"
            weight="light"
          >
            {subTitleTruncate && (
              <StyledTruncate lines={2}>{subTitleWidget}</StyledTruncate>
            )}

            {!subTitleTruncate && subTitleWidget}
          </StyledSubtitleWidget>
        )}

        {loading && <StyledSubtitleLoading />}
      </>
    )
  }
}

export default Description
