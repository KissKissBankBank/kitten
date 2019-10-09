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

class Description extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    titlesMinHeight: PropTypes.bool,
    titleTruncate: PropTypes.bool,
    subTitleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    title: '',
    subTitle: '',
    titlesMinHeight: true,
    titleTruncate: true,
    subTitleTruncate: true,
    loading: false,
  }

  render() {
    const {
      loading,
      title,
      subTitle,
      titleTruncate,
      subTitleTruncate,
      titlesMinHeight,
      titleProps,
    } = this.props

    return (
      <StyledContainer titlesMinHeight={titlesMinHeight}>
        {this.renderTitle()}
        {this.renderSubtitle()}
      </StyledContainer>
    )
  }

  renderTitle() {
    const { loading, titleProps, titleTruncate, title } = this.props

    return (
      <StyledTitle>
        {!loading && (
          <Title
            tag="p"
            {...titleProps}
            modifier="senary"
            margin={false}
            className="k-Card__title"
          >
            {titleTruncate && (
              <StyledTruncate lines={2}>{title}</StyledTruncate>
            )}

            {!titleTruncate && title}
          </Title>
        )}

        {loading && (
          <>
            <StyledTitleLoading />
            <StyledTitleSmallLoading />
          </>
        )}
      </StyledTitle>
    )
  }

  renderSubtitle() {
    const { subTitle, loading, subTitleTruncate } = this.props

    return (
      <StyledContainerSubtitle>
        <StyledHorizontalStroke size="tiny" loading={loading} />

        {subTitle && !loading && (
          <StyledSubtitle size="micro" weight="regular" tag="p">
            {subTitleTruncate && <StyledTruncate>{subTitle}</StyledTruncate>}

            {!subTitleTruncate && subTitle}
          </StyledSubtitle>
        )}

        {loading && <StyledSubtitleLoading />}
      </StyledContainerSubtitle>
    )
  }
}

export default Description
